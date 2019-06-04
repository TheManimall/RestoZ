import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import SignUp from './screens/Auth/SignUp';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Hola</Text> 
      </View>
      // <SignUp />
       
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
