import React, { Component } from 'react';
import Images from '../../assets';
import { View, Image, Text } from 'react-native';

class SummaryCard extends Component {

    render() {
        const { container, profilePicStyle, aliasTextStyle, personTypeTextStyle, descriptionTextStyle } = styles;

        return (
            <View style={container}>
                <Image
                    style={profilePicStyle}
                    source={Images.startPersonality.profilePic} />
                <Text style={aliasTextStyle}>"Protagonist"</Text>
                <Text style={personTypeTextStyle}>"ESFP</Text>
                <Text style={descriptionTextStyle}>A lot of what establishes and deepens ISFJs’ friendships is the mutual support</Text>
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
        marginBottom: 8
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
        color: 'red',
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
    }
}