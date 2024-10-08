// To allow users to view digital versions of their yearbooks, you can add a button that navigates to a new screen where the yearbooks are displayed. First, you need to set up navigation in your app if you haven't already. Here's how you can modify your existing code to include navigation and a new screen for viewing yearbooks.

// 1. Install `@react-navigation/native` and `@react-navigation/stack` if you haven't already:
  // ```sh
  // npm install @react-navigation/native @react-navigation/stack
  // ```

// 2. Set up navigation in your app. Modify your main entry file (e.g., `App.js`) to include the navigation container and stack navigator:
//   ```javascript
  import * as React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import Buddy from './screens/Buddy';
  import Yearbook from './screens/Yearbook';

  const Stack = createStackNavigator();

  const App = () => {
    return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Buddy">
        <Stack.Screen name="Buddy" component={Buddy} />
        <Stack.Screen name="Yearbook" component={Yearbook} />
      </Stack.Navigator>
     </NavigationContainer>
    );
  };

  export default App;
  ```

// 3. Create a new screen component for viewing yearbooks. Create a new file called `Yearbook.js` in the `screens` directory:
  ```javascript
  import { View, Text, StyleSheet } from 'react-native';
  import React from 'react';

  const Yearbook = () => {
    return (
     <View style={styles.container}>
      <Text style={styles.title}>Digital Yearbooks</Text>
      {/* Implement yearbook viewing logic here */}
     </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     padding: 16,
     backgroundColor: '#fff',
    },
    title: {
     fontSize: 24,
     marginBottom: 16,
     textAlign: 'center',
    },
  });

  export default Yearbook;
  ```

// 4. Modify your `Buddy.js` to include a button that navigates to the `Yearbook` screen:
//   ```javascript
  import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
  import React, { useState } from 'react';
  import { useNavigation } from '@react-navigation/native';

  const Buddy = () => {
    const [name, setName] = useState('');
    const [school, setSchool] = useState('');
    const [year, setYear] = useState('');
    const [location, setLocation] = useState('');

    const navigation = useNavigation();

    const handleSearch = () => {
     // Implement search logic here
     console.log('Searching for:', { name, school, year, location });
    };

    return (
     <View style={styles.container}>
      <Text style={styles.title}>Search for Buddies</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="School"
        value={school}
        onChangeText={setSchool}
      />
      <TextInput
        style={styles.input}
        placeholder="Graduation Year"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Search" onPress={handleSearch} />
      <Button title="View Yearbooks" onPress={() => navigation.navigate('Yearbook')} />
     </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     padding: 16,
     backgroundColor: '#fff',
    },
    title: {
     fontSize: 24,
     marginBottom: 16,
     textAlign: 'center',
    },
    input: {
     height: 40,
     borderColor: 'gray',
     borderWidth: 1,
     marginBottom: 12,
     paddingHorizontal: 8,
    },
  });

  export default Buddy;
  // ```

// This setup will allow users to navigate to a new screen where you can implement the logic to view digital yearbooks.
