import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Images from '../../assets';
import Color from './common/Color';

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
            imageStyle,
            profilePicStyle,
            userInfoStyle,
            instructionTextStyle
        } = styles;
        // console.log(Images.explore);

        return (
            <View style={container}>
                <View style={userInfoStyle}>
                    <Image
                        style={profilePicStyle}
                        source={Images.startPersonality.profilePic}
                    />
                    <Text style={userFullNameStyle}>Hey there!</Text>
                </View>
                <View>
                    <Text style={nudgeTextStyle}>Test your personality now!</Text>
                    <Text style={instructionTextStyle}>Finish the test in 2 mins or less</Text>
                    <Image
                        source={Images.startPersonality.mindImage}
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
        flex: 1,
        paddingTop: 24,
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    buttonContainerStyle: {
        backgroundColor: Color.Primary,
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
        fontSize: 32,
        fontFamily: 'opensans_bold',
        marginLeft: 16,
        color: Color.Text
    },
    nudgeTextStyle: {
        fontSize: 22,
        marginTop: 48,
        textAlign: 'center',
        fontFamily: 'opensans_bold',
        color: Color.Text
    },
    instructionTextStyle: {
        fontSize: 16,
        marginTop: 12,
        textAlign: 'center',
        fontFamily: 'opensans_regular',
        color: Color.Text
    },
    imageStyle: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 32,
        borderRadius: 10,
        borderColor: '#ECEFF1',
        borderWidth: 0,
        opacity: 0.5,
        position: 'relative'
    },
    profilePicStyle: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        borderRadius: 1000,
        borderColor: '#ECEFF1',
        borderWidth: 1,
    },
    userInfoStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 24,
        marginTop: 16
    }
}
