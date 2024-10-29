import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabOptions, bottomTabNavigation} from '../index';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      {bottomTabNavigation.map(tabScreen => (
        <Tab.Screen
          key={tabScreen.id}
          name={tabScreen.name}
          component={tabScreen.component}
          options={{
            tabBarIcon: ({focused}) => (
              <TabOptions focused={focused} Icon={tabScreen.icon} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
