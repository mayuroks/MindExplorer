import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as PersonalityUtils from '../domain';

class PersonalityReport extends Component {
    componentWillMount() {
        console.log("PersonalityReport componentWillMount");
    }

    render() {
        console.log("PersonalityReport");
        console.log(this.props.answerMap);
        return (
            <View>
                <Text>Here is your personality report {PersonalityUtils.getPersonalityType(this.props.answerMap)}</Text>
            </View>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        answerMap: state.personalityTest
    }
}

export default connect(mapStateToProps)(PersonalityReport);
