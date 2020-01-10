import React, {Component} from 'react';
import {View, Text, Button, ScrollView, TextInput, Picker, Image, Alert, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {db} from '../config/db';
// import axios from 'axios';

// const db=axios.create({
//   baseURL:'https://myfyp-a7446.firebaseio.com/'
// })

class MrcForm extends Component {

  constructor(){
    super()
    this.state={
      mahallah: null,
      picture: null,
      name: null,
      position: null,
      phone: null,
      year: 0
    };
  }

  selectMahallah=(value)=>{
    this.setState({mahallah: value});
  }

  setPicture=async()=>{

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ picture: result.uri });
    }
  }

  setName=(value)=>{
    this.setState({name:value});
  }

  setPosition=(value)=>{
    this.setState({position:value});
  }

  setPhone=(value)=>{
    this.setState({phone:value});
  }

  selectYear=(value)=>{
    this.setState({year:value});
  }

  saveData=()=>{
    if(this.state.mahallah && this.state.name && this.state.phone && this.state.picture && this.state.position && this.state.year){
      // if(isNaN(this.state.mahallah)){
      //   Alert.alert('Status', 'Wrong Mahallah!')
      // }
      // else{
        addMrc(this.state.mahallah, this.state.name, this.state.phone, this.state.picture, this.state.position, this.state.year);     
      // }
    } else{
      Alert.alert('Status', 'Empty field(s)!');
    }
  }


    render(){
      let {picture} = this.state;

      return(
        <ImageBackground source={require('./IIUM.png')} style={{flex:1}}>
        <ScrollView>
          <View style={styles.titlebox}>
              <Text style={styles.title}>Fill in MRC details</Text>
          </View>
          <View style={styles.container}>

            <Picker
              selectedValue={this.state.mahallah}
              style={styles.pickStyle}
              // placeholder="Select Mahallah"
              onValueChange={this.selectMahallah}>
                <Picker.Item label="Choose Mahallah" value=""/>
                  <Picker.Item label="Aminah" value="aminah"/>
                  <Picker.Item label="Ali" value="ali"/>
                  <Picker.Item label="Asiah" value="asiah"/>
                  <Picker.Item label="Asma" value="asma"/>
                  <Picker.Item label="Bilal" value="bilal"/>
                  <Picker.Item label="Faruq" value="faruq"/>
                  <Picker.Item label="Hafsa" value="hafsa"/>
                  <Picker.Item label="Halimah" value="halimah"/>
                  <Picker.Item label="Maryam" value="maryam"/>
                  <Picker.Item label="Nusaibah" value="nusaibah"/>
                  <Picker.Item label="Ruqayyah" value="ruqayyah"/>
                  <Picker.Item label="Safiyyah" value="safiyyah"/>
                  <Picker.Item label="Salahuddin" value="salahuddin"/>
                  <Picker.Item label="Sumayyah" value="sumayyah"/>
                  <Picker.Item label="Siddiq" value="siddiq"/>
                  <Picker.Item label="Uthman" value="uthman"/>
                  <Picker.Item label="Zubair" value="zubair"/>                  
                </Picker>

                <Picker
                  selectedValue={this.state.position}
                  // placeholder="Position"
                  style={styles.pickStyle}
                  onValueChange={this.setPosition}>
                    <Picker.Item label="Choose Position" value=""/>
                    <Picker.Item label="President" value="PRESIDENT"/>
                    <Picker.Item label="Vice President I" value="VICE PRESIDENT I"/>
                    <Picker.Item label="Vice President II" value="VICE PRESIDENT II"/>
                    <Picker.Item label="Secretary" value="SECRETARY"/>
                    <Picker.Item label="Treasurer" value="TREASURER"/>
                    <Picker.Item label="Multimedia" value="MULTIMEDIA"/>
                    <Picker.Item label="Sports and Recreation" value="SPORTS"/>
                    <Picker.Item label="Education" value="EDUCATION"/>
                    <Picker.Item label="Entrepreneurship" value="ENTREPRENEURSHIP"/>
                    <Picker.Item label="Dakwah" value="DAKWAH"/>
                    <Picker.Item label="Community Service" value="COMMUNITY SERVICE"/>
                    <Picker.Item label="Welfare" value="WELFARE"/>
                    <Picker.Item label="Arts and Culture" value="ARTS AND CULTURE"/>
                  </Picker>


            <Picker
              selectedValue={this.state.year}
              onValueChange={this.selectYear}
              style={styles.pickStyle}>
                <Picker.Item label="Choose study year" value=""/>
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />                
              </Picker>

             <TextInput placeholder="Name" onChangeText={this.setName} style={styles.input}/>
            <TextInput placeholder="Phone Number" onChangeText={this.setPhone} style={styles.input}/>

                <TouchableOpacity onPress={this.setPicture}>
                  <View style={styles.imgbox}>
                      <Text style={styles.textupload}>Upload Picture</Text>
                        {picture &&  
                          <Image source={{uri:picture}} style={{width: 200, height: 200}}/>}
                  </View>
                </TouchableOpacity>


          </View>

          <View style={{marginVertical:15}}>
                <TouchableOpacity style={styles.buttonSubmit} onPress={this.saveData}>
                    <Text style={{color:"white"}}>Submit</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
        </ImageBackground>
      );
    }
  }

  export default MrcForm;

  const styles=StyleSheet.create({
    title:{
      margin: 15,
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: "white"
      // alignItems: 'center'
  }, 
  container:{
    justifyContent: 'center', 
    alignItems:'center', 
    flex:1,
  }, 
  input:{
    marginTop: 10, 
    height:42, 
    width:"80%", 
    borderBottomWidth: 1,
    backgroundColor: "white"
  }, 
  buttonSubmit:{
    borderWidth: 1, 
    height: 42, 
    width: "80%", 
    justifyContent:"center", 
    alignItems:"center", 
    borderRadius: 40,
    backgroundColor: "black", 
    alignSelf:"center"
  }, 
  imgbox:{
    borderWidth: 1,
    height: 250,
    width: 250,
    alignItems: 'center',
    marginVertical: 15
  },
    textupload:{
      fontSize: 15,
      alignSelf: 'center',
      fontWeight: 'bold'
    },
    titlebox:{
      backgroundColor: "purple"
    }, 
    pickStyle:{
      marginTop: 10,
      height:42, 
      width:"80%", 
      backgroundColor: "white",
    }

  })


  const addMrc=(mahallah, name, phone, picture, position, year) =>{
    // db.ref('/MRC').child(mahallah).child(position).set({
    db.ref(mahallah).child(position).set({
      name: name,
      phone: phone,
      picture: picture,
      position:position,
      year: year
    }, Alert.alert('Detail updated!'));
  }

  