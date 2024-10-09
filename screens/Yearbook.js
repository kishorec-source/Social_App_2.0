import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';

const Yearbook = () => {
  const [yearbookData, setYearbookData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json();
        const formattedData = data.map(user => ({
          id: user.id.toString(),
          graduationYear: 2023, // Assuming graduation year is 2023 for all
          classmate: `${user.name.firstname} ${user.name.lastname}`,
          stream: user.__v.toString(), // Assuming __v is the stream
          city: user.address.city,
          email: user.email,
          username: user.username,
          phone: user.phone,
        }));
        setYearbookData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredData = yearbookData.filter(item => {
    const query = searchQuery.toLowerCase();
    return (
      item.graduationYear.toString().includes(query) ||
      item.classmate.toLowerCase().includes(query) ||
      item.stream.toLowerCase().includes(query) ||
      item.city.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query) ||
      item.username.toLowerCase().includes(query) ||
      item.phone.toLowerCase().includes(query)
    );
  });

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>
        Graduation Year: {item.graduationYear}
      </Text>
      <Text style={styles.itemText}>Classmate: {item.classmate}</Text>
      <Text style={styles.itemText}>Stream: {item.stream}</Text>
      <Text style={styles.itemText}>City: {item.city}</Text>
      <Text style={styles.itemText}>Email: {item.email}</Text>
      <Text style={styles.itemText}>Username: {item.username}</Text>
      <Text style={styles.itemText}>Phone: {item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yearbooks</Text>
      <TextInput
        style={styles.searchBox}
        placeholder="Search from Yearbook"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
    color: 'blue',
  },
  searchBox: {
    height: 40,
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});

export default Yearbook;
