import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import { getStoreData } from '../../helper/utils/AsyncStorage';
import FAI from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
let id='';
const Users = () => {
  const navigation = useNavigation();

const [users, setUsers] = useState([])

useEffect(() => {
    getUsers();
  
}, [])
const getUsers = async() =>{
    const userData= await getStoreData('userData')
    id=userData.userId
    //   console.log('inUerrScreen',id);
      firestore().collection('users').where('email', '!=' ,userData.email).get().then(res=>{
        if(res.docs!=[]){
            setUsers(res.docs)
        }
      })
}

const handleUser=(user)=>{
navigation.navigate('Chattting',{user:user,id:id})
 
}

  return (
    <View style={{backgroundColor:'#000',flex:1,alignItems:'center'}}>
     {
          users.map((item,index)=>{
            const user =item.data()
            return(
                <TouchableOpacity onPress={()=>{handleUser(user);}} key={index} style={{width:'60%',borderColor:'#ecf0f1',borderWidth:2,padding:10,flexDirection:'row',alignItems:'center',marginTop:10}}>   
                   <FAI style={{color: '#fff'}} name={'user-circle-o'} size={30} />
                    <Text style={{color:"#fff",marginLeft:20}}>{user.name}</Text>
                </TouchableOpacity>  
            )
          })
     }   
    </View>
  )
}

export default Users

const styles = StyleSheet.create({})