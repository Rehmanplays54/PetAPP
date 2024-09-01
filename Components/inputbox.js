import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Inputbox = ({
  inputtitle,
  autoComplete,
  keyboardType,
  secureTextEntry=false,
  value,
  setValue
}) => {
  return (
    <View style=
    {{
      backgroundColor:'#fff',
      borderRadius:12,
      top:30,
      width:350,
      height:50,
      marginTop:20,
      paddingLeft:13
    }}>
   <TextInput 
   placeholder={inputtitle} 
   autoCorrect={false}
   keyboardType={keyboardType}
   autoComplete={autoComplete}
   secureTextEntry={secureTextEntry}
   value={value}
   onChangeText={(text)=>setValue(text)}
   />
    </View>
  )
}

export default Inputbox