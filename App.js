import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Card from './Card'
import ActionList from './ActionList';

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <View>
          <Button
            title="ANIM"
            onPress={() => { }}
          />
          <Text>Open up App.js to start working on your app!</Text>
          <View style={styles.red}></View>
          <Card />
          <View style={{ flexDirection: 'row' }}>
            <ActionList />
            <ActionList o1={true} />
          </View>
        </View>
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
  red: {
    width: 300,
    height: 300,
    backgroundColor: 'red'
  },
});
