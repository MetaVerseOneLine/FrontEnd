import { Style } from '@mui/icons-material';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { images } from '../../common/images';
import { theme } from '../../common/theme';

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

const WorldList = ({world_idx, world_name, world_img, world_category}) => {
    var img;
    switch (world_img) {
        case 0:
            img = images.koreanImg;
            break;
        case 1:
            img = images.mathImg;
            break;
        case 2:
            img = images.socialImg;
            break;
        case 3:
            img = images.scienceImg;
            break;
        case 4:
            img = images.kartImg;
            break;
        case 5:
            img = images.gameImg;
            break;
    }

    return(
        <View style={styles.container}>
            <Card>
                <Card.Cover source={img} style={{ width: 150, height: 130, resizeMode: 'contain' }}/>
                <Title style={{marginTop: 10, marginLeft: 3, fontSize: 17}}>{world_name}</Title>
            </Card>
        </View>
    );
};

export default WorldList;