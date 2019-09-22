/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, StatusBar } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator'

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <RootNavigator />
    </View>
  )
};

export default App;
