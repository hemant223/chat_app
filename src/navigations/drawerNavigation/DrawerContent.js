import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {
  DrawerActions,
  useNavigation,
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';


const DrawerContent = () => {
  

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#000',
        borderTopRightRadius: 35,
        borderBottomRightRadius: 35,
        overflow: 'hidden',
        width: '100%',
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
      }}>
      
<View>
    <Text style={{color:'red'}}>Hello Hemu</Text>
</View>

    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
