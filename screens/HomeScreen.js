import React, { useLayoutEffect, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { auth, db } from '../firebase'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'

const HomeScreen = ({ navigation }) => {


  const signOutUser = () =>{
    auth.signOut().then(()=>{
      navigation.replace('Login')
    })
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: 'Zoom Clone React',
      headerStyle: { backgroundColor: '#fff'},
      headerTitleStyle: {color: 'black'},
      headerTintColor: 'black',
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
          <Button title="Logout"/>
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 80,
          marginRight: 20
        }}>
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name='camerao' size={24} color='black' />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('AddChat')} activeOpacity={0.5}>
            <SimpleLineIcons name='pencil' size={24} color='black' />
          </TouchableOpacity>
        </View>
      )
    });
  }, [navigation])



  return(
    <SafeAreaView>
      <ScrollView style={styles.container}>
          <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  constainer: {
    height: '100%'
  }
})
