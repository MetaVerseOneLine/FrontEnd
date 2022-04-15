import React, { useContext, useEffect } from 'react';
import { images } from '../../common/images';
import { Image, View, StyleSheet, TouchableOpacity, BackHandler, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from '../../navigations/AuthStack';
import { widthPercentage, heightPercentage, fontPercentage } from '../../common/responsiveSize';
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
      width: widthPercentage(100),
      height: heightPercentage(50),
      resizeMode: 'contain',
    },
    logo: {
      paddingTop: heightPercentage(5),
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
          Alert.alert("로그아웃 되었습니다.", "종료하시겠습니까?", [
            {
              text: "취소",
              onPress: () => navigation.replace('first')
            },
            { text: "확인", onPress: () => BackHandler.exitApp() }
          ]);
        }}
      >
        <Icon
          name="logout"
          size={30}
          color="#393939"
        />
      </TouchableOpacity>
    </View>
  );
}

export default Header;