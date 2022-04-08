import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../components';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';
import { FirstScreen, LoginScreen, RegisterScreen, HomeScreen, MyPageScreen, RankScreen } from '../screens';
import MainStack from './MainStack';

const Stack = createStackNavigator();

const AuthStack = () => {

    return (
        <Stack.Navigator
            initialRouteName="first"
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: '#ffffff',
                },
                headerLeft: () => null,
                headerTitle: () => <Header navigation={navigation} />,
            })}
        >
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
            {/* <Stack.Screen name="Tab"
                component={BottomTab} /> */}
        </Stack.Navigator>
    );
}

export default AuthStack;