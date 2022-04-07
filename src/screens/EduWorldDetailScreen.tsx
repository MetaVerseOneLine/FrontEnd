import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { images } from '../common/images';
import AchievementList from '../components/Achivement/AchievementList';

const WorldDetailScreen = ({ route, navigation }) => {
  var { world } = route.params;
  var worldId = JSON.stringify(world);

  type quest = {
    questContent : string,
  };

  type eduWorld = {
    worldIdx : number,
    worldName : string,
    worldContent : string,
    worldSceneId : number,
    worldCategory : string,
    worldImg : number,
    doneQuest : Array<quest>,
  };

  const [eduWorlds, setResult] = useState<eduWorld>({
    worldIdx : 0,
    worldName : '',
    worldContent : '',
    worldSceneId : 0,
    worldCategory : '',
    worldImg : 0,
    doneQuest : [],
  });

  const [asyncUserId, setId] = useState<String>('');
  AsyncStorage.getItem('asyncUserId', (err, res) => {
    setId(res);
  });

  const getWorlds = async () => {
    axios.post('http://oneline1-dev.eba-njfq6hmd.us-east-1.elasticbeanstalk.com/api/World/Detail', {
            worldIdx: worldId,
            userId: asyncUserId,
        })
        .then(({ data }) => {
          setResult(data);
        })
        .catch(err => console.log(err))
  };

  useEffect(() => {
    if (asyncUserId.length != 0) getWorlds();
  }, [asyncUserId]);

  var img;
  switch (eduWorlds.worldImg) {
  case 1:
      img = images.scienceImg;
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
              <Text style={styles.nameText}>{eduWorlds.worldName}</Text>
              <Text style={styles.contentText}>{eduWorlds.worldContent}</Text>
              <FlatList
                data={eduWorlds.doneQuest}
                renderItem={({ item }) => (
                <AchievementList
                  {...item}
                />
                )}
                // numColumns={2}
                nestedScrollEnabled
              />
            </View>
        </View>
      </View>
  );
};

export default WorldDetailScreen;