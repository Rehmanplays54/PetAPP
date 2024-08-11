import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation=useNavigation();
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:24,fontWeight:900,}}>Login</Text>

    <TextInput
     placeholder='Email' keyboardType='ascii-capable'
     style={{ paddingLeft:10,width:330,height:50,borderColor:'#000',top:30,borderWidth:2,borderRadius:9}}
     />
      <TextInput
     placeholder='Password' keyboardType='ascii-capable'
     style={{paddingLeft:10,width:330,height:50,borderColor:'#000',borderWidth:2,top:50,borderRadius:9}}
     />
     <TouchableOpacity style={{top:70, borderRadius:20}}>
     <Button title=' Login'   onPress={()=>navigation.navigate('Signup')}/>
     </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})