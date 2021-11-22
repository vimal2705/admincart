import React, {useState} from 'react'
import {   View,StyleSheet,Text,Button, ScrollView, Image, TouchableOpacity,TextInput} from 'react-native'



import Welcome from '../assets/undraw_welcome_cats_thqn.png'


import {connect} from 'react-redux'
import {signIn} from '../action/auth'
import propTypes from 'prop-types'

const SignIn = ({navigation, signIn}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const doSignIn = () => {
        signIn({email, password})
    }


    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Text style={styles.heading}>Welcome to the Travel-gram Social App</Text>
    
            <Image
              source={Welcome}
              style={{width: null, height: 150, marginTop: 30}}
              resizeMode="contain"
            />
    
            <View>
              <View  style={styles.formItem}>
                <TextInput
                  placeholder="enter your registerd email"
                  value={email}
                  style={{color: '#eee'}}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View  style={styles.formItem}>
                <TextInput
                  placeholder="enter your registerd password"
                  value={password}
                  secureTextEntry={true}
                  style={{color: '#eee'}}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
              <Button  onPress={doSignIn}>
                <Text>SignIn</Text>
              </Button>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                style={{marginTop: 10}}>
                <Text style={{color: '#fff', textAlign: 'center'}}>
                  Do not have an account, SignUp here
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      );
}

const mapDispatchToProps = {
    signIn: (data) => signIn(data)
}

SignIn.propTypes = {
    signIn: propTypes.func.isRequired
}


export default connect(null, mapDispatchToProps)(SignIn)

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      flex: 1,
      justifyContent: 'flex-start',
    },
    heading: {
      textAlign: 'center',
      color: '#fdcb9e',
      marginHorizontal: 5,
      marginTop: 30,
    },
    formItem: {
      marginBottom: 20,
    },
  });
  