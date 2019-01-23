// import libs
import React, { component } from 'react';
import { View, Text } from 'react-native';

// make component
const QuestionCard = (props) => {
    return(
        <View>
            <Text>{props.question}</Text>
            <Text>{props.option1}</Text>
            <Text>{props.option2}</Text>
        </View>
    );
}

// export the component
export default QuestionCard;