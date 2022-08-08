import React, { useState } from "react";
import {Text,View,StyleSheet, TextInput,Button, Alert, ScrollView} from 'react-native';
import { useSelector } from "react-redux";
import { data } from "../util/meta";

const HomeNpiComponent = ({navigation}) =>{
    const [text,setText] = useState(null)
    const username = useSelector((state)=>state.user.username)
    const onPress = () =>{
        if(text){
            navigation.navigate('UserList',{
                lastname:text
            })
            return
        }
       return Alert.alert("Check LastName","lastname cannot be empty",[{text:"cancel",style:"cancel"}],{cancelable:true})
    }
    
    return(
        <View style={Styles.container}>
            <View style={{flex:0.1,alignSelf:'stretch',justifyContent:'center'}}>
            <View>
                {username && <Text style={{color:'#000',fontSize:25,fontWeight:'bold'}}>{`Welcome Back ${username} !`}</Text>}
            </View>
            <HomeHeader HeaderName={'Search NPI Records'} />
            </View>
            <View style={Styles.box}>
            <ScrollView>
            {data && data.map((item)=> <View key={item.type}>
                <Text style={{marginBottom:10,color:'#000'}}>{item.type}</Text>
                <TextInput style={Styles.textInput}  /></View>)}
            <View style={{width:300}}>
            <Button title="submit" onPress={onPress}  />
            </View>
            </ScrollView>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff', 
        justifyContent:"center",
        alignItems:'center',
        padding:10
    },
    box:{
      flex:0.9,
      backgroundColor:'#fff',
      alignSelf:'stretch',
      padding:30,
      backgroundColor:'#f5f5f5'
      
    },
    textInput: {
        width:300,
        marginBottom:10,
        backgroundColor:'#fff',
        elevation:5,
        borderWidth:1,
        borderColor:'#e3e3e3',
        paddingLeft:15
    }
})

export default HomeNpiComponent;


//Header Component for the  HomeComponent

const HomeHeader = ({HeaderName}) =>{
    return <View>
        <Text style={{fontSize:20,fontWeight:'bold',color:'#085fa1'}}>{HeaderName}</Text>
    </View>
}


