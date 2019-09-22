import { scaleSize, px2dp } from './ScreenUtils'

export default {
    container:　{
        flex: 1,
        paddingLeft: scaleSize(40),
        paddingRight: scaleSize(40)
    },
    /**
     * 登录注册输入框样式
     */
    inputItem: {
        marginTop: scaleSize(36)
    },
    inputLabel: {
        fontSize: px2dp(28),
        color: '#333'
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e3e3e3'
        
    },
    input: {
        flex: 1,
        paddingTop: scaleSize(20),
        paddingLeft: 0,
        paddingBottom: 0,
        borderWidth: 0
    },
    clearBox: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    clear: {
        width: scaleSize(28),
        height: scaleSize(28)
    },
    sendText: {
        fontSize: px2dp(28),
        color: '#2878ff'
    },
    borderBottomBlue: {
        borderBottomColor: '#2878ff',
        borderBottomWidth: 1,
    }
}