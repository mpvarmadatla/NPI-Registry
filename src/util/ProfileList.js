import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const ProfileList = ({title,value}) =>{
    return <View style={Styles.profileContainer}>
         <View style={{flex:0.5,borderRightWidth:1,padding:5,borderTopWidth:1}}>
        <Text>{title}</Text>
        </View>
        <View style={{flex:0.5,padding:5,borderTopWidth:1}}>
        <Text>{value}</Text>
        </View>
       </View>
}

const Styles = StyleSheet.create({
    profileContainer:{
      flexDirection:'row',
       alignItems:'center'
    }
  })

export default ProfileList;