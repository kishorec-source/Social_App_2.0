import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, TextInput, Button, Alert} from 'react-native';

const Profile = ({user}) => {
  const [name, setName] = useState(user?.name || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [profilePic, setProfilePic] = useState(user?.profilePic || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (!name || !bio || !profilePic) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    // Handle save logic here
    console.log({name, bio, profilePic});
    setIsEditing(false);
  };

  return (
    <View>
      <Image source={{uri: profilePic}} style={{width: 100, height: 100}} />
      {isEditing ? (
        <>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={{borderWidth: 1, marginBottom: 10}}
          />
          <TextInput
            placeholder="Bio"
            value={bio}
            onChangeText={setBio}
            style={{borderWidth: 1, marginBottom: 10}}
          />
          <TextInput
            placeholder="Profile Picture URL"
            value={profilePic}
            onChangeText={setProfilePic}
            style={{borderWidth: 1, marginBottom: 10}}
          />
          <Button title="Save" onPress={handleSave} />
          <Image
            source={{uri: 'https://via.placeholder.com/150'}}
            style={{width: 150, height: 150, marginTop: 10}}
          />
        </>
      ) : (
        <>
          <Text>Name: {name}</Text>
          <Text>Bio: {bio}</Text>
          <Text>Profile Picture URL: {profilePic}</Text>
          <Button title="Edit" onPress={() => setIsEditing(true)} />
          <Image
            source={{uri: 'https://via.placeholder.com/150'}}
            style={{width: 150, height: 150, marginTop: 10}}
          />
        </>
      )}
    </View>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    profilePic: PropTypes.string,
  }),
};

export default Profile;
