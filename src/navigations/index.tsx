import React, { useContext, forwardRef, useImperativeHandle } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import Modal from '../components/Common/modal';

// Navigation Stack 관리하는 Container
const Navigation = forwardRef((props, ref) => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
});

export default Navigation;