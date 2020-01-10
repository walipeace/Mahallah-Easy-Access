import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TouchableNativeFeedback, Linking} from 'react-native';
import { Card, CardSection } from "./common";
import axios from'axios';

const db=axios.create({
  baseURL: 'https://myfyp-a7446.firebaseio.com/'
})


class AminahScreen extends React.Component{

  state={
    display: []
  }

  componentDidMount(){
    db.get('/aminah.json')
    .then (response=>{
        console.log(response.data)
        const fetchedResults = [];
        for(let key in response.data){
            fetchedResults.unshift(
                {
                    ...response.data[key],
                    id:key
                }
            )
        }
        this.setState({display:fetchedResults})
    })
}

renderDetail(){
  return this.state.display.map(result =>
      <Detail 
      key={result.id}
      name={result.name}
      phone={result.phone}
      picture={result.picture}
      position={result.position}
      />
      );
}


    render(){
      console.log(this.state);

        return(
            <ScrollView style={{flex:1, padding:10, backgroundColor:'#800000'}}>
          <View style={styles.container}>
            <Image source={require('../img/aminah.png')} style={styles.img}/>
            <Text style={styles.Titletext}>Mahallah Aminah</Text>
          </View>

          <View style={styles.container}>

          <TouchableNativeFeedback onPress={() => Linking.openURL('https://www.facebook.com/mahallahaminah.iium.7')}>
            <Text style={styles.fontStyle}>
            <Image 
              source={require('../img/icon2/FB.png')} 
              style={styles.img1}/> 
                Mahallah Aminah IIUM</Text>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => Linking.openURL('https://www.instagram.com/mahallahaminahiium/?hl=en')}>
            <Text style={styles.fontStyle}>
            <Image 
              source={require('../img/icon2/IG.png')} 
              style={styles.img1}/> 
                @MahallahAminahIIUM </Text>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => Linking.openURL('https://twitter.com/mahallahaminah?lang=en')}>
              <Text style={styles.fontStyle}>
              <Image 
                source={require('../img/icon2/twit.png')}
                style={styles.img1}/>
                @MahallahAminah </Text>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => Linking.openURL('tel:+60364215497')}>
              <Text style={styles.fontStyle}>
              <Image source={require('../img/icon2/phone1.png')} style={styles.img1}/>
                03-6421 5497/5498/5496 </Text>
              </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => Linking.openURL('https://www.google.com/maps/place/Mahallah+Aminah,+IIUM/@3.2554097,101.7294458,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc38c73b6147ef:0x84c0dbe93028fa49!8m2!3d3.2554097!4d101.7316345')}>
              <Text style={styles.fontStyle}>
              <Image source={require('../img/icon2/location.png')} style={styles.img1}/>
                International Islamic University Malaysia, 53100, Jalan Gombak, Kuala Lumpur </Text>
            </TouchableNativeFeedback>
      </View>

      <View style={styles.Titleview}>
          <Text style={styles.Titletext}>Mahallah Representative Committee</Text>
      </View>

          <View style={{marginBottom: "10%"}}>
            {this.renderDetail()}
          </View>
      </ScrollView>
        );
    }
}

export default AminahScreen;

const Detail = (props) => {
  const {name, phone, picture, position} = props;
  const {thumbnailStyle, headerContentStyle, thumbnailContainerStyle} = styles;

  return(
      <Card>
          <CardSection>
              <View style={thumbnailContainerStyle}>
                  <Image 
                  style={thumbnailStyle}
                  source={{uri:picture}}/>
              </View>
              <View style={headerContentStyle}>
                 <Text style={{fontWeight:'bold'}}>{position}</Text> 
                  <Text>Name: {name}</Text>
                  <Text>Phone Number: {phone}</Text>
              </View>
          </CardSection>
      </Card>

  );
  }


const styles={
    container: {
        justifyContent:'center',
        alignItems: 'center', 
      },
      img1:{
        height:30,
        width: 30,
      },
    img:{
        marginTop: "10%",
        height: 350,
        width: 350,
      },
      img2:{
        height:100,
        width: 100,
        alignSelf:'center',
        marginTop: 10,
        marginBottom:10,
        borderRadius:50
      },
      Titletext:{
        // fontFamily: 'verdana',
        fontSize: 30,
        fontWeight: 'bold',
      },
      Titleview:{
        marginTop:20, 
        alignItems:'center',
        alignSelf: 'center',
        justifyContent: 'center'

      },
      fontStyle:{
        fontSize:15,
        marginHorizontal: 10,
        fontWeight: '500'
        
      },
      headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        fontSize: 25,
        fontWeight: 'bold'
    },
    thumbnailStyle:{
        height: 70,
        width: 70        
    },
    thumbnailContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#E6E6FA',
        marginLeft: 10,
        marginRight: 10
    }

}