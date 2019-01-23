// import libs
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// FIXME be careful on how you import
import Header from './header';
import QuestionCard from './questionCard';
import questions from '../questions';


// make component
class Home extends Component {
    state = { questions: questions }

    // renderQuestions() {
    //   console.log(this.state.questions[0]["question"])
    // }

    render() {
        return (
            <View>
                <Header title="Sample App Wow" />
                <QuestionCard
                    question="This is sad?"
                    option1="No way"
                    option2="Ewww"
                    onPress1={() => console.log("Button1 pressed")}
                    onPress2={() => console.log("Button2 pressed")}
                />
            </View>
        );
    }
}

// export
export default Home;
