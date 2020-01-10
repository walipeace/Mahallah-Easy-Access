import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TouchableNativeFeedback, Linking} from 'react-native';
import axios from 'axios';
import  {Card, CardSection} from './common';

const db=axios.create({
  baseURL: 'https://myfyp-a7446.firebaseio.com/'
})

class AliScreen extends React.Component{

  state={
    display:[]
  }

  componentDidMount(){
    db.get('/ali.json')
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
            <ScrollView style={{flex:1, padding:10, backgroundColor: '#0D8E22'}}>
                <View style={styles.container}>
                    <Image source={require('../img/ali.jpg')} style={styles.img}/>
                    <Text style={styles.Titletext}>Mahallah Ali ibn Abi Talib</Text>
                </View>

                <View style={styles.container}>
          
                     <TouchableNativeFeedback onPress={() => Linking.openURL('https://www.facebook.com/Mahallah-ALI-607781229425415/')}>
                        <Text style={styles.fontStyle}>
                         <Image source={require('../img/icon2/FB.png')} style={styles.img1}/> 
                         Mahallah ALI</Text>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Linking.openURL('https://www.instagram.com/officialmahallahali/?hl=en')}>
                        <Text style={styles.fontStyle}>
                        <Image source={require('../img/icon2/IG.png')} style={styles.img1}/> 
                        @officialmahallahali </Text>
                    </TouchableNativeFeedback>
          
                    <TouchableNativeFeedback onPress={() => Linking.openURL('https://twitter.com/Officialmrcali')}>
                        <Text style={styles.fontStyle}>
                        <Image source={require('../img/icon2/twit.png')} style={styles.img1}/>
                        @Officialmrcali </Text>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Linking.openURL('tel:+60364214072')}>
                        <Text style={styles.fontStyle}>
                        <Image source={require('../img/icon2/phone1.png')} style={styles.img1}/>
                         03-6421 4072/4073/4071 </Text>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Linking.openURL('https://www.google.com/maps/place/Mahallah+Ali+Abi+Talib/@3.2478099,101.7350685,17z/data=!4m12!1m6!3m5!1s0x31cc38e9bb77f819:0x5c2058733b8d90f1!2sMahallah+Ali+Abi+Talib!8m2!3d3.2478099!4d101.7372572!3m4!1s0x31cc38e9bb77f819:0x5c2058733b8d90f1!8m2!3d3.2478099!4d101.7372572')}>
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

export default AliScreen;

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