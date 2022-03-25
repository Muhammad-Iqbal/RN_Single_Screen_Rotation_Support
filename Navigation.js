import {View, Text, SafeAreaView, StyleSheet,Pressable} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App from './src/App'
import PortraitScreen from './src/screens/Portrait'
 import LandscapeScreen from './src/screens/Landscape'

const Navigation = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={App}  />
        <Stack.Screen name="Portrait" component={PortraitScreen} />
        <Stack.Screen name="Landscape" component={LandscapeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Navigation;
