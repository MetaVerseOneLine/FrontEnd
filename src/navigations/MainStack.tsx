import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';
import { MyPageScreen } from '../screens';

const Stack = createStackNavigator();

const MainStack = () => {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
    });
    
    return (
        <View style={styles.container}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Tab" component={BottomTab} />
            </Stack.Navigator>
        </View>
    );
}

export default MainStack;