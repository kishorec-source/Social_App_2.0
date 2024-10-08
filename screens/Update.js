import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';

const Update = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate receiving notifications
    const interval = setInterval(() => {
      setNotifications(prevNotifications => [
        ...prevNotifications,
        {
          id: prevNotifications.length,
          message: `Notification ${prevNotifications.length + 1}`,
        },
      ]);
    }, 5000); // Add a new notification every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      const notifications = await fetchAllNotifications();
      setNotifications(notifications);
    };

    fetchNotifications();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.notification}>
      <Text>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  notification: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
});

export default Update;

// Dummy API call functions
const fetchChatNotifications = async () => {
  return [
    {id: 'chat1', message: 'New message from John'},
    {id: 'chat2', message: 'New message from Jane'},
  ];
};

const fetchClassmatesDirectoryNotifications = async () => {
  return [
    {id: 'classmate1', message: 'New classmate added: Alice'},
    {id: 'classmate2', message: 'New classmate added: Bob'},
  ];
};

const fetchReunionPlanningNotifications = async () => {
  return [
    {id: 'reunion1', message: 'Reunion planning meeting scheduled'},
    {id: 'reunion2', message: 'Reunion venue confirmed'},
  ];
};

const fetchGalleryPostsUpdateNotifications = async () => {
  return [
    {id: 'gallery1', message: 'New post in gallery'},
    {id: 'gallery2', message: 'New comment on your post'},
  ];
};

const fetchAdManagementNotifications = async () => {
  return [
    {id: 'ad1', message: 'New ad campaign started'},
    {id: 'ad2', message: 'Ad campaign performance report available'},
  ];
};

// Fetch all notifications
const fetchAllNotifications = async () => {
  const chatNotifications = await fetchChatNotifications();
  const classmatesDirectoryNotifications =
    await fetchClassmatesDirectoryNotifications();
  const reunionPlanningNotifications =
    await fetchReunionPlanningNotifications();
  const galleryPostsUpdateNotifications =
    await fetchGalleryPostsUpdateNotifications();
  const adManagementNotifications = await fetchAdManagementNotifications();

  return [
    ...chatNotifications,
    ...classmatesDirectoryNotifications,
    ...reunionPlanningNotifications,
    ...galleryPostsUpdateNotifications,
    ...adManagementNotifications,
  ];
};
