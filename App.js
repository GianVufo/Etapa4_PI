import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Notification } from "./src/Components/NotificationConfig";

import Home from './src/Screens/Home';
import IpScreen from "./src/Screens/IpScreen";
import CIDRScreen from "./src/Screens/CIDRScreen";
import SubCalcScreen from "./src/Screens/SubCalcScreen";

import { StyleSheet } from 'react-native';

const notificador = Notification;
const Stack = createStackNavigator();

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    notificador.configure();
    notificador.createChannel();
    notificador.scheduleNotificationIp();
    notificador.scheduleNotificationCIDR();
    notificador.scheduleNotificationSubCalc();
  }

  render() {
    return (

      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen name="Home">
            {
              ({ navigation }) => {
                notificador.setNavigation(navigation)
                return (
                  <Home />
                )
              }
            }
          </Stack.Screen>

          <Stack.Screen name="O que é endereço Ip ?" component={IpScreen} />

          <Stack.Screen name="O que é CIDR ?" component={CIDRScreen} />

          <Stack.Screen name="O que é uma sub-rede ?" component={SubCalcScreen} />

        </Stack.Navigator>

      </NavigationContainer>

    )
  }
}

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#96c3a6',
  }
})
export default App;