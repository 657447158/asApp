import React from 'react';
import { Image, Platform, StatusBar } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../pages/home'
import CollectionScreen from '../pages/collection'
import InformationScreen from '../pages/information'
import PersonalScreen from '../pages/personal'

const StatusBarHeight = 44 + parseInt(Platform.OS === 'ios' ? 0 : StatusBar.currentHeight)
const navigationOptions = {
	headerTransparent: false,
	// headerBackground: <Image style={{backgroundColor:Colors.headerBg,flex:1,width:'100%'}} resizeMode='stretch' source={require('../assets/images/nav_bg.png')} />,
	headerStyle: {
		height: StatusBarHeight,
		backgroundColor: 'red',
		borderBottomWidth: 0,
		elevation: 0,
		shadowOpacity: 0
	},
	headerTitleStyle: {
		fontSize: 18,
		flex: 1,
		textAlign: 'center'
	},
	headerTintColor: 'red',
}

// 首页tab
const HomeStack = createStackNavigator({
  Home: {
		screen: HomeScreen,
    navigationOptions
  }
})
HomeStack.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon: ({focused}) => (
			<Image
				source={focused ? require('../assets/images/tab-a-a.png') : require('../assets/images/tab-a.png')}
        style={{width: 21, height: 20}}
			/>
  )
}
// 收藏tab
const CollectionStack = createStackNavigator({
	Persnal: {
		screen: CollectionScreen,
		navigationOptions
	}
})
CollectionStack.navigationOptions = {
	tabBarLabel: '收藏',
	tabBarIcon: ({focused}) => (
		<Image
			source={focused ? require('../assets/images/tab-b-a.png') : require('../assets/images/tab-b.png')}
			style={{width: 20, height: 20}}
		/>
	)
}
// 消息tab
const InformationStack = createStackNavigator({
	Persnal: {
		screen: InformationScreen,
		navigationOptions
	}
})
InformationStack.navigationOptions = {
	tabBarLabel: '消息',
	tabBarIcon: ({focused}) => (
		<Image
			source={focused ? require('../assets/images/tab-c-a.png') : require('../assets/images/tab-c.png')}
			style={{width: 20, height: 20}}
		/>
	)
}
// 个人中心tab
const PersonalStack = createStackNavigator({
	Persnal: {
		screen: PersonalScreen,
		navigationOptions
	}
})
PersonalStack.navigationOptions = {
	tabBarLabel: '个人中心',
	tabBarIcon: ({focused}) => (
		<Image
			source={focused ? require('../assets/images/tab-d-a.png') : require('../assets/images/tab-d.png')}
			style={{width: 18, height: 20}}
		/>
	)
}

export default createBottomTabNavigator({
	HomeStack,
	CollectionStack,
	InformationStack,
	PersonalStack,
}, {
  tabBarOptions: {
    activeTintColor: '#59c3f7',
    inactiveTintColor: '#b6b6c0',
  }
})