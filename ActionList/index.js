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
        this.slideUpAnimation.start();
    }

    render() {
        return (
            <Animated.View style={
                {
                    minHeight: 100,
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