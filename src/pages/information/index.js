import React, { Component } from 'react'
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import { scaleSize, px2dp } from '../../utils/ScreenUtils';

export default class Information extends Component {
    constructor (props) {
        super(props)
        this.state = {
            datasList: [{key: 'a'}]
        }
    }
    getItem = () => {
        return (
            <View style={styles.itemBox}>
                <View style={styles.avatorBox}>
                    <Image style={styles.avator} source={require('../../assets/images/information/icon-sy.png')} />
                </View>
                <View style={styles.rightCt}>
                    <Text style={styles.label}>系统消息</Text>
                    <Text style={styles.time}>星期二 12:47</Text>
                </View>
            </View>
            // <View style={styles.itemBox}>
            //     <View style={[styles.avatorBox, styles.avatorBox1]}>
            //         <Image style={styles.avator1} source={require('../../assets/images/information/icon-zz.png')} />
            //     </View>
            //     <View style={styles.rightCt}>
            //         <Text style={styles.label}>标准跟踪消息</Text>
            //         <Text style={styles.time}>2019/07/30 15:58</Text>
            //     </View>
            // </View>
        )
    }

    render () {
        return (
            <FlatList
                style={{flex: 1}}
                data={this.state.datasList}
                renderItem={this.getItem}
            />
        )
    }
}

const styles = StyleSheet.create({
    itemBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: scaleSize(40),
        paddingRight: scaleSize(40)
    },
    avatorBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: scaleSize(60),
        height: scaleSize(60),
        borderRadius: scaleSize(30),
        backgroundColor: '#4c87ff'
    },
    avatorBox1: {
        backgroundColor: '#ff7065'
    },
    avator: {
        width: scaleSize(38),
        height: scaleSize(37)
    },
    avator1: {
        width: scaleSize(30),
        height: scaleSize(36)
    },
    rightCt: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: scaleSize(24),
        paddingTop: scaleSize(40),
        paddingBottom: scaleSize(40),
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1
    },
    label: {
        fontSize: px2dp(28),
        color: '#333',
        fontWeight: 'bold'
    },
    time: {
        fontSize: px2dp(22),
        color: '#9b9b9b'
    }
})