import React, {Component} from 'react';
import {Linking, Text, View, StyleSheet, TextInput, Picker, Alert, Button, Image, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
// import { Header } from "./common";
import * as ImagePicker from 'expo-image-picker';
import {db} from './config/db';

class ReportScreen extends Component{
    
    constructor(){
        super();
        this.state={
            phone: null,
            matricno: null,
            mahallah: null,
            blok: null,
            problem: null,
            image: null,
            other: null
        };
    }

    setPhone = (value) =>{
        this.setState({phone: value});
    }

    setMatricNo = (value) => {
        this.setState({matricno: value});
    }

    selectMahallah = (value) => {
        this.setState({mahallah: value});
    } 

    setBlok = (value) => {
        this.setState({blok: value});
    }

    selectProblem = (value) => {
        this.setState({problem: value});
    }

    setOther = (value) => {
        this.setState({other: value});
    }

    setImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
        //   aspect: [4, 3],
          quality: 1
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      };

//submit button will direct to this function
      sendData =()=>{
          if(this.state.mahallah && this.state.blok && this.state.matricno && this.state.problem && this.state.other && this.state.phone && this.state.image){
            addReport(this.state.mahallah, this.state.blok, this.state.matricno, this.state.problem, this.state.other, this.state.phone, this.state.image);          
          }else{
            Alert.alert('Status', 'Empty field(s)!');
        }
      }

    render(){
        let { image } = this.state;

        return(
            // <View>
            //     {/* <Header headerText={'Report'}/> */}

            <ImageBackground source={require('../img/icon2/IIUM.png')} style={{flex:1}}>
            <ScrollView>
                <View style={styles.titlebox}>
                    <Text style={styles.title}>Mahallah Report Sheet</Text>
                </View>
            <View style={styles.container}>
                    <TextInput placeholder='Matric Number' onChangeText={this.setMatricNo} style={styles.input}/>

                    <Picker
                        selectedValue={this.state.mahallah}
                        style={styles.pickStyle}
                        onValueChange={this.selectMahallah}
                    >
                    <Picker.Item label="Select Mahallah" value=""/>
                    <Picker.Item label="Aminah" value="Aminah"/>
                    <Picker.Item label="Salahuddin" value="Salahuddin"/>
                    <Picker.Item label="Ruqayyah" value="Ruqayyah"/>
                    <Picker.Item label="Zubair" value="Zubair"/>
                    <Picker.Item label="Ali" value="Ali"/>
                    <Picker.Item label="Safiyyah" value="Safiyyah"/>
                    <Picker.Item label="Halimah" value="Halimah"/>
                    </Picker>

                    <TextInput placeholder="Room Number" onChangeText={this.setBlok} style={styles.input}/>

                    <TextInput placeholder="Phone Number" onChangeText={this.setPhone} style={styles.input}/>

                    <Picker 
                        selectedValue={this.state.problem}
                        style={styles.pickStyle}
                        onValueChange={this.selectProblem}
                        >
                            <Picker.Item label="Select the problem" value=""/>
                            <Picker.Item label="Lamp" value="Lamp"/>
                            <Picker.Item label="Windows" value="Windows"/>
                            <Picker.Item label="Bed" value="Bed"/>
                            <Picker.Item label="Table" value="Table"/>
                            <Picker.Item label="Chair" value="Chair"/>
                            <Picker.Item label="Wardrobe" value="Wardrobe"/>
                            <Picker.Item label="Drawer" value="Drawer"/>
                            <Picker.Item label="Curtain Rail" value="Curtain Rail"/>
                            <Picker.Item label="Towel Rail" value="Tower Rail"/>
                            <Picker.Item label="Mattress" value="Mattress"/>
                            <Picker.Item label="Mirror" value="Mirror"/>
                            <Picker.Item label="Plug" value="Plug"/>
                            <Picker.Item label="Book Rack" value="Book Rack"/>
                            <Picker.Item label="Ceiling Fan" value="Ceiling Fan"/>
                            <Picker.Item label="Tiles" value="Tiles"/>
                            <Picker.Item label="Shoe Rack" value="Shoe Rack"/>
                            <Picker.Item label="Door" value="Door"/>
                            <Picker.Item label="Toilet" value="Toilet"/>
                            <Picker.Item label="Sink" value="Sink"/>
                            <Picker.Item label="Shower" value="Shower"/>
                            <Picker.Item label="Common Room" value="Common Room"/>
                            <Picker.Item label="Ampaian" value="Ampaian"/>
                            <Picker.Item label="Corridor" value="Corridor"/>
                        </Picker>

                        <TextInput placeholder="Details" onChangeText={this.setOther} style={styles.input}/>

                        <TouchableOpacity onPress={this.setImage}>
                            <View style={styles.imgbox}>
                                <Text style={styles.textupload}>Pick image from gallery</Text>
                                    {image &&  
                                    <Image source={{uri:image}} style={{width: 200, height: 200}}/>}
                            </View>
                        </TouchableOpacity>
            </View>

                <View style={{marginVertical:15}}>
                    <TouchableOpacity style={styles.buttonSubmit} onPress={this.sendData}>
                        <Text style={{color:"white"}}>Submit</Text>
                    </TouchableOpacity>
                </View>

            {/* <View>
                <Text>@</Text>
                <TouchableOpacity onPress={()=>Linking.openURL('')}>
                    <Text>Click on this link to RSD Google Form</Text>
                </TouchableOpacity>
            </View> */}
            </ScrollView>
            </ImageBackground>
        //  </View>

        );
    }
}

//onPress={this.saveData}

export default ReportScreen;

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
    const addReport=(mahallah, blok, matricno, problem, other, phone, image)=>{
        db.ref('/Report').child(mahallah).child(problem).set({
            blok: blok,
            image: image,
            mahallah: mahallah,
            matricno: matricno,
            other: other,
            phone: phone,
            problem: problem
          }, Alert.alert('Your report has been saved!'));

    }

