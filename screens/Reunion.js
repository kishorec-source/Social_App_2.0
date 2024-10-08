import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

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
    {
      id: '2',
      date: '2024-01-01',
      location: 'Los Angeles',
      description: 'New Year Reunion',
      attendees: [],
    },
    {
      id: '3',
      date: '2024-02-14',
      location: 'Chicago',
      description: "Valentine's Day Reunion",
      attendees: [],
    },
    {
      id: '4',
      date: '2024-03-17',
      location: 'Boston',
      description: "St. Patrick's Day Reunion",
      attendees: [],
    },
    {
      id: '5',
      date: '2024-07-04',
      location: 'Washington D.C.',
      description: 'Independence Day Reunion',
      attendees: [],
    },
  ]);
  const [attendeeName, setAttendeeName] = useState('');

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

  return (
    <View style={styles.container}>
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
      <Button title="Create Event" onPress={handleCreateEvent} />
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.eventItem}>
            <Text style={styles.eventText}>Date: {item.date}</Text>
            <Text style={styles.eventText}>Location: {item.location}</Text>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
  },
  eventItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 10,
  },
  eventText: {
    fontSize: 16,
  },
  attendeeText: {
    fontSize: 14,
    marginLeft: 10,
  },
  rsvpButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  rsvpButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Reunion;
