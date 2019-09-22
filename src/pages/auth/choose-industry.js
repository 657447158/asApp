import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import layout from '../../utils/layout';
import { scaleSize, px2dp } from '../../utils/ScreenUtils';

export default class ChooseIndustry extends Component {
    render () {
        return (
            <View style={[layout.container, styles.container]}>
                <Text style={styles.item}>食品安全行业</Text>
                <Text style={styles.item}>特种设备</Text>
                <Text style={styles.item}>电子航天行业</Text>
                <Text style={styles.item}>食品安全行业</Text>
                <Text style={styles.item}>特种设备</Text>
                <Text style={styles.item}>电子航天行业</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'red'
    },
    item: {
        marginRight: scaleSize(48),
        marginBottom: scaleSize(45),
        paddingLeft: scaleSize(22),
        paddingRight: scaleSize(22),
        height: scaleSize(60),
        fontSize: px2dp(24),
        lineHeight: scaleSize(60),
        backgroundColor: '#f7f7f7',
        borderRadius: scaleSize(12)
    }
})