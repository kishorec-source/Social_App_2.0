import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';

const Gallery = () => {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const images = [
    require('../images/image1.jpg'),
    require('../images/image2.jpg'),
    require('../images/image3.jpg'),
  ];

  const renderImage = ({item}) => (
    <Image
      source={item}
      style={viewMode === 'list' ? styles.listImage : styles.gridImage}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <TouchableOpacity
        onPress={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
        style={styles.toggleButtonContainer}>
        <Text style={styles.toggleButton}>
          {viewMode === 'list' ? 'Switch to Grid View' : 'Switch to List View'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderImage}
        numColumns={viewMode === 'list' ? 1 : 3}
        key={viewMode === 'list' ? 'list' : 'grid'} // Force re-render when view mode changes
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  toggleButtonContainer: {
    marginBottom: 10,
  },
  toggleButton: {
    fontSize: 18,
    color: 'blue',
  },
  listImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  gridImage: {
    width: '30%',
    height: 100,
    margin: '1.5%',
  },
});

export default Gallery;
