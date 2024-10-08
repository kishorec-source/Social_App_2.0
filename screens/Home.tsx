import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const { width } = Dimensions.get('window');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={styles.textInput}
          placeholder="What's on your mind?"
          placeholderTextColor="#888"
          multiline />
        <View style={styles.uploadContainer}>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.iconText}>📷</Text>
            <Text style={styles.uploadButtonText}>Upload Image/Video</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TextInput
          style={styles.textInput}
          placeholder="Create a new topic"
          placeholderTextColor="#888"
          multiline />
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Create Topic</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TextInput
          style={styles.textInput}
          placeholder="Join a discussion"
          placeholderTextColor="#888"
          multiline />
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Join Discussion</Text>
        </TouchableOpacity>
      </View>

      {/* Ad Card */}
      <View style={styles.card}>
        <Video
          source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isLooping
          style={styles.video} />
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
      </View><View style={styles.card}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.image} />
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
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
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
  video: {
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