import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './src/screens/Main';

const navigator = createStackNavigator({
  Main: Main
}, {
  initialRouteName: 'Main',
  defaultNavigationOptions: {
    title: 'Restaurant Search'
  }
});

export default createAppContainer(navigator);
