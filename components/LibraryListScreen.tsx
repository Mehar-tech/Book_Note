import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const getAllRestaurent =  async() => {
  try {
    const response = await fetch("https://simple-books-api.glitch.me/books?type=fiction");
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export default function LibraryListScreen({navigation}) {
  const [books, setBooks] = useState();
  const showBooks = (item: any, index: number) => {
    return(
      <TouchableOpacity style = {styles.renderItemStyle} 
        onPress={() => {navigation.navigate("LibraryDetails",{"itemName" : item.name})}}
      >
        <View style ={styles.innerContainer}>
        <Image 
          style = {styles.imageStyle}
          source={require("../components/Images/restaurentImage.jpg")}
        />
        </View>
        <Text style={styles.textStyle}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  const search = text => {
    if(text ==="") {
      setBooks(books)
    } else {
      let tempList = books.filter(item => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1
      });

    }
  }
  useEffect(() => {
    getAllRestaurent().then(setBooks)
  })
  return (
    <View style={{backgroundColor:"#9c3aa1", flex:1}}>
      <TouchableOpacity style = {{backgroundColor:"red", margin:10}}>
        <TextInput
          style = {{paddingBottom: 10}}
           value={books}
           placeholder="Search"
           keyboardType="ascii-capable"
        />
        <Button title = {"Search"}
        onPress={() => {search}}
        />
      </TouchableOpacity>
      <FlatList data={books} renderItem={({item,index}) => showBooks(item,index) 
    }/>
    </View>
  )
}
      const styles = StyleSheet.create({
        renderItemStyle : {
         backgroundColor:'#65187d',
         height:100, 
         margin:10,
         borderRadius: 20,
         justifyContent:'center',
         alignItems:'center',
         flexDirection:'row'
        },
        textStyle: {
          color: "white",
          fontSize:18,
          padding: 10
        },
        imageStyle :{
          resizeMode:'contain',
          height:80,
          width:80,
          borderRadius:100
        },
        innerContainer : {
          paddingRight:25 
        }
      })