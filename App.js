import React from 'react';
import HomeNpiComponent from './src/components/HomeNpiComponent';
import UserNpiComponent from './src/components/UserNpiComponent';
import UserProfileComponent from './src/components/UserProfileComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () =>{
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeNpiComponent} />
        <Stack.Screen name='UserList' component={UserNpiComponent} />
        <Stack.Screen name='UserProfile' component={UserProfileComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}

export default App;