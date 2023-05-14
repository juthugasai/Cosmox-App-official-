import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import DarkMode from './DarkMode';
import WallPaper from './wallpaper';
import { IconButton, Title } from 'react-native-paper';


export default class HomeNavigator extends Component {

    render(){
        return(
            <View style={styles.container}>
              <IconButton
                  icon="keyboard-backspace"
                  size={30}
                  style={styles.navButton}
                  color="#5b3a70"
                  onPress={() => this.props.navigation.goBack()}
                />
                <View style={styles.header}>
                    <Text style={styles.text}>More Settings</Text>
                </View>
                
                <DarkMode/>
                <WallPaper/>
            </View>
        )
    }





}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#ffg'
    },
    ver1: {
        //flex:1,
        marginTop: 30,
        marginLeft: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 70,
        width: 350,
        justifyContent: 'center',
        //alignContent:'center',
        alignItems: 'center',
      },

      Text: {
        //flex: 0.5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#939496',
    
        //alignItems: 'center',
        //justifyContent: 'center',
      },

      header: {
        alignItems: 'center',
      },
    
      text: {
        //flex: 0.5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#939496',
        margin: 40,
        //alignItems: 'center',
        //justifyContent: 'center',
      },
      navButton: {
        margin: 20,
        marginBottom:-78
      },

})