import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Animated, // provides methods for animating components
    Easing // for implementing easing functions
} from "react-native";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.scaleValue = new Animated.Value(1);

        this.onPressIn = this.onPressIn.bind(this);
        this.onPressOut = this.onPressOut.bind(this);
    }

    componentDidMount() {
        this.pressInAnimation = Animated.timing(                  // Animate over time
            this.scaleValue,            // The animated value to drive
            {
                toValue: 0.95,                   // Animate to opacity: 1 (opaque)
                duration: 200,
                easing: Easing.ease
            }
        );
        this.pressOutAnimation = Animated.timing(
            this.scaleValue,
            {
                toValue: 1,
                duration: 200,
                easing: Easing.back()
            }
        );
    }

    onPressIn() {
        this.pressInAnimation.start();
    }

    onPressOut() {
        this.pressOutAnimation.start();
    }

    render() {
        return (
            <Animated.View style={
                {
                    width: 200,
                    height: 200,
                    backgroundColor: 'lightgreen',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    elevation: 6,
                    transform: [{ scale: this.scaleValue }]
                }
            }>
                <TouchableOpacity
                    onPressIn={this.onPressIn}
                    style={{ flex: 1 }}
                    onPressOut={this.onPressOut}
                >
                    <Text>Card</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}