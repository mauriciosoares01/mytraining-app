import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from './pages/SplashScreen';
import HomeScreen, {navigationOptions} from './pages/Home';

const SplashStack = createStackNavigator({Splash: SplashScreen});
const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: navigationOptions,
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Splash: SplashStack,
      Main: MainStack,
    },
    {
      initialRouteName: 'Splash',
    },
  ),
);
