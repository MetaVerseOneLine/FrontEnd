import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Image } from 'react-native';
import { images } from '../common/images';

const WorldDetailScreen = ({ route, navigation }) => {
  var { world } = route.params;
  var worldId = JSON.stringify(world);

  type rank = {
    worldName : string,
    firstUserId : string,
    firstUserName : string,
    firstScore : number,
    secondUserId : string,
    secondUserName : string,
    secondScore : number,
    thirdUserId : string,
    thirdUserName : string,
    thirdScore : number,
    fourthUserId : string,
    fourthUserName : string,
    fourthScore : number,
    fifthUserId : string,
    fifthUserName : string,
    fifthScore : number,
  };

  type gameWorld = {
    worldIdx : number,
    worldName : string,
    worldContent : string,
    worldSceneId : number,
    worldCategory : string,
    worldImg : number,
    worldRank5 : rank,
  };

  const [gameWorlds, setResult] = useState<gameWorld>({
    worldIdx : 0,
    worldName : '',
    worldContent : '',
    worldSceneId : 0,
    worldCategory : '',
    worldImg : 0,
    worldRank5 : {
      worldName : '',
      firstUserId : '',
      firstUserName : '',
      firstScore : 0,
      secondUserId : '',
      secondUserName : '',
      secondScore : 0,
      thirdUserId : '',
      thirdUserName : '',
      thirdScore : 0,
      fourthUserId : '',
      fourthUserName : '',
      fourthScore : 0,
      fifthUserId : '',
      fifthUserName : '',
      fifthScore : 0,
    },
  });

  const [asyncUserId, setId] = useState<String>('');
  AsyncStorage.getItem('asyncUserId', (err, res) => {
    setId(res);
  });

  const getWorlds = async () => {
    axios.post('http://oneline1-dev.eba-njfq6hmd.us-east-1.elasticbeanstalk.com/api/World/Detail', {
            worldIdx: worldId,
            userId: asyncUserId,
        }).then(
            res => {
              setResult(res.data);
            }
        ).catch(err => console.log(err))
  };

  useEffect(() => {
    getWorlds();
  });

  var img;
  switch (gameWorlds.worldImg) {
  case 2:
      img = images.kartImg;
      break;
  case 6:
      img = images.gameImg;
      break;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      width: '100%',
      height: '100%',
    },
    coverImg: {
        width: '100%',
        height: 200,
        opacity: 0.6,
    },
    detailContainer: {
        marginLeft: 10,
    },
    titleContainer: {
        marginTop: 30,
        top: -80,
    },
    nameText: {
        fontSize: 30,
        color: '#333333',
    },
    contentText: {
      fontSize: 18,
      marginTop: 25,
    }
  });

  return (
      <View style={styles.container}>
        <Image source={img} style={styles.coverImg} />
        <View style={styles.detailContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.nameText}>{gameWorlds.worldName}</Text>
              <Text style={styles.contentText}>{gameWorlds.worldContent}</Text>
            </View>
        </View>
      </View>
  );
};

export default WorldDetailScreen;