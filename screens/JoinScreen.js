import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';


const JoinScreen = ( { navigation }) => {
  const [meetingId, setMeetingId] = useState('');
  const [name, setName] = useState('');

const join = () =>{
  console.log("Join Meeting")
}

  return(
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />
      <View style={styles.inputContainer}>
        <Input placeholder='Meeting Id' autoFocus type='text' value={meetingId} onChangeText={text => setMeetingId(text)}/>
        <Input placeholder='Name' type='text' value={name} onChangeText={text => setName(text)} />
      </View>

      <Button
        containerStyle={styles.button}
        onPress={join}
        title='Join'
        onSubmitEditing={join}
      />

      <View style={{height: 100 }} />
    </KeyboardAvoidingView>

  )
}

export default JoinScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  inputContainer:{
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
})
