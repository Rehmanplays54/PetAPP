/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */



import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer, } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/Register';
import Login from './src/Login';
function App() {
  const Stack=createNativeStackNavigator();
  return (
    
    <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name='Register' component={Register}/>
<Stack.Screen name='Login' component={Login}/>
</Stack.Navigator>
</NavigationContainer>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
