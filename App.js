import React from 'react'
import store from './src/store'
import {Provider} from 'react-redux'

import Root from './src/Root'

const App = () => {
    return(
        <Provider store={store}>
            <Root/>
        </Provider>
    )
}

export default App
// import React, {useEffect} from 'react'
// import {Text} from 'react-native'
// import 'react-native-gesture-handler'
// import firebase from './src/Firebase'

// import store from './src/store'

// import {NavigationContainer} from '@react-navigation/native'
// import {createStackNavigator} from '@react-navigation/stack'

// import {useDispatch, connect,Provider} from 'react-redux'

// // import AddPost from './screens/AddPost'
// import SignIn from './src/screens/SignIn'
// import SignUp from './src/screens/SignUp'
// import Home from './src/screens/Home'
// import CustomHeader from './src/layout/CustomHeader'

// import {SET_USER, IS_AUTHTHENTICATED} from './src/action/action.types'


// import EmptyContainer from './src/componenets/EmptyContainer'
// import {requestPermission} from './src/utils/AskPermission'

// const Stack = createStackNavigator();

// const App=({authState}) => {

//   const dispatch = useDispatch();


//   const onAuthStateChanged = (user) => {
//     if (user) {
//       dispatch({
//         type: IS_AUTHTHENTICATED,
//         payload: true
//       })

//       console.log(user._user.uid)

//       firebase.database()
//         .ref(`/users/${user._user.uid}`)
//         .on('value', (snapshot) => {
//           console.log('USER DETAILS', snapshot.val())
//           dispatch({
//             type: SET_USER,
//             payload: snapshot.val(),
//           })
//         })


//     } else {
//       dispatch({
//         type: IS_AUTHTHENTICATED,
//         payload: false
//       })
//     }
//   }

//   useEffect(() => {
//     // requestPermission()
//     const susbcriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
//     return susbcriber;
//   }, [])

//   if (authState.loading) {
//       return <EmptyContainer/>
//   }

//     return(
        
//         <>
//         <NavigationContainer>
//         <Provider store={store}>
//           <Stack.Navigator
//           screenOptions={{
//             header: (props) => <CustomHeader {...props} />,
//           }}
//           >
//             {authState.isAuthenticated ? (
//               <>
//               <Stack.Screen name="Home" component={Home} />
//               {/* <Stack.Screen name="AddPost" component={AddPost} /> */}
//               </>
//             ) : (
//               <>
//               <Stack.Screen name="SignIn" component={SignIn} />
//               <Stack.Screen name="SignUp" component={SignUp} />
//               </>
//             )}
//           </Stack.Navigator>
//           </Provider>
//         </NavigationContainer>
//         </>  
        
//     )
// }

// const mapStateToProps = (state) => ({
//   authState: state.auth
// })

// export default connect(mapStateToProps)(App)