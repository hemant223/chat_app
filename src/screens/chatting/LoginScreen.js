import { StyleSheet, Text, View,TextInput, TouchableOpacity ,ActivityIndicator} from 'react-native'
import React,{useState,useEffect} from 'react'
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { storeData } from '../../helper/utils/AsyncStorage';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [dataComing, setDataComing] = useState(false)
 
  const handleSubmit=()=>{
    setDataComing(true)
    // alert (email+" "+password)
    firestore().collection('users').where('email', '==', email).get().then(res=>{
      if(res.docs!=[]){
        console.log('res',res.docs[0].data());
        const data={
          name:res.docs[0].data().name,
          email:res.docs[0].data().email,
          userId:res.docs[0].data().userId
        }
        setDataComing(false)
        storeData('userData',data)
      }else{
        alert('User Not Found')
      }

    }).catch(err=>{
      console.log('Error==>',err);
      alert('User Not Found In Cath Err')
    })
}

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#2980b9',}}>
      {dataComing&&<View style={{position:'absolute',zIndex:1}}>
     <ActivityIndicator size="large" color="#00ff00" />
      </View>}
       <Text style={{textAlign:'center',fontSize:30}}>Login</Text>
    <TextInput
      placeholder='Email'
        style={{backgroundColor:'#fff',width:'70%',marginTop:5}}
        onChangeText={(txt)=>setEmail(txt)}
        value={email}
      />
       <TextInput
      placeholder='Password'
        style={{backgroundColor:'#fff',width:'70%',marginTop:5}}
        onChangeText={(txt)=>setPassword(txt)}
        value={password}
      />
       <TouchableOpacity onPress={()=>{handleSubmit();}} style={{width:'70%',alignItems:'center',justifyContent:'center',backgroundColor:'#fff',marginTop:15}}>
        <Text style={{fontSize:20,color:'#9b59b6'}}>Submit</Text>
      </TouchableOpacity>

      <Text onPress={()=>{navigation.navigate('SinupScreen')}} style={{marginTop:20,color:'#fff'}}>Go to Sinpu</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
