import React, {useState, useEffect} from 'react';

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
    <div>
      <h1>Admin Panel</h1>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => handleEditUser(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            <button onClick={() => handleFlagUser(user.id)}>Flag</button>
          </li>
        ))}
      </ul>
      {editingUser && (
        <div>
          <h2>Edit User</h2>
          <input
            type="text"
            value={newUserData.name}
            onChange={e =>
              setNewUserData({...newUserData, name: e.target.value})
            }
          />
          <input
            type="email"
            value={newUserData.email}
            onChange={e =>
              setNewUserData({...newUserData, email: e.target.value})
            }
          />
          <button onClick={handleSaveUser}>Save</button>
        </div>
      )}
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.content} (Status: {post.status})
            <button onClick={() => handleEditPost(post)}>Edit</button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            <button onClick={() => handleFlagPost(post.id)}>Flag</button>
          </li>
        ))}
      </ul>
      {editingPost && (
        <div>
          <h2>Edit Post</h2>
          <textarea
            value={newPostData.content}
            onChange={e =>
              setNewPostData({...newPostData, content: e.target.value})
            }
          />
          <select
            value={newPostData.status}
            onChange={e =>
              setNewPostData({...newPostData, status: e.target.value})
            }>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
          <button onClick={handleSavePost}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Admin;
