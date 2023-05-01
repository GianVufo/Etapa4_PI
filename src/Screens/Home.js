import React, { Component } from "react";
import NetCalculator from "../Components/NetCalculator";

import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={style.mainView}>
        <View>
          <ScrollView>
            <View>
              <NetCalculator />
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#96c3a6',
  }
})

export default Home;
