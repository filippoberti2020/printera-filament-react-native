import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import AddScreen from './screens/AddScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
  
    <NavigationContainer >
      <Stack.Navigator>
	   <Stack.Screen options={{headerShown: false}}  name="Home" component={HomeScreen} />
      <Stack.Screen options={{headerShown: false}} name="Settings" component={SettingsScreen} />
      
      <Stack.Screen options={{headerShown: false}}  name="Home" component={HomeScreen} />
    
     
      <Stack.Screen options={{headerShown: false}} name="Profile" component={ProfileScreen} />
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen options={{headerShown: false}} name="Add" component={AddScreen} />
      
     
      <Stack.Screen options={{headerShown: false}} name="Signup" component={SignupScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20252b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
