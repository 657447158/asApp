import React, { Component } from 'react'
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import { scaleSize, px2dp, screenW } from '../../utils/ScreenUtils';
import { ListRow } from 'teaset';

// 列表组件内容
class ListItem extends Component {
    render () {
        return (
            <View style={styles.listItem}>
                <View style={styles.listItemTop}>
                    <Text style={styles.constant}>GB</Text>
                    <Text style={styles.name}>11121-2006</Text>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <Text style={styles.tag}>现行</Text>
                    </View>
                    <Text style={styles.check}>查看文本</Text>
                </View>
                <Text style={styles.info}>汽油机油</Text>
                <View style={styles.listItemBottom}>
                    <View style={styles.listItemBottomBox}>
                        <Image source={require('../../assets/images/information/icon-date1.png')} />
                        <Text style={styles.listItemBottomTime}>2017-07-22</Text>
                    </View>
                    <View style={styles.listItemBottomBox}>
                        <Image source={require('../../assets/images/information/icon-date2.png')} />
                        <Text style={styles.listItemBottomTime}>2017-07-24</Text>
                    </View>
                </View>
            </View>
        )
    }
}


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
                <ScrollView style={styles.listWrap}>
                    <ListRow
                        style={{borderRadius: scaleSize(12), marginBottom: scaleSize(12)}}
                        bottomSeparator='none'
                        detail={<ListItem />}
                        swipeActions={[
                            <ListRow.SwipeActionButton style={{marginBottom: scaleSize(12)}} title='删除' type='danger' onPress={() => alert('Remove')}/>,          
                        ]}
                    />
                    <ListRow
                        style={{borderRadius: scaleSize(12), marginBottom: scaleSize(12)}}
                        bottomSeparator='none'
                        detail={<ListItem />}
                        swipeActions={[
                            <ListRow.SwipeActionButton style={{marginBottom: scaleSize(12)}} title='删除' type='danger' onPress={() => alert('Remove')}/>,          
                        ]}
                    />
                    <ListRow
                        style={{borderRadius: scaleSize(12), marginBottom: scaleSize(12)}}
                        bottomSeparator='none'
                        detail={<ListItem />}
                        swipeActions={[
                            <ListRow.SwipeActionButton style={{marginBottom: scaleSize(12)}} title='删除' type='danger' onPress={() => alert('Remove')}/>,          
                        ]}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    listWrap: {
        paddingTop: scaleSize(12),
        flex: 1,
        paddingLeft: scaleSize(20),
        paddingRight: scaleSize(20),
        height: scaleSize(20),
        width: screenW,
    },
    listItem: {
        paddingLeft: scaleSize(20),
        paddingRight: scaleSize(20),
        width: '100%',
        backgroundColor: '#fff'
    },
    listItemTop: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    constant: {
        fontSize: px2dp(36),
        fontWeight: 'bold',
        color: '#ff3c28'
    },
    name: {
        marginLeft: scaleSize(12),
        fontSize: px2dp(36),
        fontWeight: 'bold',
        color: '#333'
    },
    tag: {
        marginLeft: scaleSize(12),
        paddingLeft: scaleSize(12),
        paddingRight: scaleSize(12),
        height: scaleSize(24),
        fontSize: px2dp(18),
        lineHeight: scaleSize(24),
        borderWidth: 1,
        color: '#2878ff',
        borderColor: '#2878ff',
        backgroundColor: 'rgba(40, 120, 255, .1)',
        borderTopLeftRadius: scaleSize(12),
        borderTopRightRadius: scaleSize(12),
        borderBottomRightRadius: scaleSize(12)
    },
    check: {
        paddingLeft: scaleSize(12),
        paddingRight: scaleSize(12),
        height: scaleSize(40),
        color: '#fff',
        textAlign: 'center',
        fontSize: px2dp(22),
        lineHeight: px2dp(36),
        backgroundColor: '#2878ff',
        borderRadius: scaleSize(20)
    },
    info: {
        fontSize: px2dp(28),
        color: '#333'
    },
    listItemBottom: {
        flexDirection: 'row',
        marginTop: scaleSize(30)
    },
    listItemBottomBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: scaleSize(60)
    },
    listItemBottomTime: {
        marginLeft: scaleSize(6),
        fontSize: px2dp(24),
        color: '#9b9b9b'
    }
})