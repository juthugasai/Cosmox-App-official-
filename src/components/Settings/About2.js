import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { IconButton, Title } from 'react-native-paper';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Go to Details"
          style={styles.button}
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.header}>
          <Text style={styles.text}>Settings</Text>
        </View>

        <TouchableOpacity style={styles.ver}>
        <Text style={styles.T}>App-Version: 1.0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.soft}
        onPress={() => {
                this.props.navigation.navigate('Build');
              }}>
        <Text style={styles.T}>Software:C-OS</Text>
        </TouchableOpacity>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000235',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
    margin: 60,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  text1: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#939496',
    marginTop: 10,
    //margin:60,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  text2: {
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    //margin:60,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  button: {
    //flex: 0.25,
    //marginTop: 50,
    //marginLeft: 50,
    //marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    //height:70,
    borderRadius: 30,
    backgroundColor: 'purple',
  },

  ver:{
    //flex:1,
    marginTop: 70,
    marginLeft: 5,
    backgroundColor:'#fff',
    borderRadius:10,
    height:70,
    width:170,
    justifyContent:'center',
    //alignContent:'center',
    alignItems:'center'
  },

   soft:{
    //flex:1,
    marginTop: -70,
    marginLeft: 185,
    backgroundColor:'#fff',
    borderRadius:10,
    height:70,
    width:170,
    justifyContent:'center',
    //alignContent:'center',
    alignItems:'center'
  },
  T:{
    //flex: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#939496',

    //alignItems: 'center',
    //justifyContent: 'center',
  }
});
