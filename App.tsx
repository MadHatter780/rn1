import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, ScrollView, NativeModules } from "react-native"
import Waifuku  from './Card';  
import Flexbox from './Flexbox';

const waifu = require('waifuku.jpg')

const App = () =>{
  
  return(
    <View style={{ width:'100%',height:'100%' }}>
     <Flexbox/>
      <ScrollView style={{ paddingHorizontal:10 }} >
        <Waifuku/>
        <Waifuku/>
        <Waifuku/>
      </ScrollView>  
    </View>
  )
}

export default App;
