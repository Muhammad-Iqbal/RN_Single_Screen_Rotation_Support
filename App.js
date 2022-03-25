import {View, Text, SafeAreaView, StyleSheet,Pressable} from 'react-native';
import React from 'react';
import Orientation from "react-native-orientation";

const App = () => {

  const rotateSingleScreen = () =>{
    Orientation.unlockAllOrientations();
    Orientation.lockToPortrait();
  }
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: '#715ba9'}}>
      <View style={{flex: 1, backgroundColor: '#715ba9'}}>
        <Text style={{fontSize: 50}}>Test Single Screen Rotation</Text>
        <Pressable style={{alignItems: 'center'}} onPress={rotateSingleScreen}>
          <Text>Rotate</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
