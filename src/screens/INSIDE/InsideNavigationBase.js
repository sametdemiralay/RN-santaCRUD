import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './stylesINSIDE/stylesHome';

import HomeScreen from './HomeScreen';
import ArticleScreen from './ArticleScreen';
import SettingsScreen from './SettingsScreen';

const BottomInside = createMaterialBottomTabNavigator();

const InsideNavigationBase = () => {
  return (
    <BottomInside.Navigator
      initialRouteName="Home"
      activeColor="#e84118"
      inactiveColor="#dcdde1"
      barStyle={styles.barStylee}>
      <BottomInside.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color}) => (
            <Icon name="ios-home" color={color} size={focused ? 30 : 25} />
          ),
        }}
      />
      <BottomInside.Screen
        name="Article"
        component={ArticleScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color}) => (
            <Icon name="ios-create" color={color} size={focused ? 30 : 25} />
          ),
        }}
      />
      <BottomInside.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color}) => (
            <Icon name="ios-settings" color={color} size={focused ? 30 : 25} />
          ),
        }}
      />
    </BottomInside.Navigator>
  );
};

export default InsideNavigationBase;
