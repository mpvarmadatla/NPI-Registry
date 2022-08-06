import React from "react";
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = ({item}) =>{
   return (
       <View style={Styles.itemContainer}>
        <TouchableOpacity><Text style={{color:'#428bca'}}>{item.number}</Text></TouchableOpacity>
        <Text style={{color:'#000'}}>{`${item.basic.first_name} ${item.basic.last_name}`}</Text>        
        <Text style={{color:'#000'}}>{item.addresses[0].telephone_number}</Text>
       </View>
   )
}

const Styles = StyleSheet.create({
    itemContainer:{
     height:50,
     flexDirection:'row',
     justifyContent:'space-around',
     alignItems:'center',
     borderBottomWidth:1,
     borderBottomColor:'#D3D3D3',
     
     
    }
})

export default ListItem;