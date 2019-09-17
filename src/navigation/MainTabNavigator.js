import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import IndexScreen from '../pages/index'

const navigationOptions = {
	headerTransparent: false,
	// headerBackground: <Image style={{backgroundColor:Colors.headerBg,flex:1,width:'100%'}} resizeMode='stretch' source={require('../assets/images/nav_bg.png')} />,
	headerStyle: {
		// backgroundColor: Colors.headerBg,
		borderBottomWidth: 0
	},
	headerTitleStyle: {
		fontSize: 18,
		flex: 1,
		textAlign: 'center'
	},
	headerTintColor: '#fff',
}

const IndexStack = createStackNavigator({
  Home: {
		screen: IndexScreen,
    navigationOptions: navigationOptions
  }
})
IndexStack.navigationOptions = {
  tabBarLabel: '首页',
  // tabBarIcon: ({focused}) => (
  //     <Image source={focused ? require('../assets/images/tab-a-a.png') : require('../assets/images/tab-a.png')}
  //            style={{width: 26, height: 26}}/>
  // ),
}

export default createBottomTabNavigator({
  IndexStack
}, {
  tabBarOptions: {
    activeTintColor: '#59c3f7',
    inactiveTintColor: '#b6b6c0',
  }
})