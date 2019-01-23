/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


// import libs
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// FIXME be careful on how you import
import Header from './src/components/header';
import QuestionCard from './src/components/questionCard';
import questions  from './src/questions.json';

// make component
class App extends Component {
  state = { questions: questions}

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
          onPress1={() => console.log("button1 pressed")}
          onPress2={() => console.log("button2 pressed")}
        />
      </View>
    );
  }
}

// export
export default App;
