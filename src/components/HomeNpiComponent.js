import React, { useState } from "react";
import {Text,View,StyleSheet, TextInput,Button} from 'react-native';

const HomeNpiComponent = ({navigation}) =>{
    const [text,setText] = useState(null)
    return(
        <View style={Styles.container}>
            <View style={Styles.box}>
            <Text style={{fontSize:18}}>Enter Last Name</Text>
            <View style={{borderWidth:1,marginBottom:10}}>
                <TextInput onChangeText={(text)=>setText(text)}/>
            </View>
            <Button title="submit" onPress={()=>navigation.navigate('UserList',{
                lastname:text
            })} />
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