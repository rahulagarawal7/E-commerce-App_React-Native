import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, View} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator.jsx';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <RootNavigator></RootNavigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
