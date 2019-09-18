import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Layout from '../../utils/layout'
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 122
    },
    title: {
        width: 408,
        height: 96
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 80,
        paddingLeft: 60,
        paddingRight: 60,
        width: 670,
        height: 100,
        borderRadius: 50,
        borderColor: '#333',
        borderWidth: 2
    },
    searchInput: {
        width: 480,
        height: 96,
        fontSize: 28,
        borderWidth: 0
    },
    searchIcon: {
        width: 38,
        height: 37
    },
    historyTit: {
        marginTop: 60,
        width: 670,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    delIcon: {
        width: 32,
        height: 30
    }
})