import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { px2dp } from '../utils/ScreenUtils';
import MainTabNavigator from './MainTabNavigator';

import PersonalInformation from '../pages/personal/personal-information';
import PersonalDownload from '../pages/personal/personal-download';

const StatusBarHeight = 44 + parseInt(Platform.OS === 'ios' ? 0 : StatusBar.currentHeight)
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;
const navigationOptions = {
	headerTransparent: false,
	headerStyle: {
    paddingTop: 20,
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
export default createAppContainer(createStackNavigator({
	MainTab: {
		screen: MainTabNavigator,
		navigationOptions: {
			header: null
		}
  },
  PersonalInformation: {
    screen: PersonalInformation,
    navigationOptions: {
      title: '个人信息'
    }
  },
  PersonalDownload: {
    screen: PersonalDownload,
    navigationOptions: {
      title: '我的下载'
    }
  }
}, {
  defaultNavigationOptions: {
    ...navigationOptions
  }
}))