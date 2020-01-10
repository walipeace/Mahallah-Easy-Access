import React, {Component} from 'react';
import {View, Text, Button, ImageBackground, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';




class List extends Component{
    render(){
        return(
            <ImageBackground source={require('./IIUM.png')} style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <View>
                    <TouchableOpacity onPress={()=>Actions.PostAdmin()} style={{borderRadius:30, margin:"10%", backgroundColor:"white"}}>
                        <Text style={{fontSize: 30, fontWeight:'900', alignSelf:"center"}}>Poster</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Actions.mrc()} style={{borderRadius:30, margin:"10%", backgroundColor:"white", width: "80%"}}>
                        <Text style={{fontSize: 30, fontWeight:'900', alignItems:"center", marginHorizontal: 10}}>Mahallah Representative Committee</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            // <View style={{justifyContent: 'center', alignItems:'center', flex:1}}>
            //     <Button title="Poster" onPress={()=>Actions.PostAdmin()}/>
            //     <Button title="Mrc" onPress={()=>Actions.mrc()}/>
            // </View>
            );
    }
}
export default List;

