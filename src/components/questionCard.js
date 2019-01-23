// import libs
import React, { component } from 'react';
import { View, Text } from 'react-native';

// make component
const QuestionCard = (props) => {
    const { containerStyle, questionStyle, optionStyle } = styles;

    return(
        <View style={containerStyle}>
            <Text style={questionStyle}>{props.question}</Text>
            <Text style={optionStyle}>{props.option1}</Text>
            <Text style={optionStyle}>{props.option2}</Text>
        </View>
    );
}

// export the component
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