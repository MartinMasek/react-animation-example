import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Animated,
    Easing
} from "react-native";


export default class ExpandingContent extends React.Component {
    constructor(props) {
        super(props);

        const c = new Animated.Value(0);
        this.scaleValue = c;
        this.objectHeight = Animated.multiply(100, c);
    }

    componentDidMount() {
        Animated.timing(
            this.scaleValue,
            {
                toValue: 1,
                duration: 1300
            }
        ).start();
    }

    render() {
        return (
            <Animated.View style={
                {
                    width: 200,
                    height: this.objectHeight,
                    backgroundColor: 'red',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    elevation: 6
                }
            }>
                <TouchableOpacity
                    onPressIn={this.onPressIn}
                    style={{ flex: 1 }}
                    onPressOut={this.onPressOut}
                >
                </TouchableOpacity>
            </Animated.View>);
    }
}