import React, { useState } from 'react';
import { View,Text,StyleSheet,Button, TextInput,Alert} from 'react-native';
import { useDispatch } from 'react-redux';
import { addUserName } from '../../redux/slice/userSlice';

const UserLoginComponent = ({navigation}) =>{
    const [name,setName] = useState(null);
    const dispatch = useDispatch()
    const onPress = () =>{
        if(name){
            navigation.navigate('Home',{
                name:name
            });
           dispatch(addUserName({username:name}))
            return
        }
     return Alert.alert('Enter Name','Name Field Cannot be empty')
    }
    return (<View style={Styles.userContainer} >
         <View style={[Styles.userInnerContainer,{ alignItems:'center',  justifyContent:'center'}]}>
          <Text style={{color:'#085fa1',fontSize:50,fontWeight:'bold'}}>NPI Registry</Text>
          <View style={{padding:10}}>
          <Text style={{color:'#000',fontWeight:'bold'}}>Free directory of all active National Provider Identifier (NPI) records</Text>
          </View>
         </View>
         <View style={[Styles.userInnerContainer,{alignItems:'center',paddingTop:10}]}>
            <TextInput style={{width:300,marginBottom:10,backgroundColor:'#fff',elevation:5,borderLeftWidth:4,borderColor:'#085fa1',paddingLeft:15}} 
              placeholder= "Enter Your Name"
              onChangeText={(text)=>setName(text)}
               />
            <View style={{width:200}}>
            <Button  title='Enter' color={'#085fa1'} onPress={onPress} />
            </View>
         </View>
        </View>
    )
}

const Styles= StyleSheet.create({
    userContainer:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
        padding: 10    
    },
    userInnerContainer:{
        flex:0.5,
        alignSelf:'stretch',
    }

})

export default UserLoginComponent;