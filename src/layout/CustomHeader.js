import React from 'react'
import {StyleSheet,Text,
    View} from 'react-native'


import { connect} from 'react-redux'
import propTypes from 'prop-types'
import {signOut} from '../action/auth'


const CustomHeader = ({signOut, authState, navigation}) => {
    return(
        <View
        androidStatusBarColor="#0f4c75"
        style={{
            backgroundColor: "#0f4c75"
        }}
        ><Text>assas</Text>
      
       
        
        </View>
    )
}

const mapStateToProps = (state) => ({
    authState: state.auth
})

const mapDispatchToProps = {
    signOut
}

CustomHeader.prototypes = {
    signOut: propTypes.func.isRequired,
    authState: propTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps )(CustomHeader)