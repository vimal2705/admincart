import React, {useState, useEffect} from 'react';
import {Image, Linking, Text, View} from 'react-native';

import * as firebase from "firebase"



const Post = ({item, userDetails}) => {



    useEffect(() => {
      console.log(item)

     


    }, [item])

    // const upVotePost = () => {
    //   database()
    //     .ref(`/posts/${item.id}/vote/${userDetails.uid}`)
    //     .set({
    //       upvote: 1
    //     })
    //     .then(() => console.log('UPVOTED'))
    // }

    // const downVotePost = () => {
    //   database()
    //     .ref(`/posts/${item.id}/vote/${userDetails.uid}`)
    //     .set({
    //       downvote: 1
    //     })
    //     .then(() => console.log('DOWNVOTED'))
    // }

    

    return (
      <View
        style={{
          backgroundColor: '#0f4c75',
          borderColor: '#0f4c75',
        }}>
     
        
        <View
     
          style={{
            backgroundColor: 'transparent',
          }}>
          <Text
            numberOfLines={2}
            style={{
              color: '#fff',
            }}>
            {item.description}
          </Text>
        </View>
  
        <View
          style={{
            backgroundColor: '#0f4c75',
          }}>
       
         
        </View>
      </View>
    );
  
}

export default Post