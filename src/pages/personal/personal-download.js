import React, { Component } from 'react'
import { View, FlatList, StyleSheet, StatusBar } from 'react-native'
import { scaleSize, screenW } from '../../utils/ScreenUtils';
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
                <FlatList
                    style={styles.listWrap}
                    contentContainerStyle={{
                        paddingTop: scaleSize(12),
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
    listWrap: {
        flex: 1,
        width: screenW,
    }
})