import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';

const Yearbook = () => {
  const [yearbookData, setYearbookData] = useState([
    {
      id: '1',
      graduationYear: '2023',
      classmate: 'John Doe',
      stream: 'Science',
    },
    {
      id: '2',
      graduationYear: '2023',
      classmate: 'Jane Smith',
      stream: 'Arts',
    },
    {
      id: '3',
      graduationYear: '2023',
      classmate: 'Alice Johnson',
      stream: 'Commerce',
    },
  ]);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>
        Graduation Year: {item.graduationYear}
      </Text>
      <Text style={styles.itemText}>Classmate: {item.classmate}</Text>
      <Text style={styles.itemText}>Stream: {item.stream}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digital Yearbooks</Text>
      <FlatList
        data={yearbookData}
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
