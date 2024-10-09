import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const Signin = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (validateEmail(identifier)) {
      console.log('Signed in with email:', identifier);
    } else if (validatePhoneNumber(identifier)) {
      console.log('Signed in with phone number:', identifier);
    } else {
      console.log('Invalid email or phone number');
    }
  };

  const validateEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePhoneNumber = phoneNumber => {
    const re = /^\d{10}$/; // Adjust the regex according to your phone number format
    return re.test(phoneNumber);
  };

  return (
    <ImageBackground
      source={require('../images/image5.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
          value={identifier}
          onChangeText={setIdentifier}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.buttonContainer}>
          <Button title="Sign In" onPress={handleSignIn} />
        </View>
        <Text
          style={{
            color: 'red',
            marginLeft: 100,
            marginTop: 50,
            fontSize: 20,
            fontWeight: 600,
          }}>
          Feel Free to Sign in
        </Text>
        <View style={styles.staticButtonsContainer}>
          <View style={styles.roundedButton}>
            <Button title="Instagram" onPress={() => {}} />
          </View>
          <View style={styles.roundedButton}>
            <Button title="Facebook" onPress={() => {}} />
          </View>
          <View style={styles.roundedButton}>
            <Button title="Google" onPress={() => {}} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    marginTop: 200,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'red', // Change border color to red
    borderWidth: 1,
    borderRadius: 10, // Rounded corners
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ffe6e6', // Highlight input fields with a light red background
  },
  buttonContainer: {
    borderRadius: 10, // Rounded corners for the button
    overflow: 'hidden',
    width: '50%',
    alignSelf: 'center',
  },
  staticButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  roundedButton: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10, // Rounded corners for the button
    overflow: 'hidden',
    marginTop: 10,
    width: 'auto',
  },
});

export default Signin;
