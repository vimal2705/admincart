import React, {useState} from 'react'
import {StyleSheet, ScrollView, Text,TouchableOpacity, View, Button,  TextInput,} from 'react-native'


// import storage from '@react-native-firebase/storage'
// import ProgressBar from 'react-native-progress/Bar'

// import ImagePicker from 'react-native-image-picker'
// import {options} from '../utils/options'

//redux
import propTypes from 'prop-types'
import {signUp} from '../action/auth'
import {connect} from 'react-redux'

const SignUp = ({signUp}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [instaUserName, setInstaUserName] = useState('')
    const [country, setCountry] = useState('')
    const [bio, setBio] = useState('')
    const [image, setImage] = useState(
        'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png'
    )

    const [imageUploading, setImageUploading] = useState(false)
    const [uploadStatus, setUploadStatus] = useState(null)

    // const chooseImage = async () => {
    //     ImagePicker.showImagePicker(options, (response) => {
    //         console.log('Response = ', response)

    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //           } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //           } else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //           } else {
    //             console.log(response)
    //             uploadImage(response)
    //           }
             
               
    //     })
    // }


    // const uploadImage = async (response) => {
    //     setImageUploading(true)
    //     const reference = storage().ref(response.fileName)

    //     const task = reference.putFile(response.path)
    //     task.on('state_changed', (taskSnapshot) => {
    //         const percentage = (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 1000

    //         setUploadStatus(percentage)
    //     })

    //     task.then(async () => {
    //         const url = await reference.getDownloadURL()

    //         setImage(url)
    //         setImageUploading(false)
    //     })
    // }

    const doSignUp = async () => {
        signUp({name, instaUserName, bio, country, email, password, image})
    }



    return (
        <View style={styles.container}>
        
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.imageContainer}>
                {/* <TouchableOpacity onPress={chooseImage}>
                  <Thumbnail large source={{uri: image}} />
                </TouchableOpacity> */}
              </View>
    
              {/* {imageUploading && (
                <ProgressBar progress={uploadStatus} style={styles.progress} />
              )} */}
    
              <View>
                <View style={styles.formItem}>
                  <TextInput
                    placeholder="name"
                    value={name}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setName(text)}
                  />
                </View>
                <View style={styles.formItem}>
                  <TextInput
                    placeholder="email"
                    value={email}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setEmail(text)}
                  />
                </View>
                <View style={styles.formItem}>
                  <TextInput
                    placeholder="password"
                    value={password}
                    secureTextEntry={true}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setPassword(text)}
                  />
                </View>
                <View style={styles.formItem}>
                  <TextInput
                    placeholder="Instagram user name"
                    value={instaUserName}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setInstaUserName(text)}
                  />
                </View>
                <View style={styles.formItem}>
                  <TextInput
                    placeholder="Your Short Bio"
                    value={bio}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setBio(text)}
                  />
                </View>
                <View style={styles.formItem}>
                  <TextInput
                    placeholder="country"
                    value={country}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setCountry(text)}
                  />
                </View>
                <Button onPress={doSignUp}>
                  <Text>SignUp</Text>
                </Button>
              </View>
            </ScrollView>
     
        </View>
      );
    
}

const mapDispatchToProps = {
    signUp: (data) => signUp(data)
}

SignUp.propTypes = {
    signUp: propTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(SignUp)



const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      flex: 1,
      justifyContent: 'flex-start',
    },
    imageContainer: {
      alignItems: 'center',
      marginVertical: 5,
    },
    progress: {width: null, marginBottom: 20},
    formItem: {
      marginBottom: 20,
    },
  });