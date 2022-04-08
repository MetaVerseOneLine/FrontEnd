import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, BackHandler } from 'react-native';
import { Header } from '../components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';
import { FirstScreen, LoginScreen, RegisterScreen } from '../screens';

const Stack = createStackNavigator();

const MainStack = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerLeft: () => null,
          headerTitle: () => <Header navigation={navigation} />,
        })}
      >
        <Stack.Screen name="Tab"
          component={BottomTab} />
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
    </View>
  );
}

export default MainStack;