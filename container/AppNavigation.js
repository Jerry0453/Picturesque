import * as React from 'react';
import { View, Button, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Login from './auth/Login';
import Signup from './auth/Signup';
import WelcomeScreen from './welcome/WelcomeScreen';
import NewsFeed from './newsfeed/NewsFeed';
import ResetPassword from './auth/ResetPassword';
import Profile from './Profile/Profile';
import Category from './category/Category';
import ProfileList from './category/ProfileList';
import normalize from '../constants/normalize';


const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
   
    <Tab.Navigator 
      screenOptions={{ headerShown: false }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24,
            justifyContent: 'center',
            alignItems: 'stretch',
            height: 60,
          },
        ],
      }}>
        <Tab.Screen 
          name="Home"
          component={NewsFeed}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <SafeAreaView
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                  }}>
                  <AntDesign
                    name="home"
                    size={20}
                    color={focused ? '#38486E' : 'black'}
                  />
                  <Text style={{color: focused ? '#38486E' : 'black', fontWeight: '300', fontSize: normalize(10)}}>Home</Text>
                </SafeAreaView>
              );
            },
          }} 
        />
        <Tab.Screen 
          name="Category" 
          component={Category} 
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <SafeAreaView
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                  }}>
                  <AntDesign
                    name="bars"
                    size={20}
                    color={focused ? '#38486E' : 'black'}
                  />
                  <Text style={{color: focused ? '#38486E' : 'black', fontWeight: '300', fontSize: normalize(10)}}>Category</Text>
                </SafeAreaView>
              );
            },
          }} 
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <SafeAreaView
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                  }}>
                  <Feather
                    name="user"
                    size={20}
                    color={focused ? '#38486E' : 'black'}
                  />
                  <Text style={{color: focused ? '#38486E' : 'black', fontWeight: '300', fontSize: normalize(10)}}>Profile</Text>
                </SafeAreaView>
              );
            },
          }} 
        />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
              initialRouteName='WelcomeScreen' 
              screenOptions={{
                  headerShown: false
              }}>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Home" component={HomeTabs} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="ProfileList" component={ProfileList} />
                <Stack.Screen name="Profile" component={Profile} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}
