import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './screens/Main';
import Chat from './screens/Chat';
import Buddy from './screens/Buddy';
import Home from './screens/Home';
import Update from './screens/Update';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Buddy"
          component={Buddy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
