import React from 'react';
import { View, Image, Platform, StatusBar } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../pages/home'
import CollectionScreen from '../pages/collection'
import InformationScreen from '../pages/information'
import PersonalScreen from '../pages/personal'

import { scaleSize, scaleHeight, px2dp } from '../utils/ScreenUtils';

const StatusBarHeight = 44 + parseInt(Platform.OS === 'ios' ? 0 : StatusBar.currentHeight)
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

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
		fontSize: px2dp(32),
		flex: 1,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	headerTitleContainerStyle: {
        left: TITLE_OFFSET,
        right: TITLE_OFFSET,
	},
	headerTintColor: '#000',
}

// 底部导航点击事件 这里来统一判断是否有需要跳转登录页
const stackDefaultOptions = {
	tabBarOnPress: obj => {
		console.log('obj');
		if (obj.navigation.state.routeName === 'PersonalStack') {
			obj.navigation.navigate('Login')
		} else {
			obj.defaultHandler()
		}
		// obj.defaultHandler()
	}
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
	...stackDefaultOptions,
	tabBarLabel: '首页',
	tabBarIcon: ({focused}) => (
		<Image
			source={focused ? require('../assets/images/tab-a-a.png') : require('../assets/images/tab-a.png')}
			style={{width: scaleSize(38), height: scaleHeight(40)}}
		/>
	)
}
// 收藏tab
const CollectionStack = createStackNavigator({
	Persnal: {
		screen: CollectionScreen,
		navigationOptions: {
			header: null
		}
	}
})
CollectionStack.navigationOptions = {
	...stackDefaultOptions,
	tabBarLabel: '收藏',
	tabBarIcon: ({focused}) => (
		<Image
			source={focused ? require('../assets/images/tab-b-a.png') : require('../assets/images/tab-b.png')}
			style={{width: scaleSize(40), height: scaleHeight(39)}}
		/>
	)
}
// 消息tab
const InformationStack = createStackNavigator({
	Persnal: {
		screen: InformationScreen,
		navigationOptions: {
			...navigationOptions,
			title: '消息中心',
			headerRight: (
				<View style={{marginRight: scaleSize(40)}}>
					<Image
						style={{width: scaleSize(35), height: scaleSize(40)}}
						source={require('../assets/images/header-right-c.png')}
					/>
				</View>
			)
		}
	}
})
InformationStack.navigationOptions = {
	...stackDefaultOptions,
	tabBarLabel: '消息',
	tabBarIcon: ({focused}) => (
		<Image
			source={focused ? require('../assets/images/tab-c-a.png') : require('../assets/images/tab-c.png')}
			style={{width: scaleSize(40), height: scaleHeight(40)}}
		/>
	)
}
// 个人中心tab
const PersonalStack = createStackNavigator({
	Persnal: {
		screen: PersonalScreen,
		navigationOptions: ({navigation}) => {
			const backgroundColor =  navigation.getParam('backgroundColor')
			return {
				...navigationOptions,
				headerTransparent: true,
				headerStyle: {
					height: StatusBarHeight,
					backgroundColor: backgroundColor ? backgroundColor : 'transparent',
					borderBottomWidth: 0,
					elevation: 0,
					shadowOpacity: 0
				},
				headerTintColor: '#fff',
				title: '个人中心',
				headerRight: (
					<View style={{marginRight: scaleSize(40)}}>
						<Image
							style={{width: scaleSize(30), height: scaleSize(30)}}
							source={require('../assets/images/header-right-d.png')}
						/>
					</View>
				)
			}
		}
	}
})
PersonalStack.navigationOptions = {
	...stackDefaultOptions,
	tabBarLabel: '我的',
	tabBarIcon: ({focused}) => (
		<Image
			source={focused ? require('../assets/images/tab-d-a.png') : require('../assets/images/tab-d.png')}
			style={{width: scaleSize(36), height: scaleHeight(40)}}
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
			height: scaleHeight(98)
		},
		labelStyle: {
			marginTop: -scaleHeight(20),
			fontSize: px2dp(20)
		},
		activeTintColor: '#59c3f7',
		inactiveTintColor: '#b6b6c0'
	}
})