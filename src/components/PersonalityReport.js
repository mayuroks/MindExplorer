import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
    return {
        answersMaps: state.personalityTest.answerMap
    }
}

export default connect(mapStateToProps)(PersonalityReport);
