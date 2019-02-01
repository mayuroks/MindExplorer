import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { connect } from 'react-redux';
import * as actions from '../actions';
import FadeInView from './common/FadeInView';

class QuestionCard extends Component {
    componentWillMount() {
        console.log("QuestionCard componentWillMount");
    }

    onSelect(index, value) {
        selection = {
            questionId: this.props.questionId,
            optionId: index
        }

        this.props.selectOption(selection);
    }

    render() {
        const {
            question, questionId, questionCount, option1, option2, onPress1, onPress2
        } = this.props;

        const {
            containerStyle, questionStyle, optionStyle, cardContainer, questionCountStyle,
            optionsContainerStyle, nextButtonStyle, nextButtonTextStyle, buttonContainerStyle
        } = styles;

        return (
            <View style={containerStyle}>
                <Text style={questionCountStyle}>{questionId + 1}/{questionCount}</Text>

                <FadeInView>
                    <View style={cardContainer}>
                        <Text style={questionStyle}>{question}</Text>

                        <RadioGroup
                            style={optionsContainerStyle}
                            onSelect={(index, value) => this.onSelect(index, value)}
                            color='red'
                            selectedIndex={this.props.answerMap[questionId]}>
                            <RadioButton value={'item1'} >
                                <Text style={optionStyle}>{option1}</Text>
                            </RadioButton>

                            <RadioButton value={'item2'}>
                                <Text style={optionStyle}>{option2}</Text>
                            </RadioButton>
                        </RadioGroup>
                    </View>
                </FadeInView>

                <View style={buttonContainerStyle}>
                    <TouchableOpacity
                        onPress={onPress1}
                        style={nextButtonStyle}>
                        <Text style={nextButtonTextStyle}>
                            Next
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        answerMap: state.personalityTest
    }
}

export default connect(mapStateToProps, actions)(QuestionCard);

const styles = {
    containerStyle: {
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 1,
        marginTop: 64,
        marginLeft: 24,
        marginRight: 24,
    },
    cardContainer: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ECEFF1',
        marginTop: 32,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
        elevation: 2,

    },
    questionStyle: {
        fontSize: 20,
        marginTop: 12,
        marginBottom: 16,
        fontFamily: 'opensans_bold'
    },
    optionStyle: {
        fontSize: 16,
        marginLeft: 8,
    },
    questionCountStyle: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'opensans_regular'
    },
    optionsContainerStyle: {
        marginTop: 18
    },
    nextButtonStyle: {
        backgroundColor: 'red',
        height: 48,
        borderRadius: 100,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        paddingLeft: 40,
        paddingRight: 40,
        elevation: 2,
        shadowRadius: 8,
        shadowOpacity: 0.8,
        shadowOffset: { height: 80, width: 0 }
    },
    nextButtonTextStyle: {
        color: 'white',
        fontFamily: 'opensans_bold',
        fontSize: 18
    },
    buttonContainerStyle: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 48
    }
}
