import React, { useState } from "react";
import {Text,View,StyleSheet, TextInput,Button, Alert} from 'react-native';

const HomeNpiComponent = ({navigation}) =>{
    const [text,setText] = useState(null)
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
            <View style={Styles.box}>
            <Text style={{fontSize:18}}>Enter Last Name</Text>
            <View style={{borderWidth:1,marginBottom:10}}>
                <TextInput onChangeText={(text)=>setText(text)}/>
            </View>
            <Button title="submit" onPress={onPress} />
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#085fa1', 
        justifyContent:"center",
        alignItems:'center'
    },
    box:{
      width:300,
    
      backgroundColor:'#fff',
      borderRadius:25,
      padding:25,
     
      
    }
})

export default HomeNpiComponent;