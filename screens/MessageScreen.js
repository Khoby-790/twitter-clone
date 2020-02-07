import React from 'react';
import {View, Text} from 'react-native';


const MessageScreen = ()=>{
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text style={{
        fontSize: 50,
      }}>Hello World</Text>
    </View>
  )
}


export default MessageScreen;