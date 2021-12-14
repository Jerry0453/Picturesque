import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './auth/Login';
import Signup from './auth/Signup';
import WelcomeScreen from './welcome/WelcomeScreen';
import NewsFeed from './newsfeed/NewsFeed';


function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
    </View>
  );
}

function CategoryScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Category</Text>
        </View>
      );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="NewsFeed" component={NewsFeed} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Category" component={CategoryScreen} />
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
