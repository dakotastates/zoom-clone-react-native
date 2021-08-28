import React,{ useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
  TouchableOpacity,
  Keyboard
} from 'react-native';


function Chat() {
    const [input, setInput] = useState('')

    const sendMessage = () =>{
      Keyboard.dismiss();
        console.log('sent')
      // db.collection('chats').doc(route.params.id).collection('messages').add({
      //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      //   message: input,
      //   displayName: auth.currentUser.displayName,
      //   email: auth.currentUser.email,
      //   photoURL: auth.currentUser.photoURL
      // })

      // setInput('')
    }


  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Chat</Text>
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView contentContainerStyle={{ paddingTop: 15}}>
              
                <Text style={styles.title}>Chat Message</Text>

            </ScrollView>
            <View style={styles.footer}>
              <TextInput
                placeholder="Signal Message"
                style={styles.textInput}
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={sendMessage}
              />
              <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                <Ionicons name='send' size={24} color='#2B68E6' />
              </TouchableOpacity>
            </View>
          </>
        </ TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>

  );
}

export default Chat


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242324',

  },
  title: {
    color: 'white',
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    padding: 10,
    color: 'grey',
    borderRadius: 30,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center'
  }

})
