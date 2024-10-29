import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNavigator, StackScreen} from './index';
import {Login, SignUP} from '../screen';

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="signUP" component={SignUP} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      {StackScreen?.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default RootNavigator;
