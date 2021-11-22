import React, {useEffect} from 'react'
import {Text} from 'react-native'
import 'react-native-gesture-handler'
import * as firebase from "firebase"
import { initializeApp } from 'firebase/app';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {useDispatch, connect} from 'react-redux'

// import AddPost from './screens/AddPost'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Home from './screens/Home'
import CustomHeader from './layout/CustomHeader'

import {SET_USER, IS_AUTHTHENTICATED} from './action/action.types'


import EmptyContainer from './componenets/EmptyContainer'
import {requestPermission} from './utils/AskPermission'


const firebaseConfig = {
  apiKey: "AIzaSyCfzUlAXelwMzGPkTUdGHn0PyAo7ZyvHCo",
  authDomain: "mycart-b84db.firebaseapp.com",
  databaseURL: "https://mycart-b84db-default-rtdb.firebaseio.com",
  projectId: "mycart-b84db",
  storageBucket: "mycart-b84db.appspot.com",
  messagingSenderId: "499852995645",
  appId: "1:499852995645:web:849bf5942d4ef501cb8e54"

};

 
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

const Root=({authState}) => {

  const dispatch = useDispatch();


  const onAuthStateChanged = (user) => {
    if (user) {
      dispatch({
        type: IS_AUTHTHENTICATED,
        payload: true
      })

      console.log(user._user.uid)

      firebase.database()
        .ref(`/users/${user._user.uid}`)
        .on('value', (snapshot) => {
          console.log('USER DETAILS', snapshot.val())
          dispatch({
            type: SET_USER,
            payload: snapshot.val(),
          })
        })


    } else {
      dispatch({
        type: IS_AUTHTHENTICATED,
        payload: false
      })
    }
  }

  useEffect(() => {
    // requestPermission()
    const susbcriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
    return susbcriber;
  }, [])

  if (authState.loading) {
      return <EmptyContainer/>
  }

    return(
        
        <>
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            header: (props) => <CustomHeader {...props} />,
          }}
          >
            {authState.isAuthenticated ? (
              <>
              <Stack.Screen name="Home" component={Home} />
              {/* <Stack.Screen name="AddPost" component={AddPost} /> */}
              </>
            ) : (
              <>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
        </>  
        
    )
}

const mapStateToProps = (state) => ({
  authState: state.auth
})

export default connect(mapStateToProps)(Root)