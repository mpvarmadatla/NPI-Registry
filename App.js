import React from 'react';
import HomeNpiComponent from './src/components/HomeNpiComponent';
import UserNpiComponent from './src/components/UserNpiComponent';
import UserProfileComponent from './src/components/UserProfileComponent';
import UserLoginComponent from './src/components/screens/UserLoginComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {store} from './src/store';

const App = () =>{
  const Stack = createNativeStackNavigator();
  return(
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='User' component={UserLoginComponent} options={{headerShown:false}} />
          <Stack.Screen name='Home' component={HomeNpiComponent} options={{headerShown:false}} />
           <Stack.Screen name='UserList' component={UserNpiComponent} />
           <Stack.Screen name='UserProfile' component={UserProfileComponent} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  ) 
}

export default App;