import React, { useContext, forwardRef, useImperativeHandle } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

// Navigation Stack 관리하는 Container
const Navigation = forwardRef((props, ref) => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
});

export default Navigation;