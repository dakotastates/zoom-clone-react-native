import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons'

const RoomScreen = ( { navigation, route }) => {
  return(
    <View style={styles.container}>
      <Text>Room Id: {route.params.roomId}</Text>

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
    backgroundColor: 'inherit',
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
    backgroundColor: 'inherit',
  }

})
