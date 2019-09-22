import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { scaleSize, px2dp } from '../../utils/ScreenUtils';
import PhoneInput from '../../widget/PhoneInput';
import VerificationCodeInput from '../../widget/VerificationCodeInput';

export default class Login extends Component {
    constructor (props) {
        super(props)
    }
    goTo (path, params) {
        this.props.navigation.navigate(path)
    }
    render () {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.text}>欢迎登录</Text>
                {/* 手机号 */}
                <PhoneInput />
                {/* 验证码 */}
                <VerificationCodeInput />
                <TouchableOpacity
                    activeOpacity={.8}
                    style={styles.loginBtn}
                >
                    <Text style={styles.loginText}>登录</Text>
                </TouchableOpacity>
                <View style={styles.bottom}>
                    <Text
                        style={styles.linkText}
                        onPress={this.goTo.bind(this, 'CompanyRegister')}
                    >注册企业用户</Text>
                    <Text
                        style={styles.linkText}
                        onPress={this.goTo.bind(this, 'PersonalRegister')}
                    >注册个人用户</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: scaleSize(60)
    },
    text: {
        fontSize: px2dp(60),
        fontWeight: 'bold',
        color: '#333'
    },
    loginBtn: {
        marginTop: scaleSize(80),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: scaleSize(90),
        backgroundColor: '#d8d8d8',
        borderRadius: scaleSize(45)
    },
    loginText: {
        fontSize: px2dp(34),
        color: '#fff',
        fontWeight: 'bold'
    },
    bottom: {
        marginTop: scaleSize(60),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    linkText: {
        fontSize: px2dp(28),
        fontWeight: 'bold',
        color: '#000'
    }
})