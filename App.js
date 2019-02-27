import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Animated, Button } from 'react-native';
import Card from './Card'
import ActionList from './ActionList';
import ExpandingContent from './ExpandingContent';
import AnimatedLine from './AnimatedLine';
import List from './List'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { data: [], list: null };
    for (let i = 0; i < 200; i++) {
      this.state.data.push(i)
    }
  }

  componentDidMount() {
    this.setState({ list: this.list })
  }

  render() {
    const headerHeight = this.state.list ? this.state.list.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [100, 0],
      extrapolate: 'clamp',
    }) : 0;
    return (
      <View style={styles.container}>
        <View style={{ height: 200 }}>
          <List
            onRef={ref => this.list = ref}
          />
        </View>
        <Button
          title="TEST"
          onPress={() => { console.log(this.list) }}
        />
        <AnimatedLine animatedWidth={headerHeight} yOffset={this.state.list && this.state.list.scrollY} />
        <View>
          <Text>Open up App.js to start working on your app!</Text>
          {/* <View style={styles.red}></View> */}
          <View style={{ backgroundColor: 'lightgrey' }}>
            <ExpandingContent />
          </View>
          <View style={{ backgroundColor: 'lightyellow' }}>
            <Card />
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: 'yellow' }}>
            <ActionList />
            <ActionList o1={true} />
          </View>
        </View >
      </View >
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
