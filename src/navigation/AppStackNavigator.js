import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Navigation from '../navigation/HomeNavigation';
import Meteor from '../screens/Meteor';
import Iss from '../screens/Iss';
import PlanetScreen from '../screens/PlanetScreen';
import PlanetDetails from '../screens/PlanetDetails';
import Settings from '../screens/Setting';
import About from '../components/Settings/About2';
import Build from '../components/Settings/build';
import Appinfo from '../components/Settings/AppInfo';
import Info from '../components/Settings/info';
import More from '../components/Settings/More';
import Version from '../components/Settings/version';
import QHome from '../components/Quiz/Home';
import Quiz from '../components/Quiz/Quiz';
import QResult from '../components/Quiz/Result';
import onboarding from '../navigation/onBoarding';



import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2c6bed' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
};

export default class Navigate extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Navigator"
          screenOptions={{ headerShown: false }}>
                      <Stack.Screen name="boarding" component={onboarding} />

          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={Navigation} />
          <Stack.Screen name="ISS" component={Iss} />
          <Stack.Screen name="Meteor" component={Meteor} />
          <Stack.Screen name="PlanetScreen" component={PlanetScreen} />
          <Stack.Screen name="PlanetDetails" component={PlanetDetails} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Build" component={Build} />
          <Stack.Screen name="Appinfo" component={Appinfo} />
          <Stack.Screen name="More" component={More} />
          <Stack.Screen name="version" component={Version} />
          <Stack.Screen name="Info" component={Info} />
          <Stack.Screen name="QHome" component={QHome} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="QResult" component={QResult} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
