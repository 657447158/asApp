import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { scaleSize, px2dp } from '../../utils/ScreenUtils';

export default class PersonalInformation extends Component {
    render () {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.list}>
                    <View style={styles.item}>
                        <Text style={styles.label}>头像</Text>
                        <Image style={styles.avator} source={require('../../assets/images/personal/default-avator.png')} />
                        <Image style={styles.row} source={require('../../assets/images/personal/icon-next-b.png')} />
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.label}>姓名</Text>
                        <Text style={styles.value}>187****5555</Text>
                        <Image style={styles.row} source={require('../../assets/images/personal/icon-next-b.png')} />
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.label}>电话号码</Text>
                        <Text style={styles.value}>华晨宇家的狗子</Text>
                        <Image style={styles.row} source={require('../../assets/images/personal/icon-next-b.png')} />
                    </View>
                    <View style={styles.item1}>
                        <View style={styles.itemTop}>
                            <Text style={styles.label}>我的行业</Text>
                            <Text style={styles.modify}>修改</Text>
                        </View>
                        <View style={styles.tagsBox}>
                            <Text style={styles.tag}>电子航天行业</Text>
                            <Text style={styles.tag}>食品安全行业</Text>
                            <Text style={styles.tag}>特种</Text>
                            <Text style={styles.tag}>工业生产行业</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: scaleSize(12),
        backgroundColor: '#f7f5f5'
    },
    list: {
        paddingLeft: scaleSize(40),
        paddingRight: scaleSize(40),
        backgroundColor: '#fff'
    },  
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: scaleSize(124),
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1
    },
    label: {
        flex: 1,
        fontSize: px2dp(28),
        fontWeight: 'bold',
        color: '#333'
    },
    avator: {
        width: scaleSize(80),
        height: scaleSize(80)
    },
    row: {
        marginLeft: scaleSize(12),
        width: scaleSize(9),
        height: scaleSize(15),
    },
    value: {
        fontSize: px2dp(24),
        color: '#333'
    },
    modify: {
        fontSize: px2dp(28),
        fontWeight: 'bold',
        color: '#2878ff'
    },
    item1: {
        paddingTop: scaleSize(50),
        paddingBottom: scaleSize(50),
        borderBottomWidth: 0
    },
    itemTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tagsBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: scaleSize(30),
        marginRight: -scaleSize(50)
    },
    tag: {
        marginRight: scaleSize(50),
        marginBottom: scaleSize(30),
        paddingLeft: scaleSize(24),
        paddingRight: scaleSize(24),
        textAlign: 'center',
        height: scaleSize(60),
        color: '#646464',
        lineHeight: scaleSize(56),
        backgroundColor: '#f7f7f7',
        borderRadius: scaleSize(12)
    }
})