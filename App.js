import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './src/screens/Main';
import Details from './src/screens/Details';

const navigator = createStackNavigator({
  Main: Main,
  Details: Details
}, {
  initialRouteName: 'Main',
  defaultNavigationOptions: {
    title: 'Restaurant Search'
  }
});

export default createAppContainer(navigator);
