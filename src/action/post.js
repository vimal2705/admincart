import * as firebase from "firebase"
import {SET_POST, ERROR_POST} from './action.types';

export const getPosts = () => async (dispatch) => {
  try {
   firebase.database()
      .ref('/posts/')
      .on('value', (snapshot) => {
        console.log('User data: ', snapshot.val());
        if (snapshot.val()) {
          dispatch({
            type: SET_POST,
            payload: Object.values(snapshot.val()),
          });
        } else {
          dispatch({
            type: SET_POST,
            payload: [],
          });
        }
      });
  } catch (error) {
    dispatch({
      type: ERROR_POST,
    });
  }
};
