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
          <TouchableOpacity activeOpacity={0.5}>
          <Button onPress={signOutUser} title="Logout"/>
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

        </View>
      )
    });
  }, [navigation])



  return(
    <SafeAreaView>
      <ScrollView style={styles.container}>
          <Button
            containerStyle={styles.button}
            title="New Meeting"
          />
          <Button
            containerStyle={styles.button}
            title = "Join"
          />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {

  },
  button: {
    width: 200,
    marginTop: 10,
  },
})
