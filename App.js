import {View, Text, SafeAreaView, StyleSheet,Pressable} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: '#715ba9'}}>
      <View style={{flex: 1, backgroundColor: '#715ba9'}}>
        <Text style={{fontSize: 50}}>Test Single Screen Rotation</Text>
        <Pressable style={{alignItems: 'center'}} onPress={()=>alert('rotate')}>
          <Text>Rotate</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
