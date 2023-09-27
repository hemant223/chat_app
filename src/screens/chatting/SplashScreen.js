import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import {useNavigation} from '@react-navigation/native';
import { getStoreData } from '../../helper/utils/AsyncStorage';

const SplashScreen = () => {
    const navigation = useNavigation();

useEffect(() => {
 setTimeout(() => {
    userAuth();
 }, 2000);
}, [])

const userAuth=async()=>{
  const userData= await getStoreData('userData')
  console.log('userData==>', userData);
  if(userData==null){
    navigation.navigate('LoginScreen')
}else{
      navigation.navigate('Users')
  }
}




  return (
    <View style={{backgroundColor:'red',flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'#fff',fontSize:18}}>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})