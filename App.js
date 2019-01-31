/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import libs
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Redux setup in App:
// step 1: Create a redux store
// step 2: create a provider
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Router from './src/reducers/Router';

// FIXME be careful on how you import
import reducers from './src/reducers';
import Home from './src/components/Home';

// make component
class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Home />
            </Provider>
        );
    }
}

// export
export default App;
