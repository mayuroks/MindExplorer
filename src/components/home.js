// import libs
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// FIXME be careful on how you import
import Header from './Header';
import QuestionCard from './QuestionCard';

// Redux connect
import { connect } from 'react-redux';
import * as actions from '../actions';

// make component
class Home extends Component {
    componentWillMount() {
        // this.props.selectQuestionById(0);
    }

    componentDidMount() {
        // this.props.selectQuestionById(0)
    }

    renderQuestion() {
        console.log("render called");
        console.log(this.props);
        if (this.props.question !== undefined) {
            console.log("render if");
            return <QuestionCard
                question={this.props.question.title}
                option1={this.props.question.option1}
                option2={this.props.question.option2}
                onPress1={() => this.props.selectQuestionById(id++)}
                onPress2={() => console.log("Button2 pressed")}
            />
        } else {
            console.log("render else");
            return;
        }
    }

    render() {
        // console.log(this.props);
        // does this id change with curQuestion
        // const { id } = this.props.curQuestion;
        return (
            <View>
                <Header title="Sample App Wow" />
                {this.renderQuestion()}
            </View>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        question: state.question,
        questionId: state.questionId,
        questionCount: state.questionCount
    };
};

// export
export default connect(mapStateToProps, actions)(Home);
