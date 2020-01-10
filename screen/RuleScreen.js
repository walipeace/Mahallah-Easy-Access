import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { Header } from "./common";

export default class RuleScreen extends React.Component{
  static navigationOptions = {
    title: 'Home',
  };

    render(){
        return(
          <ImageBackground source={require('../img/icon2/IIUM.png')} style={styles.container}>
            <View>
            {/* <Header headerText={'Rule'}/> */}
            <View>          
                <Text style={styles.container2}> Rules in Mahallah </Text>
                
                <Text style={styles.textbox}>List of Offences </Text> 
                {/* <Text style={{fontSize: 25}}>(RM 50)</Text> */}
                <Text> </Text>
                <View style={styles.boxtext}> 
                <Text style={styles.rule}>
                    1. Failure to register  {"\n"}
                    2. Keeping and Feeding Pets {"\n"}
                    3. Illegal Electrical Appliances {"\n"}
                    4. Failure to Conserve Energy {"\n"}
                    5. Dirty Compartments or Common Area {"\n"}
                    6. Smoking {"\n"}
                    7. Squatting and Collaborating {"\n"} 
                    8. Vandalism {"\n"}
                    9. Remove or Rearrange Room Furniture {"\n"}
                    10. Cooking in the Mahallah
                    </Text>           
                </View>
            </View>
            
          </View>

          </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  container2:{
    // backgroundColor: 'white',
    marginTop: 10,
    fontSize: 30, 
    fontWeight:'bold',
    alignSelf: 'center'
  },
  textbox:{
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 15,
    alignSelf: 'center'
  },
  rule:{
    fontSize: 18,
    fontWeight: '700',
    margin: 15,
    justifyContent: 'space-around'
    // color: 'white',
    // fontFamily: Helvetica
    //alignSelf: 'center'
  },
  boxtext:{
    
    borderWidth:0.5,
    borderColor: 'white',
  }
});