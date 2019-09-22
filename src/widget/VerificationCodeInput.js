import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import layout from '../utils/layout';

export default class PhoneInput extends Component {
    constructor (props) {
        super(props)
        this.state = {
            flag: false,
            restTime: 60,
            text: '发送验证码'
        }
    }
    // 发送验证码
    sendMsg = () => {
        if (this.state.flag) return
        this.setState({
            flag: true
        })
        this.countdown()
    }
    // 倒计时
    countdown = () => {
        let time = this.state.restTime
        const timeInterval = setInterval(() => {
            time--
            if (time < 0) {
                clearInterval(timeInterval)
                this.setState({
                    flag: false,
                    borFlag: false,
                    text: '发送验证码',
                    code: ''
                })
                return
            }
            this.setState({
                text: time + 'S'
            })
        }, 1000);
    }
    onChangeText = (text) => {
        this.setState({
            code: text
        })
    }
    onFocus = (event) => {
        event.persist()
        this.setState({
            borFlag: true
        })
    }
    onBlur = (event) => {
        event.persist()
        this.setState({
            borFlag: false
        })
    }
    render () {
        return (
            <View style={layout.inputItem}>
                <Text style={layout.inputLabel}>验证码</Text>
                <View style={[layout.inputBox, this.state.borFlag && layout.borderBottomBlue]}>
                    <TextInput
                        style={layout.input}
                        placeholder="请输入验证码"
                        placeholderTextColor="#bfbfbf"
                        keyboardType="numeric"
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        value={this.state.code}
                        onChangeText={this.onChangeText}
                    />
                    <TouchableOpacity
                        activeOpacity={.8}
                        onPress={this.sendMsg}
                    >
                        <Text style={layout.sendText}>{this.state.text}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}