import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
const Chattting = (props) => {
  const [messages, setMessages] = useState([]);

useEffect(() => {
  const subscriber = firestore()
    .collection('chats')
    .doc(props.route.params?.id + props.route.params?.user.userId)
    .collection('messages')
    .orderBy('createdAt', 'desc');
  subscriber.onSnapshot(querysnapshot => {
    const allmessages = querysnapshot.docs.map(item => {
      return {...item._data, createdAt: Date.parse(new Date())};
    });
    setMessages(allmessages);
  });
  return () => subscriber();
}, []);

  const onSend = useCallback((messages = []) => {
    const msg = messages[0];
    const myMsg = {
      ...msg,
      sendBy: props.route.params?.id,
      sendTo: props.route.params?.user.userId,
      createdAt: Date.parse(msg.createdAt),
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
    firestore()
      .collection('chats')
      .doc('' + props.route.params?.id + props?.route.params.user.userId)
      .collection('messages')
      .add(myMsg);
    firestore()
      .collection('chats')
      .doc('' + props.route.params?.user.userId + props?.route.params?.id)
      .collection('messages')
      .add(myMsg);
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{ 
        _id: props.route.params.id,
      }}
    />

  );
};

export default Chattting;

const styles = StyleSheet.create({});
