import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import { images } from '../../common/images';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      marginLeft: 17,
      marginTop: 10,
      borderWidth: 1,
      borderColor: '#C2C2C2',
      borderRadius: 10,
      borderStyle: 'solid',
      padding: 4,
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
                <Card.Cover source={img} style={{ width: 150, height: 130, resizeMode: 'contain' }}/>
                <Title style={{marginTop: 10, marginLeft: 3, fontSize: 17}}>{worldName}</Title>
            </Card>
        </View>
    );
};

export default WorldList;