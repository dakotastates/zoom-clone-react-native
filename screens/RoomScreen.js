import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

const RoomScreen = ( { navigation, route }) => {
  return(
    <View style={styles.container}>
      <StatusBar style='light' />
      <Text>Room Id: {route.params.id}</Text>

    </View>

  )
}

export default RoomScreen

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
