import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import SplashScreen from './SplashScreen';

const StackOutside = createStackNavigator();

const OutsideNavigationBase = () => {
  return (
    <StackOutside.Navigator headerMode="none">
      <StackOutside.Screen name="Splash" component={SplashScreen} />
      <StackOutside.Screen name="SignIn" component={SignInScreen} />
      <StackOutside.Screen name="SignUp" component={SignUpScreen} />
    </StackOutside.Navigator>
  );
};

export default OutsideNavigationBase;
