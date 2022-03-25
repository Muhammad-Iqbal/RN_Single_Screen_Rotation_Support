import {View, Text, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import Orientation from 'react-native-orientation';

import {useNavigation} from '@react-navigation/native';

const Landscape = () => {
  //local variables and states
  const navigation = useNavigation();

  useEffect(() => {
    Orientation.lockToLandscape();

    //going back to actual orientation.
    return () => {
      Orientation.lockToPortrait();
    };
  }, []);

  const navigationToPortrait = () => {
    navigation.navigate('Portrait');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20, padding: 10}}>Landscape Screen</Text>
      <Pressable onPress={navigationToPortrait}>
        <Text style={{fontSize: 20, padding: 10}}>
          Navigate to Portrait Screen
        </Text>
      </Pressable>
    </View>
  );
};

export default Landscape;
