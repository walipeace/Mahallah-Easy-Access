import React, {Component} from 'react';
import {View, Text, Button, TextInput, ScrollView, Image,ImageBackground, Picker, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DatePicker from 'react-native-datepicker';
import {db} from '../config/db';


class PosterForm extends Component {

    constructor(){
        super()
        this.state={
            program: null,
            contact: null,
            logo: null,
            poster: null,
            date: "2019-12-01",
            mahallah: null,
            detail: null
        };
    }
    
    setProgram=(value)=>{
        this.setState({program:value});
    }

    setContact=(value)=>{
        this.setState({contact:value});
    }

    setDate=(date)=>{
      this.setState({date:date});
    }

    chooseLogo=async()=>{

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // aspect: [4, 3],
            quality: 1
          });
      
          console.log(result);
      
          if (!result.cancelled) {
            this.setState({ logo: result.uri });
          }
    }

    choosePoster=async()=>{

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // aspect: [4, 3],
            quality: 1
          });
      
          console.log(result);
      
          if (!result.cancelled) {
            this.setState({ poster: result.uri });
          }

    }

    chooseMahallah=(value)=>{
      this.setState({mahallah: value});
    }

    setDetail=(value)=>{
      this.setState({detail: value});
    }

    saveData=()=>{
      if(this.state.program && this.state.contact && this.state.logo && this.state.poster && this.state.date && this.state.mahallah && this.state.detail){
        // if(isNaN(this.state.mahallah)){
        //   Alert.alert('Status', 'Wrong Mahallah!')
        // }
        // else{
          addPoster(this.state.mahallah, this.state.program, this.state.contact, this.state.logo, this.state.poster, this.state.date, this.state.detail);     
        // }
      } else{
        Alert.alert('Status', 'Empty field(s)!');
      }
    }
  

    render(){
        let {logo, poster} = this.state;
        // let {poster} = this.state;
      return(

        <ImageBackground source={require('./IIUM.png')} style={{flex:1}}>
          <ScrollView>
            <View style={styles.titlebox}>
                <Text style={styles.title}>Upload your program details.</Text>
            </View>
            <View style={styles.container}>

                <TextInput placeholder="Program Name" autoCapitalize="words" onChangeText={this.setProgram} style={styles.input}/>
                <TextInput placeholder="Contact Number" onChangeText={this.setContact} style={styles.input}/>
                <TextInput placeholder="Details" maxLength={40} onChangeText={this.setDetail} style={styles.input}/>

                <Picker
              selectedValue={this.state.mahallah}
              style={styles.pickStyle}
              // placeholder="Select Mahallah"
              onValueChange={this.chooseMahallah}>
                <Picker.Item label="Choose Mahallah" value=""/>
                  <Picker.Item label="Aminah" value="Mahallah Aminah"/>
                  <Picker.Item label="Ali" value="Mahallah Ali"/>
                  <Picker.Item label="Asiah" value="Mahallah Asiah"/>
                  <Picker.Item label="Asma" value="Mahallah Asma"/>
                  <Picker.Item label="Bilal" value="Mahallah Bilal"/>
                  <Picker.Item label="Faruq" value="Mahallah Faruq"/>
                  <Picker.Item label="Hafsa" value="Mahallah Hafsa"/>
                  <Picker.Item label="Halimah" value="Mahallah Halimah"/>
                  <Picker.Item label="Maryam" value="Mahallah Maryam"/>
                  <Picker.Item label="Nusaibah" value="Mahallah Nusaibah"/>
                  <Picker.Item label="Ruqayyah" value="Mahallah Ruqayyah"/>
                  <Picker.Item label="Safiyyah" value="Mahallah Safiyyah"/>
                  <Picker.Item label="Salahuddin" value="Mahallah Salahuddin"/>
                  <Picker.Item label="Sumayyah" value="Mahallah Sumayyah"/>
                  <Picker.Item label="Siddiq" value="Mahallah Siddiq"/>
                  <Picker.Item label="Uthman" value="Mahallah Uthman"/>
                  <Picker.Item label="Zubair" value="Mahallah Zubair"/>                  
                </Picker>

                <DatePicker
                  style={{width: 200, marginVertical: 15}}
                  date = {this.state.date}
                  placeholder="Select date"
                  format="YYYY-MM-DD"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  onDateChange={this.setDate}/>


                <TouchableOpacity onPress={this.chooseLogo}>
                  <View style={styles.imgbox}>
                      <Text style={styles.textupload}>Upload Mahallah Logo</Text>
                        {logo &&  
                          <Image source={{uri:logo}} style={{width: 200, height: 200}}/>}
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.choosePoster}>
                  <View style={styles.imgbox}>
                      <Text style={styles.textupload}>Upload Poster</Text>
                        {poster &&  
                          <Image source={{uri:poster}} style={{width: 200, height: 215}}/>}
                  </View>
                </TouchableOpacity>
            </View>

            <View style={{marginVertical:15}}>
                <TouchableOpacity style={styles.buttonSubmit} onPress={this.saveData}>
                    <Text style={{color:"white"}}>Submit</Text>
                </TouchableOpacity>

              {/* <Button title="Submit" onPress={this.saveData}/> */}
            </View>

          </ScrollView>
        </ImageBackground>
      );
    }

  }
  
  export default PosterForm;

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
    marginBottom: 15
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

  const addPoster=(mahallah, program, contact, logo, poster, date, detail) =>{
    db.ref('/Poster').child(program).set({
      mahallah: mahallah,
      program: program,
      contact: contact,
      logo: logo,
      poster: poster,
      date: date,
      detail: detail
    }, Alert.alert('Poster updated!'));
  }
