import React, { PureComponent } from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createStackNavigator({
	MainTab: {
		screen:MainTabNavigator,
		navigationOptions: {
			header: null
		}
	}
}, {
  defaultNavigationOptions: {
    headerStyle: {
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      fontSize: 18,
      flex: 1,
      textAlign:'center'
    },
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerTransparent:  false,
    // headerBackground: <Image style={{backgroundColor:Colors.headerBg,flex:1,width:'100%'}} resizeMode='stretch' source={require('../assets/images/nav_bg.png')} />,
  }
}))