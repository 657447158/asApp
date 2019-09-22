import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import layout from '../utils/layout';

export default class NormalInput extends Component {
    constructor (props) {
        super(props)
        this.state = {
            showClear: false,
            text: '',
            borFlag: false
        }
    }
    // 输入框onChange事件
    onChangeText = (text) => {
        if (text) {
            this.setState({
                showClear: true,
                text: text
            })
        } else {
            this.setState({
                showClear: false,
                text: ''
            })
        }
    }
    // 删除当前输入框文本
    clearAll = () => {
        this.setState({
            showClear: false,
            text: ''
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
                <Text style={layout.inputLabel}>{this.props.label}</Text>
                <View style={[layout.inputBox, this.state.borFlag && layout.borderBottomBlue]}>
                    <TextInput
                        style={layout.input}
                        placeholder={this.props.placeholder}
                        placeholderTextColor="#bfbfbf"
                        value={this.state.text}
                        onChangeText={this.onChangeText}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    />
                    {
                        this.state.showClear
                        ?   <TouchableOpacity
                                activeOpacity={.8}
                                style={layout.clearBox}
                                onPress={this.clearAll}
                            >
                                <Image style={layout.clear} source={require('../assets/images/icon-close.png')} />
                            </TouchableOpacity>
                        : null
                    }
                </View>
            </View>
        )
    }
}