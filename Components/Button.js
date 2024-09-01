import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({
  inputtitle,
loading,
handlesubmit}) => {
  return (
    <TouchableOpacity style=
    {{
      backgroundColor:'#030303',
      borderRadius:12,
      top:30,
      width:350,
      height:50,
      marginTop:20,
      paddingLeft:13,
      
    }} onPress={handlesubmit}>
    

      <Text
      style={{
        color:'#fff',
        top:12,
        textAlign:'center'
      }}
  >{loading ? "Please wait":inputtitle}</Text>
    </TouchableOpacity>
  )
}

export default Button