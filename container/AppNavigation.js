import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './auth/Login';
import Signup from './auth/Signup';
import WelcomeScreen from './welcome/WelcomeScreen';
import NewsFeed from './newsfeed/NewsFeed';
import ResetPassword from './auth/ResetPassword';
import Profile from './Profile/Profile';
import Category from './category/Category';
import ProfileList from './category/ProfileList';




const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="NewsFeed" component={NewsFeed} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Category" component={Category} />
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
