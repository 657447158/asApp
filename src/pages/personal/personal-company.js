import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { scaleSize, px2dp } from '../../utils/ScreenUtils';

export default class CompanyCustomList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            datasList: [{key: 'a'}]
        }
    }

    getItem = () => {
        return (
            <View style={styles.itemBox}>
                <Image style={styles.avator} source={require('../../assets/images/personal/default-avator.png')} />
                <View style={styles.rightCt}>
                    <Text style={styles.label}>华晨宇</Text>
                    <Text style={styles.phone}>18784665552</Text>
                </View>
            </View>
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
    avator: {
        width: scaleSize(80),
        height: scaleSize(80)
    },
    rightCt: {
        flex: 1,
        marginLeft: scaleSize(4),
        paddingLeft: scaleSize(18),
        paddingTop: scaleSize(40),
        paddingBottom: scaleSize(40),
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1
    },
    label: {
        fontSize: px2dp(32),
        color: '#000',
        fontWeight: 'bold'
    },
    phone: {
        fontSize: px2dp(24),
        color: '#8d8d92'
    }
})