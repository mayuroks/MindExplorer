import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './Header';
import QuestionCard from './QuestionCard';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PersonalityReport from './PersonalityReport';
import StartPersonalityTest from './StartPersonalityTest';
import {
    READY_FOR_TEST,
    TEST_IN_PROGRESS,
    TEST_FINISHED
} from '../reducers/userStages';

class Home extends Component {
    renderScreen() {
        switch (this.props.userStage) {
            case READY_FOR_TEST:
                return <StartPersonalityTest />
            case TEST_IN_PROGRESS:
                return this.renderQuestion();
            case TEST_FINISHED:
                return <PersonalityReport />
            default:
                return <StartPersonalityTest />
        }
    }

    renderQuestion() {
        if (this.props.question) {
            var id = this.props.questionId;
            console.log("render if");
            return <QuestionCard
                question={this.props.question.title}
                option1={this.props.question.option1}
                option2={this.props.question.option2}
                onPress1={() => this.props.nextQuestion()}
                onPress2={() => this.props.nextQuestion()}
            />
        } else {
            console.log("render else");
            return;
        }
    }

    render() {
        return (
            <View>
                <Header title="Sample App Wow" />
                {this.renderScreen()}
            </View>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        question: state.selectQuestion.question,
        questionId: state.selectQuestion.questionId,
        questionCount: state.selectQuestion.questionCount,
        userStage: state.userFlow.userStage
    };
};

export default connect(mapStateToProps, actions)(Home);
