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
	headerStyle: {
		height: StatusBarHeight,
		backgroundColor: '#fff',
		borderBottomWidth: 0,
		elevation: 0,
		shadowOpacity: 0
	},
	headerTitleStyle: {
		fontSize: 32,
		flex: 1,
		textAlign: 'center'
	},
	headerTintColor: '#000',
}

// 首页tab
const HomeStack = createStackNavigator({
  Home: {
	screen: HomeScreen,
    navigationOptions: {
		header: null
	}
  }
})
HomeStack.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon: ({focused}) => (
	<Image
		source={focused ? require('../assets/images/tab-a-a.png') : require('../assets/images/tab-a.png')}
		style={{width: 38, height: 40}}
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
			style={{width: 40, height: 39}}
		/>
	)
}
// 消息tab
const InformationStack = createStackNavigator({
	Persnal: {
		screen: InformationScreen,
		navigationOptions: {
			...navigationOptions,
			title: '消息'
		}
	}
})
InformationStack.navigationOptions = {
	tabBarLabel: '消息',
	tabBarIcon: ({focused}) => (
		<Image
			source={focused ? require('../assets/images/tab-c-a.png') : require('../assets/images/tab-c.png')}
			style={{width: 40, height: 40}}
		/>
	)
}
// 个人中心tab
const PersonalStack = createStackNavigator({
	Persnal: {
		screen: PersonalScreen,
		navigationOptions: {
			...navigationOptions,
			title: '个人中心'
		}
	}
})
PersonalStack.navigationOptions = {
	tabBarLabel: '我的',
	tabBarIcon: ({focused}) => (
		<Image
			source={focused ? require('../assets/images/tab-d-a.png') : require('../assets/images/tab-d.png')}
			style={{width: 36, height: 40}}
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
	style: {
		height: 98
	},
	labelStyle: {
		marginTop: -20,
		fontSize: 20
	},
    activeTintColor: '#59c3f7',
    inactiveTintColor: '#b6b6c0',
  }
})