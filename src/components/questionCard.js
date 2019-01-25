import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class QuestionCard extends Component {
    componentWillMount() {
        console.log("QuestionCard componentWillMount");
        // this.props.nextQuestion();
    }

    render() {
        const { question, option1, option2, onPress1, onPress2 } = this.props
        const { containerStyle, questionStyle, optionStyle } = styles;
    
        return (
            <View style={containerStyle}>
                <Text style={questionStyle}>{question}</Text>
    
                <TouchableOpacity onPress={onPress1}>
                    <Text style={optionStyle}>{option1}</Text>
                </TouchableOpacity>
    
                <TouchableOpacity onPress={onPress2}>
                    <Text style={optionStyle}>{option2}</Text>
                </TouchableOpacity>
            </View>
        );
    }    
}

export default QuestionCard;

const styles = {
    containerStyle: {
        marginTop: 64,
        marginLeft: 32,
        marginRight: 32
    },
    questionStyle: {
        fontSize: 28,
        marginTop: 12,
        marginBottom: 16
    },
    optionStyle: {
        fontSize: 18,
        marginTop: 8,
        marginBottom: 8
    }
}
