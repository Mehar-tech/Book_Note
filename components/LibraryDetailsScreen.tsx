import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LibraryDetailsScreen({route, navigation}) {
  return (
    <View style ={{flex:1, justifyContent:'center',alignItems:"center"}}>
      <Text style={styles.textStyle}>{route.params.itemName}</Text>
      <TouchableOpacity style = {{borderRadius:4}}
        onPress={() => {navigation.pop()}}>
          <Text style ={styles.backButton}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    borderRadius:1,
    color: "black",
    fontSize:30
  },
  backButton : {
    backgroundColor: "#2c23ad",
    color:"white",
    fontSize:20,
    marginTop: 100,
    padding: 10
  }
})