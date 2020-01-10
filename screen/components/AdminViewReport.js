import React, {Component} from 'react';
import {View, Text, ImageBackground, FlatList} from 'react-native';

class ViewReport extends Component{
    render(){
        return(
            <ImageBackground source={require('./IIUM.png')} style={{flex: 1}}>
                <FlatList>
                    <View>

                    </View>
                </FlatList>
            </ImageBackground>
        )
    }
}

export default ViewReport;