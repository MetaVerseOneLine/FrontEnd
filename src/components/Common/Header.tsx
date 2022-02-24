import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Header component
function Header({ navigation }) {
  // style
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      flex: 1,
    },
    touchArea: {
      marginTop: 7,
    },
    icon: {
      flex: 1,
    },
    img: {
      width: '100%',
      height: 50,
      resizeMode: 'contain',
    },
    logo: {
      flex: 9,
    },
  });


  // 알림, 로고, 마이페이지
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.logo}
        onPress={() => navigation.navigate('Home')}
      >
        Project
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchArea}
        onPress={() => navigation.navigate('MyPage')}
      >
        <MaterialCommunityIcons
          style={styles.icon}
          name="account-circle-outline"
          size={32}
          color="#606dca"
        />
      </TouchableOpacity>
    </View>
  );
}

export default Header;