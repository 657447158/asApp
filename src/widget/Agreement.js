import React, { Component } from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { scaleSize, px2dp } from '../utils/ScreenUtils';

export default class Agreement extends Component {
    constructor (props) {
        super(props)
        this.state = {
            flag: false
        }
    }
    selectItem = () => {
        const { flag } = this.state
        this.setState({
            flag: !flag
        })
    }
    render () {
        const { flag } = this.state
        return (
            <TouchableOpacity
                activeOpacity={.8}
                style={styles.itemBox}
                onPress={this.selectItem}
            >
                {
                    flag
                    ? <Image style={styles.icon} source={require('../assets/images/icon-hook-a.png')} />
                    : <Image style={styles.icon} source={require('../assets/images/icon-hook.png')} />
                }
                <Text style={styles.label}>我已阅读并同意</Text>
                <Text style={styles.text}>《用户服务协议》</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    itemBox: {
        marginTop: scaleSize(40),
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginRight: scaleSize(12),
        width: scaleSize(36),
        height: scaleSize(36)
    },
    label: {
        fontSize: px2dp(24),
        color: '#bfbfbf'
    },
    text: {
        fontSize: px2dp(24),
        color: '#000'
    }
})