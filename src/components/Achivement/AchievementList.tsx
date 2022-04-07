import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from '../../common/images';

const AchievementList = ({ questContent }) => {
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          marginHorizontal: 10,
          marginTop: 10,
          padding: 4,
        },
        medalImg: {
          width: 100,
          resizeMode: 'contain',
        },
        questText : {
          fontSize: 17,
        },
      });

    return(
        <View style={styles.container}>
            {/* <Image source={require('../../../assets/images/achievement/medal.png')} style={styles.medalImg} /> */}
            <Text style={styles.questText}>{questContent}</Text>
        </View>
    );
};

export default AchievementList;