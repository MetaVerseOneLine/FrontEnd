import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from '../../common/images';

const AchievementList = ({ Quest_content }) => {
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          marginHorizontal: 40,
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
            <Image source={require('../../../assets/images/achievement/medal.png')} style={styles.medalImg} />
            <Text style={styles.questText}>{Quest_content}</Text>
        </View>
    );
};

export default AchievementList;