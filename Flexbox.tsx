import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react';

class Flexbox extends Component{
    render(){
        return(
        <View style={{ borderBottomWidth:1 }}>
            <View style={{ paddingHorizontal:10,marginTop:4,paddingBottom:6 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.menu}></View>
                    <View style={styles.menu}></View>
                    <View style={styles.menu}></View>
                    <View style={styles.menu}></View>
                    <View style={styles.menu}></View>
                    <View style={styles.menu}></View>
                    <View style={styles.menu}></View>
                </ScrollView>
            </View>
          </View>
            
        )
    }
}

export default Flexbox

const styles = StyleSheet.create({
    menu:{
        height:50,
        width:50,
        backgroundColor:'red',
        borderRadius:100,
        marginRight:10,
        borderWidth:2,
        borderColor:'green',
        
    }
})