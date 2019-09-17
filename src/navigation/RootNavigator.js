import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AppNavigator from './AppNavigator'

const AppContainer = createAppContainer(createStackNavigator({
    Main: {
        screen: AppNavigator,
        navigationOptions: {
            header: null
        }
    }
}))

export default AppContainer