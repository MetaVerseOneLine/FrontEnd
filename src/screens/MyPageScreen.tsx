import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MyPageScreen = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
    },
  });
  return (
    <View style={styles.container}>
      <Text>MyPageScreen</Text>
    </View>
  );
};

export default MyPageScreen;