import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import List from './components/List';
import PosterForm from './components/PosterForm';
import MrcForm from './components/MrcForm';

const RouterComponent =()=>{
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth" hideNavBar>
                <Scene key="login" component={LoginForm} title="Please Login" ></Scene>
                </Scene>
                <Scene key="main" hideNavBar>
                    <Scene key="list" component={List} title="Upload Detail" ></Scene>
                    <Scene key="PostAdmin" component={PosterForm} title="Upload Poster Detail"></Scene>
                    <Scene key="mrc" component={MrcForm} title="MRC Member Detail"></Scene>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;