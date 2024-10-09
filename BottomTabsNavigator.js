import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Buddy from './screens/Buddy';
import Profile from './screens/Profile';
import Reunion from './screens/Reunion';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen
        name="Buddy"
        component={Buddy}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Reunion"
        component={Reunion}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
