import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [email, setEmail] = useState('');
  const [stream, setStream] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log('Sign in with:', email);
  };

  return (
    <View style={{margin: 20}}>
      <Text
        style={{
          marginTop: 20,
          alignSelf: 'center',
          color: 'blue',
          fontSize: 20,
        }}>
        Sign Up Here
      </Text>
      <TextInput
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'blue',
          marginTop: 20,
        }}
        placeholder="First Name"
        value={firstname}
        onChangeText={setFirstname}
      />
      <TextInput
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'blue',
          marginTop: 20,
        }}
        placeholder="Last Name"
        value={lastname}
        onChangeText={setLastname}
      />
      <TextInput
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'blue',
          marginTop: 20,
        }}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'blue',
          marginTop: 20,
        }}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'blue',
          marginTop: 20,
        }}
        placeholder="Graduation Year"
        value={graduationYear}
        onChangeText={setGraduationYear}
      />
      <TextInput
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'blue',
          marginTop: 20,
        }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'blue',
          marginTop: 20,
        }}
        placeholder="Stream"
        value={stream}
        onChangeText={setStream}
      />
      <TextInput
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'blue',
          marginTop: 20,
        }}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'blue',
          marginTop: 20,
          marginBottom: 20,
        }}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View
        style={{
          marginHorizontal: 5,
          borderRadius: 10,
          overflow: 'hidden',
          width: '50%',
          alignSelf: 'center',
        }}>
        <Button title="Sign Up" onPress={handleSignIn} />
      </View>
    </View>
  );
};

export default Signup;
