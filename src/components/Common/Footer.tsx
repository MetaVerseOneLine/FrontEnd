import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';

// Footer Component
const Footer = ({ navigation }) => {
  const [isRank, setRank] = useState<boolean>(false);
  const [isHome, setHome] = useState<boolean>(true);
  const [isMy, setMy] = useState<boolean>(false);

  const pressRank = () => {
    setRank(true);
    setHome(false);
    setMy(false);
    navigation.navigate('Rank');
  }
  const pressHome = () => {
    setRank(false);
    setHome(true);
    setMy(false);
    navigation.navigate('Home');
  }
  const pressMy = () => {
    setRank(false);
    setHome(false);
    setMy(true);
    navigation.navigate('MyPage');
  }
  const styles = StyleSheet.create({
    container: {
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      margin: 0,
      padding: 0,
      flex: 0,
    },
    bar: {
      position: 'absolute',
      top: 30,
      backgroundColor: '#FFFFFF',
      height: 90,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopWidth: 1,
      borderColor: '#D9D9D9',
    },
    btnContainer: {
      flexDirection: 'row',
    },
    sideBtn: {
      alignItems: 'center',
      top: 15,
      width: 50,
      height: 50,
    },
    rightBtn:{
      alignItems: 'center',
      top: 15,
      width: 50,
      height: 50,
      marginRight: 35,
    },
    leftBtn:{
      alignItems: 'center',
      top: 15,
      width: 50,
      height: 50,
      marginLeft: 35,
    },
    centerBtn:{
      alignItems: 'center',
      top: 15,
      width: 50,
      height: 50,
      marginHorizontal: 35,
    },
    icon: {
      alignItems: 'center',
      marginTop: 10,
    },
  });

  // 하단 버튼 클릭 하면 화면 이동 버튼 등장
  return (
    <View style={styles.container}>
      <View style={styles.bar}></View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
          style={styles.sideBtn}
          onPress={pressRank}
        >
          {isRank ? (
            <IIcon name="trophy" size={27} color="#393939" style={styles.icon} />
          ) : (
            <IIcon name="trophy-outline" size={27} color="#393939" style={styles.icon} />
          )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.leftBtn}>
            <SIcon name="star" size={27} color="#393939" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.centerBtn}
          onPress={pressHome}
        >
          {isHome ? (
            <IIcon name="home" size={27} color="#393939" style={styles.icon} />
          ) : (
            <IIcon name="home-outline" size={27} color="#393939" style={styles.icon} />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightBtn}>
            <IIcon name="md-shirt-outline" size={27} color="#393939" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sideBtn}
            onPress={pressMy}
          >
          {isMy ? (
            <FIcon name="user" size={27} color="#393939" style={styles.icon} />
          ) : (
            <FIcon name="user-o" size={27} color="#393939" style={styles.icon} />
          )}
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default Footer;