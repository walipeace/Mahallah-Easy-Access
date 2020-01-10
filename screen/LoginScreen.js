import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import Router from './Router';

import reducers from './reducers/index';
import {db, auth} from './config/db';
import LoginForm from './components/LoginForm';


export default class LoginScreen extends Component {

  componentWillMount(){
  }

  render() {

    const store=createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      // <Provider store={store}>
      //   <View style={{paddingTop: 50}}>
      //     <LoginForm/> 
      //    </View>
      // </Provider>

      <Provider store={store}>
        <Router/>
      </Provider>

    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});