import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, ScrollView } from "react-native"

const waifu = require('waifuku.jpg')


class Waifuku extends Component{
    render(){
      return(
        <View style={styles.card}>
          <Image source={require('./waifuku.jpg')} style={styles.images}/>
          <View>
            <Text style={{ fontSize:20,fontWeight:800,marginTop:2 }}>
             Character Review : Hu Tao
            </Text>
            <View style={{ flexDirection:'row',marginTop:5 }}>
              <Categories/>
              <Categories/>
            </View>
            <View>
              <Text style={{ marginTop:5 }}>
                The Gravekeeper with childish and funny,with pyro elemnt with her and bastard Ghost
              </Text>
            </View>
          </View>
        </View>
      )
    }
  }
  
  class Categories extends Component{
    render(){
      return(
        <View style={{ backgroundColor:'red',marginRight:4,borderRadius:4,paddingHorizontal:5,paddingVertical:1 }}>
          <Text style={{ fontSize:14,color:'white',fontWeight:'bold' }}>
            Pyro
          </Text>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    text:{
      fontSize:40,
    },
    card:{
      width:'100%',
      
      marginTop:10,
      borderWidth:1,
      padding:6,
      borderRadius:4
    },
    images:{
      width:'100%',
      height:200,
      borderRadius:4
      
    }
  })

  export default Waifuku;