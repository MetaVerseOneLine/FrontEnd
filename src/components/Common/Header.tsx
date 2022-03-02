import React, { useContext } from 'react';
import { images } from '../../common/images';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      marginTop: 10,
    },
    img: {
      width: 100,
      height: 50,
      resizeMode: 'contain',
    },
    logo: {
      marginTop: 7,
    },
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