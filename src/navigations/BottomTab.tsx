import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, MyPageScreen, RankScreen, FirstScreen, RegisterScreen, LoginScreen } from '../screens';
import Footer from '../components/Common/Footer';

const Tab = createBottomTabNavigator();

// 하단 Tab Navigation(Footer)에 기본 메뉴 화면 담음
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="First"
      tabBar={(props) => <Footer {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyPage" component={MyPageScreen} />
      <Tab.Screen name="Rank" component={RankScreen} />
      <Tab.Screen name="First" component={FirstScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;