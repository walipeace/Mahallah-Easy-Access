import React from 'react';
import {Text, View} from 'react-native';

const Header =(props) =>{
    const{textStyle, viewStyle} =styles;

    return (
        <View style={viewStyle}>
<Text style={textStyle}>{props.headerText}</Text>
        </View>    
    );
};

const styles={
    textStyle:{
        fontSize: 20,
        color: 'white'
    }, 
    viewStyle:{
        backgroundColor:'purple',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        shadowColor: '#fff',
        shadowOffset:{width:0, height:2},
        shadowOpacity: 0.2,
        // elevation: 2,
        position: 'relative'
    }
};
export {Header};

