import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';
import { MyPageScreen } from '../screens';
import AuthStack from './AuthStack';

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
        <Stack.Screen name="Auth"
          component={AuthStack}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </View>
  );
}

export default MainStack;