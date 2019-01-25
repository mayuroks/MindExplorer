import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class StartPersonalityTest extends Component {
    componentWillMount() {
        console.log("StartPersonalityTest componentWillMount");
    }

    render() {
        const { buttonStyle } = styles;

        return (
            <View>
                <Text>Press Start Button to start the personality test</Text>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={buttonStyle}>
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
