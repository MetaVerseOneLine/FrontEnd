import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Navigation Stack 관리하는 Container
const Navigation = forwardRef((props, ref) => {
  const [userId, setUserId] = useState(null)
  useEffect(() => {
    AsyncStorage.getItem('asyncUserId', (err, result) => {
      result != null ? setUserId(result) : null
    });
  })
  return (
    <NavigationContainer>
      {userId == null ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
});

export default Navigation;