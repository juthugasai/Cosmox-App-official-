import React, { useContext, useState,Component } from 'react';
import { View, TouchableOpacity,Switch } from 'react-native';
import { List } from 'react-native-paper';
import firebase from "firebase";

export default class DarkMode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOn: false,

          
        };
      }

      toggleHandle() {
        this.setState({ isOn: !this.state.isOn })
      }

      toggleSwitch() {
        const previous_state = this.state.isEnabled;
        const theme = !this.state.isEnabled ? "dark" : "light";
        var updates = {};
        updates[
          "/users/" + firebase.auth().currentUser.uid + "/current_theme"
        ] = theme;
        firebase
          .database()
          .ref()
          .update(updates);
        this.setState({ isEnabled: !previous_state, light_theme: previous_state });
      }
    render(){
    return (
        
        <View style={{ flex: 1 }}>
            <List.Item
                title="Dark Mode"
                left={() => <List.Icon icon="brightness-4" />}
                right={() => <Switch  />}
            />
        </View>
    )}
}