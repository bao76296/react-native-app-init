import React from 'react';
import { StyleSheet, View } from 'react-native';
import Test from './test'

interface State {
  age : string
}

export default class App extends React.Component <State> {
  state  = {
    age : '20'
  }
  render() {

    return (
      <View style={styles.container}>
        <Test age  = { this.state.age }></Test>
      </View>
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
