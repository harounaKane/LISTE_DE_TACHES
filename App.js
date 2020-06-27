import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>La toute première version de mon APP Liste de taches !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
