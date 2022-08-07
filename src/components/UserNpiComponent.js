import React,{useState,useEffect} from 'react';
import {ActivityIndicator, Text,View} from 'react-native';
import ListItem from '../util/ListItem';

const UserNpiComponent = ({route}) =>{
  const [data,setData] = useState(null);
  useEffect(()=>{
    if(route.params?.lastname){
        fetch(`https://npiregistry.cms.hhs.gov/api/?version=2.0&last_name=${route.params?.lastname}`)
        .then((res)=>res.json())
        .then((json)=>setData(json) )
        .catch((error)=>console.log(error))
    }
    
  },[route.params?.lastname])
 
    return(
        <View style={{backgroundColor:'#fff',flex:1,paddingTop:10,paddingHorizontal:10}}>
         <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#D3D3D3'}}>
          <Text style={{color:'#000',fontSize:16,fontWeight:'bold'}}>NPI</Text>
          <Text style={{color:'#000',fontSize:16,fontWeight:'bold'}}>Name</Text>
          <Text style={{color:'#000',fontSize:16,fontWeight:'bold'}}>Phone</Text>
         </View>   
            {!data && <ActivityIndicator size="large" color="#00ff00" />}
            {data && data?.results.map((item)=><ListItem item={item} />)}
        </View>
    )
}

export default UserNpiComponent;