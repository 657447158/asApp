import React from 'react';
import { Text, Platform, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { scaleSize, px2dp } from '../utils/ScreenUtils';
import MainTabNavigator from './MainTabNavigator';

// 个人中心页面
import PersonalInformation from '../pages/personal/personal-information';
import PersonalDownload from '../pages/personal/personal-download';
import PersonalTrack from '../pages/personal/personal-track';
import PersonalCompany from '../pages/personal/personal-company';
import PersonalRecharge from '../pages/personal/personal-recharge';
import PersonalInvoice from '../pages/personal/personal-invoice';

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
  },
  PersonalTrack: {
    screen: PersonalTrack,
    navigationOptions: {
      title: '标准跟踪'
    }
  },
  PersonalCompany: {
    screen: PersonalCompany,
    navigationOptions: {
      title: '企业用户列表'
    }
  },
  PersonalRecharge: {
    screen: PersonalRecharge,
    navigationOptions: ({navigation}) => {
      return {
        title: '充值记录',
        headerRight: (
          <Text
            style={{
              marginRight: scaleSize(40),
              padding: 6,
              color: '#2878ff',
              fontSize: px2dp(28)
            }}
            onPress={() => {navigation.navigate('PersonalInformation')}}
          >开票</Text>
        )
      }
    }
  },
  PersonalInvoice: {
    screen: PersonalInvoice,
    navigationOptions: {
      title: '开票记录'
    }
  }
}, {
  defaultNavigationOptions: navigationOptions
}))