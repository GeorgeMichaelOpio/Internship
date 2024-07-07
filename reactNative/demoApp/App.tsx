import React from 'react';
import {Text, View} from 'react-native';
import Home from './src/Home';
import Settings from './src/Settings';
import Login from './src/Login';
import Register from './src/Register';

const App = () => {
  return (
  <View>
    <Text>Welcome to the App!</Text>
    <Home />
    <Settings />
    <Login />
    <Register />
  </View>
  );
};

export default App;