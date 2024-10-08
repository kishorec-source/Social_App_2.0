import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Buddy = () => {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [year, setYear] = useState('');
  const [location, setLocation] = useState('');

  const navigation = useNavigation();

  const handleSearch = () => {
    // Implement search logic here
    console.log('Searching for:', {name, school, year, location});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for Buddies</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="School"
        value={school}
        onChangeText={setSchool}
      />
      <TextInput
        style={styles.input}
        placeholder="Graduation Year"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Search" onPress={handleSearch} />
      <Button
        title="View Yearbooks"
        onPress={() => navigation.navigate('Yearbook')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Buddy;
