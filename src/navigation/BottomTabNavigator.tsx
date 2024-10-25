import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Notification, Profile, Cart} from '../pages';
import {HomeIcon, ProfileIcon, ReceiptIcon, notificationIcon} from '../assets';
import {colors} from '../utils/constants';
import {ms} from '../utils/scale';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused && styles.circle}>
              <Image
                source={HomeIcon}
                style={[styles.icons, focused && styles.isFocus]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused && styles.circle}>
              <Image
                source={notificationIcon}
                style={[styles.icons, focused && styles.isFocus]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused && styles.circle}>
              <Image
                source={ReceiptIcon}
                style={[styles.icons, focused && styles.isFocus]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused && styles.circle}>
              <Image
                source={ProfileIcon}
                style={[styles.icons, focused && styles.isFocus]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  isFocus: {
    color: 'black',
    tintColor: colors.textColor,
  },
  circle: {
    height: ms(40),
    width: ms(40),
    borderRadius: 20,
    backgroundColor: colors.tintColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    tintColor: colors.textColor,
    height: ms(22),
    width: ms(22),
  },
});
