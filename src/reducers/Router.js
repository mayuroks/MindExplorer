import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from '../components/Home';
import Splash from '../components/Splash';
// import FBLoginButton from '../components/Login';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="splash" component={Splash} title="Splash" hideNavBar={true} />
                <Scene key="home" component={Home} title="Home" hideNavBar={true} />
            </Scene>
        </Router>
    );
}

export default RouterComponent;
