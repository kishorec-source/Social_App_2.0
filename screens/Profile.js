import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Image, TextInput, Button } from "react-native";

const Profile = () => {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <View>
      <Image
        source={{ uri: user?.profilePic }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{user?.name}</Text>
      <TextInput placeholder="Bio" value={user?.bio} />
      <Button title="Save" onPress={() => {}} />
    </View>
  );
};

export default Profile;
