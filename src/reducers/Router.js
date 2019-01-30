import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from '../components/Home';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home" component={Home} title="Home" />
            </Scene>
        </Router>
    );
}

export default RouterComponent;