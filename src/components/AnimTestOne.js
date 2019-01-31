import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

START_OPACITY = 0;
FINAL_OPACITY = 1;
ANIM_DURATION = 2000;

class FadeInView extends Component {
    state = { // Define animation params
        fadeAnim: new Animated.Value(START_OPACITY)
    }

    componentDidMount() {
        Animated.timing( // Do the animation
            this.state.fadeAnim,
            {
                toValue: FINAL_OPACITY,
                easing: Easing.back(),
                duration: ANIM_DURATION
            }).start();
    }

    render() {
        return (
            <Animated.View style={{
                opacity: this.state.fadeAnim, transform: [{
                    translateY: this.state.fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [150, 100],
                        extrapolate: 'clamp'
                    })
                }]
            }} >
                {this.props.children}
            </Animated.View>
        );
    }
}


class AnimTestOne extends Component {
    render() {
        return (
            <FadeInView>
                <View style={{ justifyContent: 'center', height: 48, backgroundColor: 'red', margin: 16 }}>
                    <Text style={{ textAlign: 'center', fontSize: 26, color: 'white' }}>Hello</Text>
                </View>
            </FadeInView>
        );
    }
}

export default AnimTestOne;