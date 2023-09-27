import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
const SinupScreen = () => {
  const navigation = useNavigation();

    const [name, setName] = useState('')
    const [mobNo, setMobNo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confmPswd, setConfmPswd] = useState('')

    const handleSubmit=()=>{
        const userId= uuid.v4();
        firestore().collection('users').doc(userId).set({
            name:name,
            email:email,
            password:password,
            mobNo:mobNo,
            confmPswd:confmPswd,
            userId:userId
        }).then(res=>{
            console.log('User Created Success');
            navigation.navigate('LoginScreen')
        }).catch(err=>{
            console.log('err==>>',err);
        })
    }

    const validate=()=>{
        let isValidate=true
        if(name==''){
         isValidate=false;
        }
        if(mobNo==''){
         isValidate=false;
        }
        if(email==''){
         isValidate=false;
        }
        if(password==''){
         isValidate=false;
        }
        if(confmPswd==''){
         isValidate=false;
        }
        if(password!==confmPswd){
         isValidate=false;
        }
        return isValidate;
    }

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#2980b9',}}>
     <Text style={{textAlign:'center',fontSize:30}}>SinUp</Text>
     <TextInput
        placeholder='Name'
        style={{backgroundColor:'#fff',width:'70%',marginTop:5}}
        onChangeText={(txt)=>setName(txt)}
        value={name}
      />
     <TextInput
      placeholder='Email'
        style={{backgroundColor:'#fff',width:'70%',marginTop:5}}
        onChangeText={(txt)=>setEmail(txt)}
        value={email}
      />
     <TextInput
      placeholder='Mob No.'
        style={{backgroundColor:'#fff',width:'70%',marginTop:5}}
        onChangeText={(txt)=>setMobNo(txt)}
        value={mobNo}
      />
     <TextInput
      placeholder='Password'
        style={{backgroundColor:'#fff',width:'70%',marginTop:5}}
        onChangeText={(txt)=>setPassword(txt)}
        value={password}
      />
     <TextInput
      placeholder='Confirm Password'
        style={{backgroundColor:'#fff',width:'70%',marginTop:5}}
        onChangeText={(txt)=>setConfmPswd(txt)}
        value={confmPswd}
      />
      <TouchableOpacity onPress={()=>{
        if(validate()){
            handleSubmit();
        }else{
            alert('Please enter Coreect data')
        }
        }} style={{width:'70%',alignItems:'center',justifyContent:'center',backgroundColor:'#fff',marginTop:15}}>
        <Text style={{fontSize:20,color:'#9b59b6'}}>Submit</Text>
      </TouchableOpacity>

      <Text onPress={()=>{navigation.navigate('LoginScreen')}} style={{marginTop:20,color:'#fff'}}>Login Here?</Text>
    </View>
  )
}

export default SinupScreen

const styles = StyleSheet.create({})