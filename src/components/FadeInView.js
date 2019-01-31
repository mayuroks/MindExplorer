import React, { Component } from 'react';
import { Easing, Animated, Text, View } from 'react-native';

START_OPACITY = 0;
FINAL_OPACITY = 1;
ANIM_DURATION = 20000;

class FadeInView extends Component {
    state = { // Define animation params
        fadeAnim: new Animated.Value(START_OPACITY)
    }

    componentDidMount() {
        Animated.timing( // Do the animation
            this.state.fadeAnim,
            {
                toValue: FINAL_OPACITY,
                duration: ANIM_DURATION
            }
        ).start();
    }

    render() {
        return (
            <Animated.View style={{ opacity: this.state.fadeAnim }} >
                {this.props.children}
            </Animated.View>
        );
    }
}

export default FadeInView;