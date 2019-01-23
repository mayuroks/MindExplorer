/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


// Below Code doesn't work, investigate
// import { AppRegistry } from 'react-native';
// import { App } from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);