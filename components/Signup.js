import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setUser} from '../slices/userSlice';
import {View, TextInput, Button, Text} from 'react-native';

const SignUpSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignIn = () => {
    // Handle sign-in logic here
    dispatch(setUser({email}));
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    dispatch(setUser({email: 'googleuser@example.com'}));
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign-in logic here
    dispatch(setUser({email: 'facebookuser@example.com'}));
  };

  const handleMicrosoftSignIn = () => {
    // Handle Microsoft sign-in logic here
    dispatch(setUser({email: 'microsoftuser@example.com'}));
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Text>OR</Text>
      <Button title="Sign Up with Google" onPress={handleGoogleSignIn} />
      <Button title="Sign Up with Facebook" onPress={handleFacebookSignIn} />
      <Button title="Sign Up with Microsoft" onPress={handleMicrosoftSignIn} />
    </View>
  );
};

export default SignUpSignIn;
