import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
// import Images from '../assets';

class StartPersonalityTest extends Component {
    componentWillMount() {
        console.log("StartPersonalityTest componentWillMount");
    }

    render() {
        const {
            buttonContainerStyle,
            userFullNameStyle,
            nudgeTextStyle,
            buttonTextStyle,
            container,
            bottom,
            imageStyle
        } = styles;
        // console.log(Images.explore);

        return (
            <View style={container}>
                <View>
                    <Text style={userFullNameStyle}>Mayur Rokade</Text>
                    <Text style={nudgeTextStyle}>Explore your mind right now!!</Text>
                    <Image
                        source={require('./free_personality_test.png')}
                        style={imageStyle}
                    />
                </View>

                <View style={bottom}>
                    <TouchableOpacity
                        onPress={this.props.onPress}
                        style={buttonContainerStyle}>
                        <Text style={buttonTextStyle}>
                            Start
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}

export default StartPersonalityTest;

const styles = {
    container: {
        flexDirection: 'column',
        flex: 1
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    buttonContainerStyle: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        borderRadius: 8,
        marginBottom: 16,
        marginLeft: 16,
        marginRight: 16,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 2,
    },
    buttonTextStyle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    userFullNameStyle: {
        fontSize: 32
    },
    nudgeTextStyle: {
        fontSize: 24,
        marginTop: 48,
        textAlign: 'center'
    },
    imageStyle: {
        width: 196,
        height: 196,
        alignSelf: 'center',
        marginTop: 64
    }
}
