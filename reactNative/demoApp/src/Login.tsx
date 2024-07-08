import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import { usernameValidation } from './utilityFunctions/validation/usernameValidation';
import { passwordValidation } from './utilityFunctions/validation/passwordValidation';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = () => {
    if (usernameValidation(username) && passwordValidation(password)) {
      // Perform login logic
      console.log('Logging in...');
    } else {
      setAlertMessage('Invalid username or password.');
      setShowAlert(true);
    }

    const login_details = {
      username,
      password,
    };

    console.log(login_details);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginWrapper}>
        <Image
          style={styles.logo}
          source={require('../src/assets/logo/app_logo.png')}
        />
        <Text style={styles.title}>Welcome Back!</Text>
        <TextInput
          value={username}
          onChangeText={val => setUsername(val)}
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={'#bbb'}
        />
        <TextInput
          onChangeText={val => setPassword(val)}
          value={password}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'#bbb'}
          secureTextEntry
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* Custom Alert Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showAlert}
        onRequestClose={closeAlert}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{alertMessage}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeAlert}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A82FB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  loginWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 30,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    fontSize: 16,
    color: '#333',
    width: '100%',
    borderRadius: 25,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: '#ff5c5c',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#6A82FB',
    borderRadius: 15,
  },
});

export default Login;
