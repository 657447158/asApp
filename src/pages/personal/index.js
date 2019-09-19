import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import { scaleSize, px2dp } from '../../utils/ScreenUtils';

export default class Personal extends Component {
    render () {
        return (
            <View>
                <ImageBackground style={styles.header} source={require('../../assets/images/personal-bg.jpg')}>
                    <Image style={styles.avator} source={require('../../assets/images/default-avator.png')} />
                    <View>
                        <Text>大魔王华晨宇</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: scaleSize(168),
        paddingLeft: scaleSize(40),
        paddingRight: scaleSize(40),
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: scaleSize(470),
        backgroundColor: 'red'
    },
    avator: {
        width: scaleSize(120),
        height: scaleSize(120)
    }
})