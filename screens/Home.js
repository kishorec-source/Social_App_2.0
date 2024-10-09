import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const {width} = Dimensions.get('window');

export default function Index() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const images = [
    require('../images/image1.jpg'),
    require('../images/image2.jpg'),
    require('../images/image3.jpg'),
    require('../images/image4.jpg'),
  ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const renderAdCard = () => (
    <View style={styles.card}>
      <Image source={getRandomImage()} style={styles.image} />
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>👍</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>🔗</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={styles.textInput}
          placeholder="What's on your mind?"
          placeholderTextColor="#888"
          multiline
        />
        <View style={styles.uploadContainer}>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.iconText}>📷</Text>
            <Text style={styles.uploadButtonText}>Upload Image/Video</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dropdownContainer}>
          <TouchableOpacity style={styles.dropdownButton}>
            <Text style={styles.dropdownButtonText}>Options</Text>
          </TouchableOpacity>
          <View style={styles.dropdownContent}>
            <TouchableOpacity style={styles.postButton}>
              <Text style={styles.postButtonText}>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButton}>
              <Text style={styles.postButtonText}>Topic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButton}>
              <Text style={styles.postButtonText}>Discussion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.postsContainer}>
        {posts.map((post, index) => (
          <React.Fragment key={post.id}>
            <View style={styles.card}>
              <Text style={styles.titletext}>{post.title}</Text>
              <Text style={styles.bodytext}>{post.body}</Text>
              <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconButton}>
                  <Text style={styles.iconText}>👍</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <Text style={styles.iconText}>💬</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <Text style={styles.iconText}>🔗</Text>
                </TouchableOpacity>
              </View>
            </View>
            {(index + 1) % 5 === 0 && renderAdCard()}
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    paddingBottom: 20,
  },
  titletext: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
  },
  bodytext: {
    color: 'blue',
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    width: width * 0.9,
  },
  textInput: {
    backgroundColor: '#444',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: '#fff',
    marginLeft: 10,
  },
  postButton: {
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: width * 0.4,
    borderRadius: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  iconButton: {
    marginHorizontal: 10,
  },
  iconText: {
    color: '#fff',
    fontSize: 24,
  },
});
