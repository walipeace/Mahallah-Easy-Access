import React, {Component} from 'react';
import {Text, View, Image, ScrollView, ImageBackground} from 'react-native';
import { Header, Card, CardSection } from "./common";
import axios from 'axios';
// import firebase from 'firebase';

const db=axios.create({
    baseURL:'https://myfyp-a7446.firebaseio.com/'
  })
  
class PosterScreen extends Component{
        state={
            display:[]
        }
        

    componentDidMount(){
        db.get('/Poster.json')
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


    renderPoster(){
        return this.state.display.map(result =>
            <PosterDetail 
            key={result.id}
            name={result.program}
            mahallah={result.mahallah}
            logo={result.logo}
            poster={result.poster}
            detail={result.detail}
            date={result.date}
            contact={result.contact}/>
            );
    }

    render(){
        console.log(this.state);
        return(
            <ImageBackground source={require('../img/icon2/IIUM.png')} style={{flex:1}}>
            <ScrollView>
                {this.renderPoster()}
            </ScrollView>
            </ImageBackground>
        );
    }
}

export default PosterScreen;

const PosterDetail = (props) => {
    const {contact, date, detail, logo, mahallah, poster, name} = props;
    const {thumbnailStyle, headerContentStyle, thumbnailContainerStyle, imageStyle, detailContentStyle} = styles;

    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                    style={thumbnailStyle}
                    source={{uri:logo}}/>
                </View>
                <View style={headerContentStyle}>
                   <Text style={{fontWeight:'bold'}}>{mahallah}</Text> 
                    <Text>{date}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                style={imageStyle}
                source={{uri:poster}}/>
            </CardSection>

            <CardSection>
                <View style={detailContentStyle}>
                    <Text style={{fontWeight:'bold'}}>{name}</Text>
                    <Text>{contact}</Text>
                    <Text>{detail}</Text>
                </View>
            </CardSection>
        </Card>

    );
    }

const styles={
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        fontSize: 25,
        fontWeight: 'bold'
    },
    thumbnailStyle:{
        height: 50,
        width: 50        
    },
    thumbnailContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#E6E6FA',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle:{
        height: 500,
        flex:1,
        width: null
    },
    detailContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        fontSize: 15,
        marginLeft: 15
    }
};