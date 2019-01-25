import React, { Component } from 'react';
import { Text, View } from 'react-native';

class PersonalityReport extends Component {
    componentWillMount() {
        console.log("PersonalityReport componentWillMount");
    }

    render() {
        return (
            <View>
                <Text>Here is your personality report</Text>
            </View>
        );
    };
}

export default PersonalityReport;
