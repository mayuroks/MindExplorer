import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as PersonalityUtils from '../domain';
import SummaryCard from './SummaryCard';

class PersonalityReport extends Component {
    componentWillMount() {
        console.log("PersonalityReport componentWillMount");
    }

    _renderItem({ item }) {
        const { itemStyle } = styles;
        return (
            <Text style={itemStyle}>
                {item.code} - {item.fullName}
            </Text>
        );
    }

    render() {
        const { flatListStyle, itemStyle, container } = styles;
        console.log("PersonalityReport");
        console.log(this.props.answerMap);
        const personalityType = PersonalityUtils.getPersonalityType(this.props.answerMap);
        const traits = PersonalityUtils.getPersonalityTraits(personalityType);
        console.log(traits);
        return (
            <View style={container}>
                <SummaryCard />
                <FlatList
                    style={flatListStyle}
                    data={traits}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => item.code}
                />
            </View>
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
    },
    flatListStyle: {
        backgroundColor: 'white',
        paddingTop: 4,
        paddingBottom: 8,
        paddingLeft: 24,
        paddingRight: 24,
    },
    itemStyle: {
        fontFamily: 'opensans_regular',
        fontSize: 18,
        paddingTop: 4,
        paddingBottom: 4
    }
}