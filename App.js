/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Text} from 'react-native';
import splash from './src/Splash';
import Register from './src/Register';
import DropDown from './src/DropDown';
import Settings from './src/Setting';
import VisitScreen from './src/VisitScreen';
import SignInWithPhone from './src/SignInWithPhone';
import UserDetails from './src/UserDetails';
import ForgetPassword from './src/ForgetPassword';
import CameraScreen from './src/CameraScreen';

const AuthNavigator = createStackNavigator(
  {
    Home: {
      screen: splash,
      navigationOptions: ({navigation, twt}) => ({
        tabBarIcon: ({tintColor}) => <Text>Home</Text>,
      }),
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const MainNavigator = createStackNavigator(
  {
    Register: {screen: Register},
    DropDown: {screen: DropDown},
    Settings: {screen: Settings},
    VisitScreen: {screen: VisitScreen},
    SignInWithPhone: {screen: SignInWithPhone},
    UserDetails: {screen: UserDetails},
    ForgetPassword: {screen: ForgetPassword},
    CameraScreen: {screen: CameraScreen},
    Main: {
      screen: AuthNavigator,
      navigationOptions: ({navigation}) => ({}),
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Splash: {screen: splash},

    MainNavigator: {screen: MainNavigator},
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const NavApp = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return <NavApp />;
  }
}

export default App;
