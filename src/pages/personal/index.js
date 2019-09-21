import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { scaleSize, px2dp, defaultHeight } from '../../utils/ScreenUtils';

export default class Personal extends Component {
    // 滚动时调用回调函数
    onScroll = (e) => {
        if (e.nativeEvent.contentOffset.y > 10) {
            this.props.navigation.setParams({
                backgroundColor: '#2878ff'
            })
        } else {
            this.props.navigation.setParams({
                backgroundColor: 'transparent'
            })
        }
    }
    // 跳转路由
    navigateTo (path, params) {
        this.props.navigation.navigate(path, params)
    }
    render () {
        return (
            <View style={{flex: 1}}>
                <ScrollView
                    style={{flex: 1}}
                    onScroll={this.onScroll}
                >
                    {/* 顶部信息 */}
                    <ImageBackground style={styles.header} source={require('../../assets/images/personal/personal-bg.jpg')}>
                        <TouchableOpacity
                            activeOpacity={.8}
                            onPress={this.navigateTo.bind(this, 'PersonalInformation')}
                        >
                            <View style={styles.top}>
                                <Image style={styles.avator} source={require('../../assets/images/personal/default-avator.png')} />
                                <View style={styles.infos}>
                                    <Text style={styles.nickname}>大魔王华晨宇</Text>
                                    <View style={styles.label}>
                                        <View style={styles.iconBox}>
                                            <Image style={styles.crown} source={require('../../assets/images/personal/icon-crown.png')} />
                                        </View>
                                        <Text style={styles.labelName}>企业管理人员</Text>
                                    </View>
                                    <Text style={styles.company}>花开见宇科技有限公司</Text>
                                </View>
                                <Image style={styles.next} source={require('../../assets/images/personal/icon-next.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.bottom}>
                            <Image style={styles.vipIcon} source={require('../../assets/images/personal/icon-vip.png')} />
                            <Text style={styles.vipConstant}>我的VIP会员</Text>
                            <Text style={styles.vipTime}>2019-08-19到期</Text>
                            <Text style={styles.vipLink}>立即续费</Text>
                        </View>
                    </ImageBackground>
                    {/* 导航 */}
                    <View style={styles.navBox}>
                        <TouchableOpacity
                            activeOpacity={.8}
                            style={styles.navItem}
                            onPress={this.navigateTo.bind(this, 'CollectionStack')}
                        >
                            <Image style={{width: scaleSize(44), height: scaleSize(43)}} source={require('../../assets/images/personal/icon-col.png')} />
                            <Text style={styles.navText}>我的收藏</Text>
                            <Image style={styles.navNext} source={require('../../assets/images/personal/icon-next-b.png')} />
                            <View style={styles.navLine}></View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={.8}
                            style={styles.navItem}
                            onPress={this.navigateTo.bind(this, 'PersonalDownload')}
                        >
                            <Image style={{width: scaleSize(45), height: scaleSize(44)}} source={require('../../assets/images/personal/icon-download.png')} />
                            <Text style={styles.navText}>我的下载</Text>
                            <Image style={styles.navNext} source={require('../../assets/images/personal/icon-next-b.png')} />
                            <View style={styles.navLine}></View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={.8}
                            style={styles.navItem}
                            onPress={this.navigateTo.bind(this, 'PersonalTrack')}
                        >
                            <Image style={{width: scaleSize(46), height: scaleSize(46)}} source={require('../../assets/images/personal/icon-follow.png')} />
                            <Text style={styles.navText}>标准跟踪</Text>
                            <Image style={styles.navNext} source={require('../../assets/images/personal/icon-next-b.png')} />
                            <View style={styles.navLine}></View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={.8}
                            style={styles.navItem}
                            onPress={this.navigateTo.bind(this, 'PersonalCompany')}
                        >
                            <Image style={{width: scaleSize(42), height: scaleSize(45)}} source={require('../../assets/images/personal/icon-custom.png')} />
                            <Text style={styles.navText}>企业用户</Text>
                            <Image style={styles.navNext} source={require('../../assets/images/personal/icon-next-b.png')} />
                            <View style={styles.navLine}></View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={.8}
                            style={styles.navItem}
                            onPress={this.navigateTo.bind(this, 'PersonalRecharge')}
                        >
                            <Image style={{width: scaleSize(44), height: scaleSize(44)}} source={require('../../assets/images/personal/icon-recharge.png')} />
                            <Text style={styles.navText}>充值记录</Text>
                            <Image style={styles.navNext} source={require('../../assets/images/personal/icon-next-b.png')} />
                            <View style={styles.navLine}></View>
                        </TouchableOpacity>
                        <View style={styles.navItem}>
                            <Image style={{width: scaleSize(45), height: scaleSize(45)}} source={require('../../assets/images/personal/icon-invoice.png')} />
                            <Text style={styles.navText}>开票记录</Text>
                            <Image style={styles.navNext} source={require('../../assets/images/personal/icon-next-b.png')} />
                            <View style={styles.navLine}></View>
                        </View>
                    </View>
                    {/* 退出按钮 */}
                    <Text style={styles.logout}>退出账号</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: scaleSize(168),
        paddingLeft: scaleSize(40),
        paddingRight: scaleSize(40),
        height: scaleSize(470)
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: scaleSize(120)
    },
    avator: {
        marginRight: scaleSize(22),
        width: scaleSize(120),
        height: scaleSize(120)
    },
    infos: {
        flex: 1,
        marginBottom: scaleSize(8)
    },
    nickname: {
        marginBottom: scaleSize(10),
        fontSize: px2dp(32),
        fontWeight: 'bold',
        color: '#fff'
    },
    label: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelName: {
        position: 'absolute',
        left: scaleSize(20),
        paddingLeft: scaleSize(14),
        paddingRight: scaleSize(14),
        height: scaleSize(26),
        fontSize: px2dp(18),
        color: '#fff',
        lineHeight: scaleSize(24),
        backgroundColor: 'rgba(160, 191, 253, .5)',
        borderTopRightRadius: scaleSize(12),
    },
    iconBox: {
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: scaleSize(34),
        height: scaleSize(34),
        borderRadius: scaleSize(17),
        backgroundColor: '#a0bffd'
    },
    crown: {
        width: scaleSize(25),
        height: scaleSize(19)
    },
    company: {
        fontSize: px2dp(22),
        color: '#a6c3ff'
    },
    next: {
        width: scaleSize(18),
        height: scaleSize(32)
    },
    bottom: {
        marginTop: scaleSize(40),
        paddingLeft: scaleSize(28),
        paddingRight: scaleSize(28),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: scaleSize(72),
        backgroundColor: 'rgba(255, 255, 255, .2)',
        borderRadius: scaleSize(15)
    },
    vipIcon: {
        marginRight: scaleSize(15),
        width: scaleSize(32),
        height: scaleSize(35)
    },
    vipConstant: {
        marginRight: scaleSize(12),
        fontSize: px2dp(32),
        color: '#f0d298',
        fontWeight: 'bold'
    },
    vipTime: {
        flex: 1,
        fontSize: px2dp(22),
        color: '#2953ff'
    },
    vipLink: {
        fontSize: px2dp(28),
        color: '#fff',
        fontWeight: 'bold'
    },
    // 导航区内容
    navBox: {
        flex: 1,
        marginTop: -scaleSize(30),
        paddingTop: scaleSize(30),
        paddingLeft: scaleSize(40),
        paddingRight: scaleSize(40),
        // 470 个人信息设计高度 98 底部导航栏设计高度
        minHeight: scaleSize(defaultHeight - 470 - 98),
        backgroundColor: '#fff',
        borderTopLeftRadius: scaleSize(30),
        borderTopRightRadius: scaleSize(30)
    },
    navItem: {
        paddingTop: scaleSize(40),
        paddingBottom: scaleSize(40),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    navText: {
        marginLeft: scaleSize(22),
        flex: 1,
        fontSize: px2dp(28),
        color: '#333',
        fontWeight: 'bold'
    },
    navNext: {
        width: scaleSize(9),
        height: scaleSize(15)
    },
    navLine: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: scaleSize(588),
        height: 1,
        backgroundColor: '#f2f2f2'
    },
    logout: {
        position: 'absolute',
        left: scaleSize(264),
        top: scaleSize(1115),
        width: scaleSize(224),
        height: scaleSize(80),
        fontSize: px2dp(28),
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: scaleSize(80),
        borderRadius: scaleSize(40),
        backgroundColor: '#2878ff'
    }
})