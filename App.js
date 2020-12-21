import React from 'react';
import { StyleSheet, } from 'react-native';
import ScanScreen from './screens/ScanScreen';

export default class App extends React.Component() {
  return(){
  return (

      <ScanScreen />

  );
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
