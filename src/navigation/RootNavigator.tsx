import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackScreen} from './index';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  const user = true;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {StackScreen.map((screen, i) => {
        if (user && screen.name !== 'login' && screen.name !== 'signUp') {
          console.log('user log in ', user);
          return (
            <Stack.Screen
              key={`${screen.name}-${i}`}
              name={screen.name as keyof RootStackParamList}
              component={screen.component}
            />
          );
        }
        if (!user && (screen.name === 'login' || screen.name === 'signUp')) {
          console.log('user logout ', user);
          return (
            <Stack.Screen
              key={`${screen.name}-${i}`}
              name={screen.name as keyof RootStackParamList}
              component={screen.component}
            />
          );
        }
        return null;
      })}
    </Stack.Navigator>
  );
};

export default RootNavigator;
