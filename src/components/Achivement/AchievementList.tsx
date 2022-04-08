import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from '../../common/images';

const AchievementList = ({ questContent }) => {
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#FFFFFF',
          borderBottomColor: '#CCCCCC',
          borderTopColor: '#CCCCCC',
          borderTopWidth: 1,
          // paddingVertical: 12,
          marginRight: 10,
        },
        questText : {
          fontSize: 17,
          padding: 20,
        },
      });

    return(
        <View style={styles.container}>
          <Text style={styles.questText}>{questContent}</Text>
        </View>
    );
};

export default AchievementList;