import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Profile from './Profile';
import Buddy from './Buddy';
import Gallery from '../components/Gallery';

const Reunion = () => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [events, setEvents] = useState([
    {
      id: '1',
      date: '2023-12-25',
      location: 'New York',
      description: 'Christmas Reunion',
      attendees: [],
    },
  ]);
  const [attendeeName, setAttendeeName] = useState('');
  const [selectedTab, setSelectedTab] = useState('UserDetail');

  const handleCreateEvent = () => {
    const newEvent = {
      id: (events.length + 1).toString(),
      date,
      location,
      description,
      attendees: [],
    };
    setEvents([...events, newEvent]);
    setDate('');
    setLocation('');
    setDescription('');
    console.log('Event Created:', newEvent);
  };

  const handleRSVP = eventId => {
    setEvents(
      events.map(event =>
        event.id === eventId
          ? {...event, attendees: [...event.attendees, attendeeName]}
          : event,
      ),
    );
    setAttendeeName('');
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'UserDetail':
        return <Profile />;
      case 'Events':
        return (
          <View>
            <Text style={styles.label}>Date:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter date"
              value={date}
              onChangeText={setDate}
            />
            <Text style={styles.label}>Location:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter location"
              value={location}
              onChangeText={setLocation}
            />
            <Text style={styles.label}>Description:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter description"
              value={description}
              onChangeText={setDescription}
            />
            <TouchableOpacity
              style={styles.createButton}
              onPress={handleCreateEvent}>
              <Text style={styles.createButtonText}>Create Event</Text>
            </TouchableOpacity>
            <FlatList
              data={events}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.eventItem}>
                  <Text style={styles.eventText}>Date: {item.date}</Text>
                  <Text style={styles.eventText}>
                    Location: {item.location}
                  </Text>
                  <Text style={styles.eventText}>
                    Description: {item.description}
                  </Text>
                  <Text style={styles.label}>Attendees:</Text>
                  <FlatList
                    data={item.attendees}
                    keyExtractor={(attendee, index) => index.toString()}
                    renderItem={({item}) => (
                      <Text style={styles.attendeeText}>{item}</Text>
                    )}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    value={attendeeName}
                    onChangeText={setAttendeeName}
                  />
                  <TouchableOpacity
                    style={styles.rsvpButton}
                    onPress={() => handleRSVP(item.id)}>
                    <Text style={styles.rsvpButtonText}>RSVP</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        );
      case 'BuddyLists':
        return <Buddy />;
      case 'Gallery':
        return <Gallery />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={selectedTab === 'UserDetail' ? styles.activeTab : styles.tab}
          onPress={() => setSelectedTab('UserDetail')}>
          <Text style={styles.tabText}>User Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedTab === 'Events' ? styles.activeTab : styles.tab}
          onPress={() => setSelectedTab('Events')}>
          <Text style={styles.tabText}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedTab === 'BuddyLists' ? styles.activeTab : styles.tab}
          onPress={() => setSelectedTab('BuddyLists')}>
          <Text style={styles.tabText}>Buddy Lists</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedTab === 'Gallery' ? styles.activeTab : styles.tab}
          onPress={() => setSelectedTab('Gallery')}>
          <Text style={styles.tabText}>Gallery</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.tabContent}>{renderTabContent()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#007BFF',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '400',
  },
  tabContent: {
    flex: 1,
  },
  userDetail: {
    alignItems: 'center',
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
  },
  userEmail: {
    fontSize: 16,
    fontWeight: '400',
  },
  userRSVP: {
    fontSize: 16,
    fontWeight: '400',
    color: 'green',
  },
  label: {
    fontSize: 18,
    fontWeight: '400',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 18,
    fontWeight: '400',
    borderRadius: 20,
  },
  eventItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 10,
  },
  eventText: {
    fontSize: 16,
    fontWeight: '400',
  },
  attendeeText: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 10,
  },
  createButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    width: '50%',
    alignSelf: 'center',
  },
  createButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
  rsvpButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    width: '50%',
    alignSelf: 'center',
  },
  rsvpButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Reunion;
