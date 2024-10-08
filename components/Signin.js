import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/userSlice";
import { View, TextInput, Button, Text } from "react-native";

const SignUpSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = () => {
    // Handle sign-in logic here
    dispatch(setUser({ email }));
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
      <Button title="Sign Up with Social Media" onPress={() => {}} />
    </View>
  );
};

export default SignUpSignIn;
