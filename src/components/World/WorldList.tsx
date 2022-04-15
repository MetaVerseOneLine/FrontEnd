import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import { images } from '../../common/images';
import { widthPercentage, heightPercentage, fontPercentage } from '../../common/responsiveSize';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      marginLeft: widthPercentage(17),
      marginTop: heightPercentage(10),
      borderWidth: 1,
      borderColor: '#C2C2C2',
      borderRadius: 10,
      borderStyle: 'solid',
      paddingHorizontal: widthPercentage(4),
      paddingVertical: heightPercentage(4),
    },
  });

const WorldList = ({worldIdx, worldName, worldImg, worldCategory}) => {
    var img;
    switch (worldImg) {
        case 1:
            img = images.scienceImg;
            break;
        case 2:
            img = images.kartImg;
            break;
        case 3:
            img = images.koreanImg;
            break;
        case 4:
            img = images.mathImg;
            break;
        case 5:
            img = images.socialImg;
            break;
        case 6:
            img = images.gameImg;
            break;
    }

    return(
        <View style={styles.container}>
            <Card>
                <Card.Cover source={img} style={{ width: widthPercentage(150), height: heightPercentage(130), resizeMode: 'contain' }}/>
                <Title style={{marginTop: heightPercentage(10), marginLeft: widthPercentage(3), fontSize: fontPercentage(16)}}>{worldName}</Title>
            </Card>
        </View>
    );
};

export default WorldList;