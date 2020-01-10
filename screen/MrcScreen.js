import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, Button, Image, ImageBackground} from 'react-native';
// import { Header } from "./common";


class MrcScreen extends React.Component{
    render(){
        return(

        <ImageBackground source={require('../img/icon2/IIUM.png')} style={{flex:1}}>
          <ScrollView>

            <View>
                 {/* <Header headerText={'Mahallah Representative Committee'}/> */}
            </View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Aminah')}>
              <View style={{backgroundColor: '#800000', marginTop:10, borderRadius:15, flexDirection:'row'}}>
              <Image source={require('../img/aminah.png')} style={styles.pic}/>
                <Text style={styles.buttonText}>
                  Mahallah Aminah
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Bilal')}>
              <View style={{backgroundColor:'#4A86E8', marginVertical:10, borderRadius:15, flexDirection:'row'}}>
                <Image source={require('../img/bilal.jpg')} style={(styles.pic)}/>
                <Text style={styles.buttonText}>
                   Mahallah Bilal
                  </Text>
              </View>
            </TouchableOpacity>

         <TouchableOpacity onPress={() => this.props.navigation.navigate('Ruqayyah')}>
          <View style={{backgroundColor:'#FDCA2E', marginBottom: 10, borderRadius: 15, flexDirection: 'row'}}>
                <Image source={require('../img/ruqayyah.jpg')} style={(styles.pic)}/>              
              <Text style={styles.buttonText}>
                 Mahallah Ruqayyah
                 </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Ali')}>
          <View style={{backgroundColor:'#0D8E22', marginBottom: 10, borderRadius: 15, flexDirection: 'row'}}>
              <Image source={require('../img/ali.jpg')} style={(styles.pic)}/>
              <Text style={styles.buttonText}>
                 Mahallah Ali
              </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Sumayyah')}>
          <View style={{backgroundColor:'#6BCDFD', marginBottom: 10, borderRadius: 15, flexDirection: 'row'}}>
                <Image source={require('../img/msum.jpg')} style={(styles.pic)}/>              
              <Text style={styles.buttonText}>
                 Mahallah Sumayyah
                 </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Salah')}>
          <View style={{backgroundColor:'#FC363B', marginBottom: 10, borderRadius: 15, flexDirection: 'row'}}>
                <Image source={require('../img/salah.png')} style={(styles.pic)}/>              
              <Text style={styles.buttonText}>
                 Mahallah Salahuddin
                 </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Halimah')}>
          <View style={{backgroundColor:'#FF8000', marginBottom: 10, borderRadius: 15, flexDirection: 'row'}}>
                <Image source={require('../img/halimah.jpg')} style={(styles.pic)}/>              
              <Text style={styles.buttonText}>
                 Mahallah Halimah
                 </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Siddiq')}>
          <View style={{backgroundColor:'#699CFC', marginBottom:10, borderRadius: 15, flexDirection: 'row'}}>
                <Image source={require('../img/siddiq.png')} style={(styles.pic)}/>
                <Text style={styles.buttonText}>
                 Mahallah Siddiq
                 </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Hafsa')}>
          <View style={{backgroundColor:'#A730E2', marginBottom:10, borderRadius: 15, flexDirection: 'row'}}>
                <Image source={require('../img/hafsah.jpg')} style={(styles.pic)}/>
                <Text style={styles.buttonText}> 
                Mahallah Hafsah
                </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Asma')}>
          <View style={{backgroundColor:'#8FC7EC', marginBottom:10, borderRadius: 15, flexDirection: 'row'}}>
                <Image source={require('../img/asma.jpg')} style={(styles.pic)}/> 
                <Text style={styles.buttonText}>
                Mahallah Asma
                </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Asiah')}>
          <View style={{backgroundColor:'#4DBD0D', marginBottom:10, borderRadius: 15, flexDirection: 'row'}}>
                <Image source={require('../img/asiah.jpg')} style={(styles.pic)}/> 
                <Text style={styles.buttonText}>
                Mahallah Asiah
                </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Safiyyah')}>
          <View style={{backgroundColor:'#EB2178', marginBottom:10, borderRadius: 15, flexDirection: 'row'}}>
                <Image source={require('../img/saf.jpg')} style={(styles.pic)}/> 
                <Text style={styles.buttonText}>
                Mahallah Safiyyah
                </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Zubair')}>
          <View style={{backgroundColor:'#800000', marginBottom:10, borderRadius: 15, flexDirection: 'row'}}>
                <Image source={require('../img/zubair.jpg')} style={(styles.pic)}/> 
                <Text style={styles.buttonText}>
                Mahallah Zubair
                </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Nusaibah')}>
          <View style={{backgroundColor:'#F9A602', marginBottom:10, borderRadius: 15, flexDirection: 'row'}}>
                <Image source={require('../img/nusai.jpg')} style={(styles.pic)}/> 
                <Text style={styles.buttonText}>
                Mahallah Nusaibah
                </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Faruq')}>
          <View style={{backgroundColor:'#A9A9A9', marginBottom:10, borderRadius: 15, flexDirection: 'row'}}>
                <Image source={require('../img/faruq.jpg')} style={(styles.pic)}/> 
                <Text style={styles.buttonText}>
                Mahallah Faruq
                </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Uthman')}>
          <View style={{backgroundColor:'#006994', marginBottom:10, borderRadius: 15, flexDirection: 'row'}}>
                <Image source={require('../img/uthman.jpg')} style={(styles.pic)}/> 
                <Text style={styles.buttonText}>
                Mahallah Uthman
                </Text>
          </View>
        </TouchableOpacity>



      </ScrollView>       
    </ImageBackground>
     );  }
}

export default MrcScreen;

const styles = StyleSheet.create({
    container: {
      //paddingTop: 10,
      // alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      //justifyContent: 'center',
      alignContent: 'center',
      //paddingBottom: 10,
    },
    buttonText: {
      justifyContent: 'center',
      fontSize: 30,
      padding: 15,
      color: 'white',
    },
    pic:{
      alignSelf:'center',
      width: 50, 
      height: 50, 
      marginLeft: 10
    },
    box:{
      marginBottom: 10,
      borderRadius: 15,
      flexDirection: 'row'
    }
  })