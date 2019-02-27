import React from 'react';
import { View, Animated } from 'react-native';


export default class AnimatedLine extends React.Component {

    render() {
        const headerHeight = this.props.yOffset ? this.props.yOffset.interpolate({
            inputRange: [0, 100],
            outputRange: [100, 0],
            extrapolate: 'clamp',
          }) : 0;
        console.log("RENDER")
        return (
            
            <Animated.View style={{ height: 20, backgroundColor: 'green', width: headerHeight }} />
        );
    }
}