import React, { Component } from 'react';
import { Text, View, Animated, Image, Alert } from 'react-native';
import Images from '../../assets';
import { Actions } from 'react-native-router-flux';
import Color from './common/Color';

class Splash extends Component {
    state = {
        spinValue: new Animated.Value(0),
        moveX: new Animated.Value(0),
        fadeAnim: new Animated.Value(0),
        fadeAppName: new Animated.Value(0)
    }

    componentDidMount() {
        console.log("Splash mounted");
        Animated.sequence([
            Animated.timing(
                this.state.fadeAnim,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                this.state.spinValue,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                this.state.moveX,
                {
                    toValue: 1,
                    duration: 600,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                this.state.fadeAppName,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }
            ),
        ]).start(() => {
            this.goToHome();
        });
    }

    goToHome() {
        setTimeout(() => Actions.home(), 2000);
    }

    render() {
        // Second interpolate beginning and end values (in this case 0 and 1)
        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg']
        });

        const moveX = this.state.moveX.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -40]
        });

        const fadeAnim = this.state.fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        })

        const fadeAppName = this.state.fadeAppName.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        })

        const { logoStyle, appNameStyle, container } = styles;

        return (
            <View style={container}>
                <Animated.Image
                    style={{
                        ...logoStyle,
                        opacity: fadeAnim,
                        transform: [{ rotate: spin }, { translateX: moveX }],
                    }}
                    source={Images.splash.logoImage}>
                </Animated.Image>

                <Animated.Text style={{ ...appNameStyle, opacity: fadeAppName }}>
                    Mind Explorer
                </Animated.Text>
            </View >
        );
    }
}

export default Splash;

const styles = {
    container: {
        backgroundColor: Color.Primary,
        flex: 1,
        justifyContent: 'center'
    },
    logoStyle: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        tintColor: 'white'
    },
    appNameStyle: {
        marginBottom: 48,
        fontSize: 32,
        fontFamily: 'opensans_bold',
        alignSelf: 'center',
        color: 'white'
    }
}