import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Buddy from './screens/Buddy';
import Profile from './screens/Profile';
import Reunion from './screens/Reunion';
import { Image,StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();


const BottomTabsNavigator = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
       options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                source={
                  selectedTab == 0
                     ? require('./images/home_fill.png')
  
                    : require('./images/home.png')
                }
                style={styles.bottomTabIcon}
              />
              );
            },
          }} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '95%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#d1fcf3',
    borderRadius: 20,
    marginBottom: 5,
    marginLeft: 10,
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
});

export default BottomTabsNavigator;
