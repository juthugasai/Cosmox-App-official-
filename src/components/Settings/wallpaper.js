import React, { useContext, useState,Component } from 'react';
import { View, TouchableOpacity,Switch,  Image} from 'react-native';
import { List } from 'react-native-paper';
import firebase from "firebase";

export default class DarkMode extends Component {

render(){

       return(
        <View style={{ flex: 1,marginTop:-570 }}>
            <List.Item
                title="Wallpaper"
                left={() => <List.Icon icon="brightness-4" />}
                right={() => <Switch  />}
            />
        



        </View>
    )
}





}