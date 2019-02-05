import React, { Component } from 'react';
import Images from '../../assets';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import FadeInView from './common/FadeInView';
import Color from './common/Color';


class SummaryCard extends Component {

    render() {
        const { container, profilePicStyle, aliasTextStyle,
            personTypeTextStyle, descriptionTextStyle,
            buttonContainerStyle, buttonTextStyle } = styles;

        return (
            <View style={container}>
                <Image
                    style={profilePicStyle}
                    source={Images.startPersonality.profilePic} />

                <FadeInView>
                    <Text style={aliasTextStyle}>
                        "{this.props.alias}"
                    </Text>
                </FadeInView>

                <Text style={personTypeTextStyle}>
                    {this.props.personalityType}
                </Text>
                <Text style={descriptionTextStyle}>
                    {this.props.description}
                </Text>
                <View style={{ backgroundColor: 'white' }}>
                    <TouchableOpacity>
                        <Text style={buttonTextStyle}>Test again for 69$</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default SummaryCard;

const styles = {
    container: {
        backgroundColor: 'white',
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 24,
        marginBottom: 8,
        borderRadius: 8,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 12,
        elevation: 2
    },
    profilePicStyle: {
        borderRadius: 1000,
        width: 96,
        height: 96,
        marginTop: 48,
        alignSelf: 'center'
    },
    aliasTextStyle: {
        fontSize: 24,
        fontFamily: 'opensans_bold',
        color: Color.Primary,
        alignSelf: 'center',
        marginTop: 16
    },
    personTypeTextStyle: {
        fontSize: 24,
        fontFamily: 'opensans_bold',
        alignSelf: 'center',
        marginTop: 4
    },
    descriptionTextStyle: {
        fontSize: 16,
        fontFamily: 'opensans_regular',
        alignSelf: 'center',
        marginTop: 16
    },
    buttonContainerStyle: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        borderRadius: 8,
        marginBottom: 8,
        marginTop: 28,
        marginLeft: 16,
        marginRight: 16,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 2,
    },
    buttonTextStyle: {
        fontSize: 20,
        color: Color.Primary,
        fontFamily: 'opensans_regular',
        textAlign: 'center',
        marginTop: 28
    },
}