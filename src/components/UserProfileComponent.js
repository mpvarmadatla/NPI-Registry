import React, { useEffect } from "react";
import { Text,View,StyleSheet} from "react-native";
import Header from "../util/Header";
import ProfileList from "../util/ProfileList";
import { useNavigation } from "@react-navigation/native";

const UserProfileComponent = ({route}) =>{
      const {setOptions} = useNavigation();
      useEffect(()=>{
        setOptions({
            title: route.params.data?.basic?.name
        })
      },[route])
    return (<View style={Styles.profileContainer}>
        <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>Details</Text>
         <View style={{borderWidth:1}}>
          <Header />
          <ProfileList title={'NPI'} value={route.params?.data?.number} />
          <ProfileList title={'Enumeration Date'} value={route.params?.data?.basic?.enumeration_date} />
         </View>
        </View>)
}

const Styles = StyleSheet.create({
    profileContainer:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop:10,
        paddingHorizontal:10
    }
})

export default UserProfileComponent;