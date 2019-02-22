import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Animated, // provides methods for animating components
    Easing // for implementing easing functions
} from "react-native";

export default class ActionList extends React.Component {

    constructor(props) {
        super(props);

        this.yPosition = new Animated.Value(200);
        this.scale = new Animated.Value(0);
        this.height = Animated.multiply(100, this.scale)
    }

    componentDidMount() {
        if (this.props.o1) {
            this.slideUpAnimation = Animated.timing(
                this.yPosition,
                {
                    toValue: 0,
                    duration: 350,
                    easing: Easing.elastic()
                });
        }
        else {
            this.slideUpAnimation = Animated.spring(
                this.yPosition,
                {
                    toValue: 0,
                    duration: 350
                });
        }
        const expandAnimation = Animated.timing(
            this.scale,
            {
                toValue: 1,
                duration: 350
            }
        )
        Animated.parallel([this.slideUpAnimation, expandAnimation]).start()
        // this.slideUpAnimation.start();
    }

    render() {
        return (
            <Animated.View style={
                {
                    minHeight: this.height,
                    width: 100,
                    backgroundColor: this.props.o1 ? 'lightblue' : 'gray',
                    transform: [{ translateY: this.yPosition }]
                }
            }>
                <Text>ActionList</Text>
            </Animated.View>
        );
    }
}