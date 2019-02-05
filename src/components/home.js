import React, { Component } from 'react';
import { Text, View, BackHandler } from 'react-native';
import Header from './common/Header';
import QuestionCard from './QuestionCard2'; // FIXME remove this
import { connect } from 'react-redux';
import * as actions from '../actions';
import PersonalityReport from './PersonalityReport';
import StartPersonalityTest from './StartPersonalityTest';

import {
    READY_FOR_TEST,
    TEST_IN_PROGRESS,
    TEST_FINISHED
} from '../reducers/userStages';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
    renderScreen() {
        console.log("renderScreen");
        // FIXME remove this
        switch (this.props.userStage) {
            case READY_FOR_TEST:
                console.log("renderScreen start test");
                return <StartPersonalityTest
                    onPress={this.props.nextScreen} />
            case TEST_IN_PROGRESS:
                console.log("renderScreen test in progress");
                return this.renderQuestion();
            case TEST_FINISHED:
                console.log("renderScreen test finished");
                return <PersonalityReport />
            default:
                return <StartPersonalityTest />
        }
    }

    renderQuestion() {
        if (this.props.question) {
            console.log("render if");
            return <QuestionCard
                questionCount={this.props.questionCount}
                questionId={this.props.questionId}
                question={this.props.question.title}
                option1={this.props.question.option1}
                option2={this.props.question.option2}
                onPress1={() => this.props.nextQuestion()}
                onPress2={() => this.props.nextQuestion()}
            />
        } else {
            this.props.nextScreen();
            console.log("render else");
            return;
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white'
            }}>
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
