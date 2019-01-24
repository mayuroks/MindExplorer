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
    render() {
        console.log(this.props);

        // does this id change with curQuestion
        // const { id } = this.props.curQuestion;

        return (
            <View>
                <Header title="Sample App Wow" />
                <QuestionCard
                    question="This is sad?"
                    option1="No way"
                    option2="Ewww"
                    onPress1={() => this.props.selectQuestionById(0)}
                    onPress2={() => console.log("Button2 pressed")}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        questions: state.questions,
        curQuestionId: state.curQuestionId
    };
};

// export
export default connect(mapStateToProps, actions)(Home);
