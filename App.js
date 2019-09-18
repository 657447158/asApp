/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator'
import Resolution from "./src/utils/resolution"

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <Resolution.FixWidthView>
        <RootNavigator />
      </Resolution.FixWidthView>
    </View>
  )
};

export default App;
