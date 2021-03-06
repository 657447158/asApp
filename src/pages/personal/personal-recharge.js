import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { scaleSize, px2dp } from '../../utils/ScreenUtils';

export default class RechargeList extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.number}>订单编号：DD859512122</Text>
                    <View style={styles.bottom}>
                        <View style={styles.bottomLeft}>
                            <Text style={styles.label}>会员充值</Text>
                            <Text style={styles.time}>2019/7/17 15:35:25</Text>
                        </View>
                        <Text style={styles.amount}>￥500.00</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: scaleSize(12),
        paddingLeft: scaleSize(20),
        paddingRight: scaleSize(20),
        backgroundColor: '#f2f2f2'
    },
    item: {
        paddingTop: scaleSize(40),
        paddingLeft: scaleSize(20),
        paddingRight: scaleSize(20),
        paddingBottom: scaleSize(36),
        backgroundColor: '#fff',
        borderRadius: scaleSize(15)
    },
    number: {
        paddingBottom: scaleSize(40),
        fontSize: px2dp(24),
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2'
    },
    bottom: {
        paddingTop: scaleSize(40),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomLeft: {
        flex: 1,
    },
    label: {
        fontSize: px2dp(28),
        fontWeight: 'bold',
        color: '#333'
    },
    time: {
        marginTop: scaleSize(6),
        fontSize: px2dp(22),
        color: '#9b9b9b'
    },
    amount: {
        fontSize: px2dp(36),
        color: '#ff3c28',
        fontWeight: 'bold'
    }
})