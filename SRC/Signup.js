import { StyleSheet, Text, TouchableOpacity,TextInput, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    const navigation=useNavigation();
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize:24,fontWeight:900,}}>Sign UP</Text>

<TextInput
 placeholder='Email' keyboardType='ascii-capable'
 style={{ paddingLeft:10,width:330,height:50,borderColor:'#000',top:30,borderWidth:2,borderRadius:9}}
 />
  <TextInput
 placeholder='Password' keyboardType='ascii-capable'
 style={{paddingLeft:10,width:330,height:50,borderColor:'#000',borderWidth:2,top:50,borderRadius:9}}
 />
 <TouchableOpacity style={{top:70, borderRadius:20}}  >
 <Button title=' Signup'  onPress={()=>navigation.navigate('Login')}/>
 </TouchableOpacity>
</View>
  )
}

export default Signup

const styles = StyleSheet.create({})