// import libs

import React, { component } from 'react';
import { Text, View } from 'react-native';

// Make component resuable
// 1. Making component from function
const Header = (props) => {
    const {viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.title}</Text>
        </View>
    );
}

// export the component
export default Header;

// Styles
const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 64,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}
