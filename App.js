/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.text}>hello</Text>
        <TextInput
          placeholder="Enter here"
          placeholderTextColor="#fff"
          style={{
            width: 200,
            height: 50,
            borderColor: '#fff',
            borderWidth: 1,
            color: '#fff',
            margin: 8,
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Button pressed')}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 250,
    width: '100%',
    backgroundColor: '#000',
    padding: 0,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    padding: 8,
  },
  button: {
    width: 120,
    height: 50,
    backgroundColor: '#d2d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 8,
  },
});

export default App;
