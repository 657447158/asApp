import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { scaleSize, px2dp } from '../../utils/ScreenUtils';
import NormalInput from '../../widget/NormalInput';
import PhoneInput from '../../widget/PhoneInput';
import VerificationCodeInput from '../../widget/VerificationCodeInput';
import Agreement from '../../widget/Agreement';

export default class CompanyRegister extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.text}>个人用户注册</Text>
                {/* 用户名 */}
                <NormalInput
                    label='用户名'
                    placeholder='请输入用户名'
                />
                {/* 手机号 */}
                <PhoneInput />
                {/* 验证码 */}
                <VerificationCodeInput />
                <Agreement />
                <TouchableOpacity
                    activeOpacity={.8}
                    style={styles.nextBtn}
                >
                    <Text style={styles.nextText}>下一步</Text>
                </TouchableOpacity>
                <Text
                    style={styles.linkText}
                    onPress={() => this.props.navigation.navigate('Login')}
                >已有账号立即登录</Text>
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
    nextBtn: {
        marginTop: scaleSize(80),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: scaleSize(90),
        backgroundColor: '#d8d8d8',
        borderRadius: scaleSize(45)
    },
    nextText: {
        fontSize: px2dp(34),
        color: '#fff',
        fontWeight: 'bold'
    },
    linkText: {
        marginTop: scaleSize(60),
        textAlign: 'center',
        fontSize: px2dp(28),
        color: '#000',
        fontWeight: 'bold'
    }
})