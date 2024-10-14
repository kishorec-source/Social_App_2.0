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
    <View style={{margin: 20}}>
      <Image
        source={require('../images/image1.jpg')}
        style={{width: 200, height: 200, borderRadius: 50, marginVertical: 20}}
      />
      {isEditing ? (
        <>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={{borderWidth: 1, marginBottom: 10, marginVertical: 20}}
          />
          <TextInput
            placeholder="Bio"
            value={bio}
            onChangeText={setBio}
            style={{borderWidth: 1, marginVertical: 20}}
          />
          <TextInput
            placeholder="Profile Picture URL"
            value={profilePic}
            onChangeText={setProfilePic}
            style={{borderWidth: 1, marginVertical: 20}}
          />
          <Button title="Save" onPress={handleSave} />
        </>
      ) : (
        <>
          <Text style={{marginVertical: 20}}>Name: {name}</Text>
          <Text style={{marginVertical: 20}}>Bio: {bio}</Text>
          <Text style={{marginVertical: 20}}>
            Profile Picture URL: {profilePic}
          </Text>
          <Button title="Edit" onPress={() => setIsEditing(true)} />
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
