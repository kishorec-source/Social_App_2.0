import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';

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
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50, // Adjust the margin as needed
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10, // Rounded corners
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    borderRadius: 10, // Rounded corners for the button
    overflow: 'hidden',
  },
  staticButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 120,
  },
  roundedButton: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10, // Rounded corners for the button
    overflow: 'hidden',
  },
});

export default Signin;
