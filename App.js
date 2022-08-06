import React from 'react';
import {View,Text} from 'react-native';
import HomeNpiComponent from './src/components/HomeNpiComponent';
import UserNpiComponent from './src/components/UserNpiComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () =>{
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeNpiComponent} />
        <Stack.Screen name='UserList' component={UserNpiComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}

export default App;