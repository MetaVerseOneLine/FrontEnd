import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const RankScreen = ({ navigation }) => {
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
      <Text>RankScreen</Text>
    </View>
  );
};

export default RankScreen;