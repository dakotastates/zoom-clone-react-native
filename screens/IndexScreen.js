import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase'

const IndexScreen = ( { navigation }) => {

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      console.log(authUser)
      if(authUser){
        navigation.replace('Home')
      }
    })
    return unsubscribe
  }, [])

  return(
    <View style={styles.container}>
      <StatusBar style='light' />

      <Button
        containerStyle={styles.button}
        onPress={() => navigation.navigate('Join')}
        title='Join'
      />
      <Button
        containerStyle={styles.button}
        onPress={() => navigation.navigate('Login')}
        type='outline' title='Sign In'
      />

    </View>

  )
}

export default IndexScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  button: {
    width: 200,
    marginTop: 10,
  },
})
