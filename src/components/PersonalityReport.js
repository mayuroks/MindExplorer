import React, { Component } from 'react';
import { TouchableOpacity, Text, View, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as PersonalityUtils from '../domain';
import SummaryCard from './SummaryCard';
import personalities from '../personalities.json';
import Color from './common/Color';

class PersonalityReport extends Component {
    componentWillMount() {
        console.log("PersonalityReport componentWillMount");
    }

    _renderTraitItem({ item }) {
        const { traitItemStyle } = styles;
        return (
            <Text style={traitItemStyle}>
                {item.code} - {item.fullName}
            </Text>
        );
    }

    _renderPersonalityItem({ item }) {
        const { personalityItemStyle, descriptionTextStyle, absolute } = styles;
        return (
            <View>
                <Text style={personalityItemStyle}>
                    {item.title}
                </Text>
                <Text style={descriptionTextStyle}>
                    {item.description}
                </Text>
            </View>
        );
    }

    render() {
        const { flatListStyle, container } = styles;
        console.log("PersonalityReport");
        console.log(this.props.answerMap);
        const personalityType = PersonalityUtils.getPersonalityType(this.props.answerMap);
        const traits = PersonalityUtils.getPersonalityTraits(personalityType);
        // const personality = personalities[personalityType];
        const personality = personalities["INTJ"];
        return (
            <ScrollView style={container}>
                <SummaryCard
                    alias={personality.alias}
                    personalityType={personality.personalityType}
                    description={personality.shortDescription}
                />
                <FlatList
                    style={flatListStyle}
                    data={traits}
                    renderItem={this._renderTraitItem}
                    keyExtractor={(item, index) => item.code}
                />
                <FlatList
                    style={flatListStyle}
                    data={personality.data}
                    renderItem={this._renderPersonalityItem}
                    keyExtractor={(item, index) => item.title}
                />
            </ScrollView>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        answerMap: state.personalityTest
    }
}

export default connect(mapStateToProps)(PersonalityReport);

const styles = {
    container: {
        backgroundColor: Color.Primary
    },
    flatListStyle: {
        backgroundColor: 'white',
        paddingTop: 4,
        paddingBottom: 8,
        paddingLeft: 24,
        paddingRight: 24,
        marginBottom: 8,
        borderRadius: 8,
        marginLeft: 8,
        marginRight: 8,
        elevation: 2
    },
    traitItemStyle: {
        fontFamily: 'opensans_regular',
        fontSize: 18,
        paddingTop: 4,
        paddingBottom: 4
    },
    personalityItemStyle: {
        fontFamily: 'opensans_bold',
        fontSize: 18,
        paddingTop: 4,
        paddingBottom: 4
    },
    descriptionTextStyle: {
        fontSize: 18,
        marginBottom: 16
    },
    absolute: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
    }
}