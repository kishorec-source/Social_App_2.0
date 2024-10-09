import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Picker,
} from 'react-native';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUserData, setNewUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [newPostData, setNewPostData] = useState({});

  useEffect(() => {
    // Fetch users from an API or database
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));

    // Fetch posts from an API or database
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleEditUser = user => {
    setEditingUser(user);
    setNewUserData(user);
  };

  const handleDeleteUser = userId => {
    // Delete user from an API or database
    fetch(`/api/users/${userId}`, {method: 'DELETE'})
      .then(() => setUsers(users.filter(user => user.id !== userId)))
      .catch(error => console.error('Error deleting user:', error));
  };

  const handleSaveUser = () => {
    // Save edited user data to an API or database
    if (editingUser) {
      fetch(`/api/users/${editingUser.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUserData),
      })
        .then(response => response.json())
        .then(updatedUser => {
          setUsers(
            users.map(user =>
              user.id === updatedUser.id ? updatedUser : user,
            ),
          );
          setEditingUser(null);
        })
        .catch(error => console.error('Error updating user:', error));
    }
  };

  const handleEditPost = post => {
    setEditingPost(post);
    setNewPostData(post);
  };

  const handleDeletePost = postId => {
    // Delete post from an API or database
    fetch(`/api/posts/${postId}`, {method: 'DELETE'})
      .then(() => setPosts(posts.filter(post => post.id !== postId)))
      .catch(error => console.error('Error deleting post:', error));
  };

  const handleSavePost = () => {
    // Save edited post data to an API or database
    if (editingPost) {
      fetch(`/api/posts/${editingPost.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newPostData),
      })
        .then(response => response.json())
        .then(updatedPost => {
          setPosts(
            posts.map(post =>
              post.id === updatedPost.id ? updatedPost : post,
            ),
          );
          setEditingPost(null);
        })
        .catch(error => console.error('Error updating post:', error));
    }
  };

  const handleFlagUser = userId => {
    // Flag user as inappropriate
    fetch(`/api/moderation/users/${userId}/flag`, {method: 'POST'})
      .then(() => console.log(`User ${userId} flagged for moderation`))
      .catch(error => console.error('Error flagging user:', error));
  };

  const handleFlagPost = postId => {
    // Flag post as inappropriate
    fetch(`/api/moderation/posts/${postId}/flag`, {method: 'POST'})
      .then(() => console.log(`Post ${postId} flagged for moderation`))
      .catch(error => console.error('Error flagging post:', error));
  };

  return (
    <View style={{margin: 20}}>
      <Text>Admin Panel</Text>
      <Text>Users</Text>
      <FlatList
        data={users}
        keyExtractor={user => user.id.toString()}
        renderItem={({item: user}) => (
          <View>
            <Text>
              {user.name} ({user.email})
            </Text>
            <Button title="Edit" onPress={() => handleEditUser(user)} />
            <Button title="Delete" onPress={() => handleDeleteUser(user.id)} />
            <Button title="Flag" onPress={() => handleFlagUser(user.id)} />
          </View>
        )}
      />
      {editingUser && (
        <View>
          <Text>Edit User</Text>
          <TextInput
            value={newUserData.name}
            onChangeText={text => setNewUserData({...newUserData, name: text})}
          />
          <TextInput
            value={newUserData.email}
            onChangeText={text => setNewUserData({...newUserData, email: text})}
          />
          <Button title="Save" onPress={handleSaveUser} />
        </View>
      )}
      <Text>Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={({item: post}) => (
          <View>
            <Text>
              {post.content} (Status: {post.status})
            </Text>
            <Button title="Edit" onPress={() => handleEditPost(post)} />
            <Button title="Delete" onPress={() => handleDeletePost(post.id)} />
            <Button title="Flag" onPress={() => handleFlagPost(post.id)} />
          </View>
        )}
      />
      {editingPost && (
        <View>
          <Text>Edit Post</Text>
          <TextInput
            value={newPostData.content}
            onChangeText={text =>
              setNewPostData({...newPostData, content: text})
            }
          />
          <Picker
            selectedValue={newPostData.status}
            onValueChange={itemValue =>
              setNewPostData({...newPostData, status: itemValue})
            }>
            <Picker.Item label="Approved" value="approved" />
            <Picker.Item label="Pending" value="pending" />
            <Picker.Item label="Rejected" value="rejected" />
          </Picker>
          <Button title="Save" onPress={handleSavePost} />
        </View>
      )}
    </View>
  );
};

export default Admin;
