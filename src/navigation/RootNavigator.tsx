import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import AuthStack from './authStack/AuthStack';
import MainStack from './mainStack/MainStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  const user = true;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <Stack.Screen name={'MainStack'} component={MainStack} />
      ) : (
        <Stack.Screen name={'AuthStack'} component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
