import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { Button, Input, Image, withTheme } from 'react-native-elements';


export default class App extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} >
        <View style={styles.slide1}>
        <Image
        source={require('../../assets/logo.jpg')}
        style={{ width: 250, height: 100 }}
      />
          <Text style={styles.text}>Welcome to cosmox app app.Here you can explore the wonders of the solar system.We welcome you with open arms.Enjoy our app.</Text>
          <Text style={styles.text}>Swipe through the pages and you will see continue button o go on the main app.Go a head</Text>
        </View>
        <View style={styles.slide2}>
        <Image
                  source={require('../../assets/A-2/iss_icon.png')}
                  style={{width: 250, height: 250}}
                />
          <Text style={styles.text}>ISS:International space station</Text>
          <Text style={styles.text}>This is the International space station.The International Space Station is the largest modular space station in low Earth orbit. The project involves five space agencies: the United States' NASA, Russia's Roscosmos, Japan's JAXA, Europe's ESA, and Canada's CSA</Text>
          <Text style={styles.text}>There may be bugs in this screen refered to this build.But dont worry we will fix it in the future build or replace the screen withmanother concept.</Text>


        </View>
        <View style={styles.slide3}>
        <Image
                  source={require('../../assets/A-2/meteor_icon.png')}
                  style={{}}
                />
        
          <Text style={styles.text}>Meteor</Text>
        </View>
        <View style={styles.slide4}>
        
        
          <Text style={styles.text}>This is all about this app. We hope you enjoy this app.</Text>
          <Text style={styles.text}>I you agree to our terms and condition,Click on cotinue button</Text>
          
          <TouchableOpacity
          style={styles.soft}
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}>
          <Text style={styles.T}>continue</Text>
        </TouchableOpacity>

        </View>
        
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000235'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#393a7c'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0bc96'
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000235'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  soft: {
    //flex:1,
    marginTop: 100,
    marginLeft: 5,
    backgroundColor: '#322BB3',
    borderRadius: 10,
    height: 70,
    width: 350,
    justifyContent: 'center',
    //alignContent:'center',
    alignItems: 'center',
  },
  T: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',

    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
