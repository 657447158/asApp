import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Layout from '../../utils/layout'
import { scaleSize, px2dp } from '../../utils/ScreenUtils';
import { Input } from 'teaset';

export default class Index extends Component {
    constructor (props) {
        super(props)
        this.state = {
            placeholder: '输入相关内容搜索'
        }
    }
    render() {
        return (
            <View style={Layout.container, styles.container}>
                <Image style={styles.title} source={require('../../assets/images/home-tit.png')} />
                {/* 搜索框 */}
                <View style={styles.searchBox}>
                    <Input
                        style={styles.searchInput}
                        placeholder={this.state.placeholder}
                        placeholderTextColor='#bfbfbf'
                    />
                    <Image style={styles.searchIcon} source={require('../../assets/images/search-icon.png')} />
                </View>
                {/* 历史搜索 */}
                <View style={styles.historyTit}>
                    <Text style={styles.text}>历史搜索</Text>
                    <Image style={styles.delIcon} source={require('../../assets/images/icon-del.png')} />
                </View>
                <View style={styles.tagWrap}>
                    <Text style={styles.tag}>GB 11121-2006</Text>
                    <Text style={styles.tag}>汽车汽油</Text>
                    <Text style={styles.tag}>汽车汽油</Text>
                </View>
                {/* 热门搜索 */}
                <View style={styles.historyTit}>
                    <Text style={styles.text}>热门搜索</Text>
                </View>
                <View style={styles.tagWrap}>
                    <Text style={styles.tag}>1 GB 11121-2006</Text>
                    <Text style={styles.tag}>2 汽车汽油</Text>
                    <Text style={styles.tag}>3 汽车汽油</Text>
                    <Text style={styles.tag}>4 核工业行业</Text>
                    <Text style={styles.tag}>5 航天标准</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: scaleSize(122)
    },
    title: {
        width: scaleSize(408),
        height: scaleSize(96)
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scaleSize(80),
        paddingLeft: scaleSize(60),
        paddingRight: scaleSize(60),
        width: scaleSize(670),
        height: scaleSize(100),
        borderRadius: scaleSize(50),
        borderColor: '#333',
        borderWidth: scaleSize(2)
    },
    searchInput: {
        width: scaleSize(480),
        height: scaleSize(96),
        fontSize: px2dp(28),
        borderWidth: 0
    },
    searchIcon: {
        width: scaleSize(38),
        height: scaleSize(37)
    },
    historyTit: {
        marginTop: scaleSize(60),
        width: scaleSize(670),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: px2dp(32),
        fontWeight: 'bold'
    },
    delIcon: {
        width: scaleSize(32),
        height: scaleSize(30)
    },
    tagWrap: {
        marginTop: scaleSize(56),
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: scaleSize(670)
    },
    tag: {
        marginRight: scaleSize(24),
        marginBottom: scaleSize(24),
        paddingLeft: scaleSize(28),
        paddingRight: scaleSize(28),
        height: scaleSize(60),
        fontSize: px2dp(24),
        lineHeight: scaleSize(60),
        color: '#646464',
        borderRadius: scaleSize(30),
        backgroundColor: '#f5f5f5'
    }
})