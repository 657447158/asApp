import React, { Component } from 'react'
import { View, Text, Image, FlatList, StyleSheet, StatusBar } from 'react-native'
import { scaleSize, px2dp, screenW } from '../../utils/ScreenUtils';
import { Input } from 'teaset';
import ListItem from '../../widget/ListItem';

const StatusBarHeight = StatusBar.currentHeight

export default class Collection extends Component {
    constructor (props) {
        super(props)
        this.state = {
            placeholder: 'GB',
            datasList: [{key: 'a'}, {key: 'b'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'i'}, {key: 'j'}, {key: 'k'},{key: 'l'}, {key: 'm'}]
        }
    }
    getItem = () => {
        return <ListItem />
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
                <FlatList
                    style={styles.listWrap}
                    contentContainerStyle={{
                        paddingTop: scaleSize(98) + StatusBarHeight,
                        paddingBottom: 0,
                        paddingLeft: scaleSize(20),
                        paddingRight: scaleSize(20)
                    }}
                    data={this.state.datasList}
                    renderItem={this.getItem}
                />
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
        zIndex: 9,
        // paddingTop: StatusBarHeight,
        paddingLeft: scaleSize(40),
        paddingRight: scaleSize(40),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: scaleSize(116),
        backgroundColor: '#fff'
    },
    serachBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: scaleSize(32),
        paddingRight: scaleSize(32),
        width: scaleSize(590),
        height: scaleSize(68),
        backgroundColor: '#f7f7f7',
        borderRadius: scaleSize(34),
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
        flex: 1,
        width: screenW,
    }
})