import React, { useContext, useEffect } from 'react';
import { images } from '../../common/images';
import { Image, View, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from '../../navigations/AuthStack';
// Header component
function Header({ navigation }) {
  // style
  const styles = StyleSheet.create({
    row: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    touchArea: {
      // paddingTop: 15,
    },
    img: {
      width: 100,
      height: 50,
      resizeMode: 'contain',
    },
    logo: {
      paddingTop: 5,
    },
  });

  useEffect(() => {

  });


  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.logo}
        onPress={() => navigation.navigate('Home')}
      >
        <Image source={require('../../../assets/images/logo.png')} style={styles.img} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchArea}
        onPress={() => {
          AsyncStorage.setItem('asyncUserId', '', () => { //
            console.log('로그아웃')
          });
          AsyncStorage.getItem('asyncUserId', (err, res) => {
            console.log(res)
          })
          navigation.navigate('Auth')
        }}
      >
        <Icon
          name="search"
          size={27}
          color="#393939"
        />
      </TouchableOpacity>
    </View>
  );
}

export default Header;