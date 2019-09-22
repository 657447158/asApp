import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import AppNavigator from './AppNavigator'
import AuthNavigator from './AuthNavigator'

const AppContainer = createAppContainer(createSwitchNavigator({
    Main: AppNavigator,
    Auth: AuthNavigator
}))

export default AppContainer