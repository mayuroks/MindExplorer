import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { connect } from 'react-redux';
import * as actions from '../actions';
import FadeInView from './common/FadeInView';
import Color from './common/Color';
import * as Progress from 'react-native-progress';

class QuestionCard extends Component {

    state = {
        cardFactor: new Animated.Value(0)
    }

    componentWillMount() {
        console.log("QuestionCard componentWillMount");
    }

    componentDidMount() {
        Animated.timing(
            this.state.cardFactor,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.bounce,
                useNativeDriver: true
            }
        ).start();
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
            optionsContainerStyle, nextButtonStyle, nextButtonTextStyle, buttonContainerStyle,
            bottomSheetContainer
        } = styles;

        const scaleY = this.state.cardFactor.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });

        return (
            <View style={containerStyle}>
                
                <View style={{marginBottom: 20}}>
                    <Text style={questionCountStyle}>Questions answered: {questionId + 1}/{questionCount}</Text>

                    <Progress.Bar
                        progress={(questionId + 1) / questionCount}
                        height={15}
                        width={200}
                        borderRadius={100}
                        useNativeDriver={true}
                        animated={true}
                        borderColor={'white'}
                        unfilledColor={'white'}
                        style={{ alignSelf: "center" }} />

                </View>

                <Animated.View style={{ ...bottomSheetContainer, transform: [{ scaleY: scaleY }] }}>
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
                </Animated.View>
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
    bottomSheetContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 20,
        alignSelf: 'stretch',
        height: 400,
        elevation: 10,
        marginLeft: 20,
        marginRight: 20
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: Color.Primary,
    },
    cardContainer: {
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    questionStyle: {
        fontSize: 26,
        marginTop: 12,
        marginBottom: 8,
        marginLeft: 13,
        fontFamily: 'opensans_bold'
    },
    optionStyle: {
        fontSize: 20,
        marginLeft: 8
    },
    questionCountStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 8,
        fontFamily: 'opensans_regular',
        color: Color.White
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
        fontSize: 16
    },
    buttonContainerStyle: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 32,
        marginRight: 32
    }
}
