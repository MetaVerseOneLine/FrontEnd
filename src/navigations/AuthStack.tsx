import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../components';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';
import { FirstScreen, LoginScreen, RegisterScreen } from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => {

    return (
        <Stack.Navigator initialRouteName='first'>
            <Stack.Screen name="first"
                component={FirstScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Register"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default AuthStack;