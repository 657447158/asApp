import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Layout from '../../utils/layout'

export default class Personal extends Component {
    render () {
        return (
            <View style={Layout.container}>
                <Text>个人中心</Text>
            </View>
        )
    }
}