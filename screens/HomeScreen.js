import React, { useLayoutEffect, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { auth, db } from '../firebase'
import { v4 as uuidv4 } from 'uuid';

const HomeScreen = ({ navigation }) => {


  const signOutUser = () =>{
    auth.signOut().then(()=>{
      navigation.replace('Index')
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
    <View style={styles.container}>
          <Button
            containerStyle={styles.button}
            title="New Meeting"
            onPress={() => navigation.navigate('Room', {roomId: uuidv4()})}
          />
          <Button
            containerStyle={styles.button}
            title = "Join"
            onPress={() => navigation.navigate('Join')}
          />
    </View>
  )
}

export default HomeScreen

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
