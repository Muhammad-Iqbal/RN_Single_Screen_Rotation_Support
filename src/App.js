import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Orientation from 'react-native-orientation';

import {useNavigation} from '@react-navigation/native';

const App = () => {
  //local variables and hooks
  const navigation = useNavigation();

  const navigationToLandscape = () => {
    navigation.navigate('Landscape');
  };
  return (
    <>
      <SafeAreaView style={{flex: 0}} />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'center', fontSize: 32}}>
            Single Screen Rotation
          </Text>
          <Pressable
            style={{alignItems: 'center'}}
            onPress={navigationToLandscape}>
            <Text style={{fontSize: 20, padding: 10}}>
              Navigate to Landscape Screen
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
