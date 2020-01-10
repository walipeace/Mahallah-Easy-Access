/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createDrawerNavigator, createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

//main screen
import PosterScreen from './screen/PosterScreen';
import MrcScreen from './screen/MrcScreen';
import ReportScreen from './screen/ReportScreen';
import RuleScreen from './screen/RuleScreen';
import LoginScreen from './screen/LoginScreen';

//screen mahallah
import AminahScreen from './screen/AminahScreen';
import HalimahScreen from './screen/HalimahScreen';
import AliScreen from './screen/AliScreen';
import RuqayyahScreen from './screen/RuqayyahScreen';
import BilalScreen from './screen/BilalScreen';
import SumayyahScreen from './screen/SumayyahScreen';
import SalahuddinScreen from './screen/SalahuddinScreen';
import  Faruq from './screen/Faruq';
import Siddiq from './screen/Siddiq';
import Uthman from './screen/Uthman';
import Zubair from './screen/Zubair';
import Asiah from './screen/Asiah';
import Asma from './screen/Asma';
import Hafsa from './screen/Hafsa';
import Nusaibah from './screen/Nusaibah';
import Safiyyah from './screen/Safiyyah';

class App extends Component{

  render(){
    return(
      // <AppContainer/>
      <RootStack/>
    );
  }
}

export default App;

class HomeScreen extends Component{

  render(){
    return (
      <View style={styles.home11}>
                <TouchableOpacity style={styles.admin} onPress={()=>this.props.navigation.navigate('Login')}>
                    <Text style={{color:"purple", fontSize:30}}>Admin</Text>
                </TouchableOpacity>
        <View style={styles.home1}>
           <Image source={require('./img/rumah.png')} style={styles.home2}/>
      </View>
            <View style={{marginVertical:15}}>
                <TouchableOpacity style={styles.buttonSubmit} onPress={()=>this.props.navigation.navigate('Index')}>
                    <Text style={{color:"white", fontSize:20, fontWeight:'700'}}>Click here to continue</Text>
                </TouchableOpacity>
            </View>

      </View>
    );
  }
}

class DetailScreen extends Component{
  render(){
      return(
        <View style={{justifyContent: 'center', alignItems:'center', flex:1}}>
        <Text>Home</Text>
        <Button title="Poster" onPress={()=>this.props.navigation.navigate('PostAdmin')}/>
        <Button title="Mrc" onPress={()=>this.props.navigation.navigate('MrcAdmin')}/>
      </View>
      );
  }
}

const styles=StyleSheet.create({
  home1:{
    marginTop: "30%",
    justifyContent:'center', 
    alignItems:'center'
  },
  home2:{
    width:300, 
    height:300, 
    borderRadius: 7,
  },
  home11:{
    flex:1, 
  },
  buttonSubmit:{
    borderWidth: 1, 
    borderColor: "purple",
    height: 55, 
    width: "90%", 
    alignItems:"center", 
    borderRadius: 30,
    backgroundColor: "purple", 
    alignSelf:"center",
    justifyContent: 'center',
    marginBottom: 5,
    alignContent: 'center'
  },
  admin:{
    paddingLeft: "70%",
    paddingTop: "5%"
  } 

})

const IndexTabNavigator=createBottomTabNavigator({
  Report: {screen: ReportScreen,
    navigationOptions:{
      tabBarLabel:"Report",
      tabBarIcon:({tintColor}) => (
        <Icon name="ios-filing" color={tintColor} size={24}/>
      )
    }},
  Rule: {screen: RuleScreen,
    navigationOptions:{
      tabBarLabel:"Rule",
      tabBarIcon:({tintColor}) => (
        <Icon name="ios-warning" color={tintColor} size={24}/>
      )
  }},
  Poster: {screen: PosterScreen,
    navigationOptions:{
      header:null,
      tabBarLabel: "Poster",
      tabBarIcon:({tintColor}) => (
        <Icon name= "ios-image" color={tintColor} size={24}/>
      )
    }},
  Mrc: {screen: MrcScreen,
    navigationOptions:{
      headerTitle:"MRC",
      tabBarLabel: "MRC",
      tabBarIcon:({tintColor}) => (
        <Icon name= "ios-people" color={tintColor} size={24}/>
        )
      }}
    }, {
  initialRouteName: "Poster",
  order: ['Poster', 'Mrc', "Report", "Rule"],
  navigationOptions:{
    tabBarVisible: true},
    tabBarOptions:{
      activeTintColor: "purple",
      inactiveTintColor: "grey",
      activeBackgroundColor: "grey",
      inactiveBackgroundColor: "purple",
    },
  //   navigationOptions:({navigation}) => {
  //   const{routeName} = navigation.state.routes[navigation.state.index]
  //   return{
  //     header: null,
  //     headerTitle: routeName,
  //     backgroundColor: 'purple'
  //   }
  // }
});

const AppSwitchNavigator= createSwitchNavigator({
  Home: HomeScreen,
  Index: IndexTabNavigator,
});

const RootStack=createStackNavigator({
  AppSwitchNavigator:AppSwitchNavigator,
  Login: LoginScreen,
  Index2: DetailScreen,
 
 //individual screen
 Aminah: AminahScreen,
  Salah: SalahuddinScreen,
  Bilal: BilalScreen,
  Ali: AliScreen,
  Sumayyah: SumayyahScreen,
  Ruqayyah: RuqayyahScreen,
  Halimah: HalimahScreen,
  Faruq: Faruq,
  Siddiq: Siddiq,
  Uthman: Uthman,
  Zubair: Zubair,
  Asiah: Asiah,
  Asma: Asma,
  Hafsa: Hafsa,
  Nusaibah: Nusaibah,
  Safiyyah: Safiyyah

});

// const AppContainer=createAppContainer(RootStack);


