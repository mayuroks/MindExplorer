import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './Header';
import QuestionCard from './QuestionCard';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
    componentDidMount() {
        this.props.nextQuestion();
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
                {this.renderQuestion()}
            </View>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        question: state.selectQuestion.question,
        questionId: state.selectQuestion.questionId,
        questionCount: state.selectQuestion.questionCount
    };
};

export default connect(mapStateToProps, actions)(Home);
