import { View, Text, TextComponent, TextInput } from 'react-native'
import React, { useState } from 'react'
import Inputbox from '../Components/inputbox'
import Button from '../Components/Button'

const Register = () => {
  const [Name,setName]=useState('')
  const [Email,setEmail]=useState('')
  const [Password,setPassword]=useState('')
  const [loading,setloading]=useState(false)
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
const handlepress = () => {
  if (inputValue === '') {
      setError(true);
  } else {
navigation.navigate('Login')
  }
};

  const handlesubmit=()=>{
    try{
    setloading(true)
    if(!Name|| !Email || !Password)
    {Alert.alert("Please fill All feilds");
        setloading(false)
        return
    }
    setloading(false)
    console.log("Register data", {Name,Email,Password});
    
} catch(error){
    setloading(false);
    console.log(error);
    
};
  }
  return (
    <View style
    =
    {
      {
        backgroundColor:'#FFFAE8',
        width:'100%',
        height:'100%',
        flex:1,justifyContent:'center',
        alignItems:'center'

      }
    }
        >
          <Text
          style={{
            fontSize:34
          }}
          >Register</Text>
      <Inputbox inputtitle={'Name'}
      value={Name}
      setValue={setName}
      />
      <Inputbox inputtitle={'Email'}
      keyboardType="email-address"
      autoComplete="email"
         value={Email}
         setValue={setEmail}
      />
      <Inputbox inputtitle={'Password'}
      secureTextEntry={true}
         autoComplete="password"

            value={Password}
            setValue={setPassword}
      />
      <Button  inputtitle={'Register'}
      
      />
    </View>
  )
}

export default Register