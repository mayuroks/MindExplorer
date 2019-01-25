import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class StartPersonalityTest extends Component {
    render() {
        const { buttonStyle } = styles;

        return (
            <View>
                <Text>Press Start Button to start the personality test</Text>
                <TouchableOpacity style={buttonStyle}>
                    <Text>
                        Start Quiz
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
}

export default StartPersonalityTest;

const styles = {
    buttonStyle: {
        backgroundColor: 'red'
    }
}
