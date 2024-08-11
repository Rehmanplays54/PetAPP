import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from './SplashScreen'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
const Appnavigator = () => {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
  < Stack.Screen name='SplashScreen' component={SplashScreen}/>
  < Stack.Screen name='Login' component={Login}/>
  <Stack.Screen name='Signup' component={Signup}/>
  </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Appnavigator