/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator'


const App = () => {
  return (
    <RootNavigator />
  )
};

const styles = StyleSheet.create({

});

export default App;
