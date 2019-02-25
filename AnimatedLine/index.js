import React from 'react';
import { View, Animated } from 'react-native';


export default class AnimatedLine extends React.Component {

    render() {
        console.log("RENDER")
        return (
            
            <Animated.View style={{ height: 20, backgroundColor: 'green', width: this.props.animatedWidth }} />
        );
    }
}