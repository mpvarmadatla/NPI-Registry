import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const Header = () =>{
    return <View style={Styles.headerContainer}>
        <View style={{flex:0.5,borderRightWidth:1,padding:5}}>
        <Text>Name</Text>
        </View>
        <View style={{flex:0.5,padding:5}}>
        <Text>Value</Text>
        </View>
    </View>
}

const Styles = StyleSheet.create({
  headerContainer:{
    flexDirection:'row',
     alignItems:'center'
  }
})

export default Header;