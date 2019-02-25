import React from 'react';
import { View, Text, Animated, FlatList } from 'react-native';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.scrollY = new Animated.Value(0);
        this.mainFlatList = React.createRef();

        this.state = { data: [] };
        for (let i = 0; i < 200; i++) {
            this.state.data.push(i)
        }
    }
    
    componentDidMount() {
        this.props.onRef && this.props.onRef(this);
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    scrollEventThrottle={16}
                    inverted
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.scrollY } } }]
                    )}
                    renderItem={({ item }) => {
                        return <Text style={{ padding: 10 }}>{item}</Text>
                    }}
                    keyExtractor={(item) => item.toString()}
                />
            </View>
        );
    }
}