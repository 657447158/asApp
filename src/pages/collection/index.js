import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import { scaleSize, px2dp } from '../../utils/ScreenUtils';
import { Input } from 'teaset';

const StatusBarHeight = StatusBar.currentHeight

export default class Collection extends Component {
    constructor (props) {
        super(props)
        this.state = {
            placeholder: 'GB'
        }
    }
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.serachBox}>
                        <Image style={styles.searchIcon} source={require('../../assets/images/search-icon.png')} />
                        <Input
                            style={styles.searchInput}
                            placeholder={this.state.placeholder}
                            placeholderTextColor='#bfbfbf'
                        />
                    </View>
                    <Text style={styles.cancleTxt}>取消</Text>
                </View>
                {/* <View style={styles.listWrap}>

                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingTop: StatusBarHeight,
        paddingLeft: scaleSize(40),
        paddingRight: scaleSize(40),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: scaleSize(84) + StatusBarHeight,
        backgroundColor: '#fff'
    },
    serachBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: scaleSize(32),
        paddingRight: scaleSize(32),
        width: scaleSize(590),
        height: scaleSize(56),
        backgroundColor: '#f7f7f7',
        borderRadius: scaleSize(28),
    },
    searchIcon: {
        width: scaleSize(22),
        height: scaleSize(22)
    },
    searchInput: {
        flex: 1,
        height: scaleSize(56),
        fontSize: px2dp(22),
        borderWidth: 0,
        backgroundColor: 'transparent'
    },
    cancleTxt: {

    },
    listWrap: {
    }
})