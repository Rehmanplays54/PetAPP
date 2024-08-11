import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const SplashScreen = () => {
  const navigation=useNavigation();
  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate('Login')
    },3000);
  },[]);
  return (
    <View style={styles.container}>
      <Text style={{color:'#fff',fontSize:28}}>FOOD APP</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000'

  }
})