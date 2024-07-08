import {
  Button,
  Image,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Login from './src/Login';

const App = () => {
  return <Login />;
};

const styles = StyleSheet.create({
  screen_wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaa',
    height: '100%',
  },

  text: {
    color: 'white',
    fontSize: 18,
  },

  image: {
    width: 200,
    height: 200,
    objectFit: 'cover',
  },

  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },

  button: {
    backgroundColor: 'teal',
    width: '50%',
    padding: 10,
  },

  button_text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});

export default App;
