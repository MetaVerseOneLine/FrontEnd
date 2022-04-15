import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentage, heightPercentage, fontPercentage } from '../../common/responsiveSize';

const AchievementList = ({ questContent }) => {
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#FFFFFF',
          borderBottomColor: '#CCCCCC',
          borderTopColor: '#CCCCCC',
          borderTopWidth: 1,
          marginRight: widthPercentage(10),
        },
        questText : {
          fontSize: fontPercentage(17),
          paddingHorizontal: widthPercentage(20),
          paddingVertical: heightPercentage(20),
        },
      });

    return(
        <View style={styles.container}>
          <Text style={styles.questText}>{questContent}</Text>
        </View>
    );
};

export default AchievementList;