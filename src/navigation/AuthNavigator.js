import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { scaleSize, px2dp } from '../utils/ScreenUtils';
import { TouchableOpacity, Image, Platform, StatusBar } from 'react-native';

// 注册页面
import Login from '../pages/auth/login';
import CompanyRegister from '../pages/auth/company-register';
import PersonalRegister from '../pages/auth/personal-register';
import ChooseIndustry from '../pages/auth/choose-industry';

const StatusBarHeight = 44 + parseInt(Platform.OS === 'ios' ? 0 : StatusBar.currentHeight)
const DefaultOptions = {
    headerTransparent: false,
    headerStyle: {
        paddingTop: scaleSize(40),
        height: StatusBarHeight,
        backgroundColor: '#fff',
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0
    }
}
export default AuthNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: navigator => {
            return {
                headerLeft: (
                    <TouchableOpacity
                        activeOpacity={.8}
                        style={{marginTop: scaleSize(40), padding: scaleSize(40)}}
                        onPress={() => {navigator.navigation.navigate('HomeStack')}}
                    >
                        <Image style={{width: scaleSize(31), height: scaleSize(28)}} source={require('../assets/images/icon-back.png')} />
                    </TouchableOpacity>
                )
            }
        }
    },
    CompanyRegister,
    PersonalRegister,
    ChooseIndustry
}, {
    defaultNavigationOptions: DefaultOptions
})