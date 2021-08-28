import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import Chat from '../components/Chat'
import Participants from '../components/Participants'


const RoomScreen = ( { navigation, route }) => {

  const [toggleChat, setToggleChat] = useState(false)
  const [toggleParticipants, setToggleParticipants] = useState(false)

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation])


  return(

    <View style={styles.container}>

      <View style={styles.videoChatContainer}>
        <View style={[toggleChat || toggleParticipants ? styles.left : {flex: 1}]}>
          <View style={styles.video}><Text>Video</Text></View>
        </View>
        <View style={[toggleChat || toggleParticipants ? styles.right : {flex: 0}]}>
          <View style={styles.rightContainer}>
            <View style={[toggleParticipants && toggleChat ? styles.participantsWindow : toggleParticipants && !toggleChat ? styles.participantsWindowOnly : styles.participantsWindowClosed ]}><Participants /></View>
            <View style={[toggleChat && toggleParticipants ? styles.chatWindow : toggleChat && !toggleParticipants ? styles.chatWindowOnly : styles.chatWindowClosed ]}><Chat /></View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
      <View style={styles.mainControls}>

        <View style={styles.controlsBlock}>
            <Button
              buttonStyle={styles.button}
              titleStyle={{
                  fontSize: 16,
              }}
              icon={
                <Icon
                  name="microphone"
                  size={15}
                  color="white"
                />
              }
              title="Mute"
            />

            <Button
              buttonStyle={styles.button}
              titleStyle={{
                  fontSize: 16,
              }}
              icon={
                <Icon
                  name="video-camera"
                  size={15}
                  color="white"
                />
              }
              title="Stop Video"
            />


        </View>

        <View style={styles.controlsBlock}>

          <Button
            buttonStyle={styles.button}
            titleStyle={{
                fontSize: 16,
            }}
            icon={
              <Icon
                name="group"
                size={15}
                color="white"
              />
            }
            onPress={() => setToggleParticipants(!toggleParticipants)}
            title="Participants"
          />
          <Button
            buttonStyle={styles.button}
            titleStyle={{
                fontSize: 16,
            }}
            icon={
              <Icon
                name="wechat"
                size={15}
                color="white"
              />
            }
            onPress={() => setToggleChat(!toggleChat)}
            title="Chat"
          />
        </View>

        <View style={styles.controlsBlock}>
          <Button
            buttonStyle={styles.leaveButton}
            titleStyle={{
                color: "#EB534B",
                fontSize: 16,
            }}
            onPress={() => navigation.navigate('Home')}
            title="End"
          />
        </View>


      </View>
      </View>
    </View>

  )
}


export default RoomScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242324'
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 10px',
    minWidth: '80px',
    backgroundColor: '#1c1E20',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  mainControls: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1c1E20',
    color: '#D2D2D2',
    padding: '5px',
    justifyContent: 'space-between',
  },
  controlsBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
  leaveButton: {
    backgroundColor: '#1c1E20',
  },
  videoChatContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: '10px',
    paddingBottom: '15px'
  },
  left: {
    flex: 0.8,
    display: 'flex',
    flexDirection: 'column'
  },
  right: {
    flex: 0.2,
    display: 'flex',
    // flexDirection: 'column',
    backgroundColor: '#242324',
    // borderLeft: '1px solid #3D3D42'
  },
  video: {
    flexGrow: 1,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chatWindow: {
    flex: .5,
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'orange'
  },
  chatWindowOnly: {
    flex: 1,
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'yellow'
  },
  chatWindowClosed: {
    flex: 0,
    display: 'none'
    // display: 'flex',
  },
  participantsWindow:{
    flex: .5,
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'blue'
  },
  participantsWindowOnly:{
    flex: 1,
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red'
  },
  participantsWindowClosed:{
    flex: 0,
    display: 'none'
    // display: 'flex',
  },
  rightContainer: {
    flex: 1
  }

})

// <Text>Room Id: {route.params.roomId}</Text>
