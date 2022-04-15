import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { images } from '../common/images';

const WorldDetailScreen = ({ route, navigation }) => {
  var { world } = route.params;
  var worldId = JSON.stringify(world);

  type rank = {
    worldName : string,
    firstUserId : string,
    firstUserName : string,
    firstScore : string,
    secondUserId : string,
    secondUserName : string,
    secondScore : string,
    thirdUserId : string,
    thirdUserName : string,
    thirdScore : string,
    forthUserId : string,
    forthUserName : string,
    forthScore : string,
    fifthUserId : string,
    fifthUserName : string,
    fifthScore : string,
  };

  type gameWorld = {
    worldIdx: number,
    worldName: string,
    worldContent: string,
    worldSceneId: number,
    worldCategory: string,
    worldImg: number,
    worldRank5: rank,
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
      firstScore : '',
      secondUserId : '',
      secondUserName : '',
      secondScore : '',
      thirdUserId : '',
      thirdUserName : '',
      thirdScore : '',
      forthUserId : '',
      forthUserName : '',
      forthScore : '',
      fifthUserId : '',
      fifthUserName : '',
      fifthScore : '',
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
    contentTitle: {
      fontSize: 20,
      marginTop: 25,
    },
    contentText: {
      fontSize: 18,
      marginTop: 10,
    },
    questTitle: {
      fontSize: 20,
      marginVertical: 15,
    },
    rankBox: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderBottomColor: '#CCCCCC',
      borderBottomWidth: 1,
      borderTopColor: '#CCCCCC',
      borderTopWidth: 1,
      padding: 10,
    },
    rankTitle: {
      fontSize: 20,
      marginVertical: 12,
    },
    rankText: {
      fontSize: 17,
    },
    playButton: {
      alignItems: 'center',
      marginTop: 25,
    }
  });

  return (
      <ScrollView style={styles.container}>
        <Image source={img} style={styles.coverImg} />
        <View style={styles.detailContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.nameText}>{gameWorlds.worldName}</Text>
              <Text style={styles.contentTitle}>[ 설명 ]</Text>
              <Text style={styles.contentText}>{gameWorlds.worldContent}</Text>
              <View style={styles.playButton}>
                <View style={{width: 200, height: 50}}>
                  <Button
                    title={'플레이'}
                    // onPress={() => {
                    //   this.setState({isVisible: true});
                      // }}
                    color={'#4641D9'}
                  />
                </View>
              </View>
              <Text style={styles.questTitle}>[ Top 5 ]</Text>
              <View style={styles.rankBox}>
                <Text style={styles.rankText}>순위</Text>
                <Text style={styles.rankText}>이름</Text>
                <Text style={styles.rankText}>점수</Text>
              </View>
              <View style={styles.rankBox}>
                <Text style={styles.rankText}>1</Text>
                <Text style={styles.rankText}>{gameWorlds.worldRank5.firstUserName}</Text>
                <Text style={styles.rankText}>{gameWorlds.worldRank5.firstScore}</Text>
              </View>
              <View style={styles.rankBox}>
                <Text style={styles.rankText}>2</Text>
                <Text style={styles.rankText}>{gameWorlds.worldRank5.secondUserName}</Text>
                <Text style={styles.rankText}>{gameWorlds.worldRank5.secondScore}</Text>
              </View>
              <View style={styles.rankBox}>
                <Text style={styles.rankText}>3</Text>
                <Text style={styles.rankText}>{gameWorlds.worldRank5.thirdUserName}</Text>
                <Text style={styles.rankText}>{gameWorlds.worldRank5.thirdScore}</Text>
              </View>
              <View style={styles.rankBox}>
                <Text style={styles.rankText}>4</Text>
                <Text style={styles.rankText}>{gameWorlds.worldRank5.forthUserName}</Text>
                <Text style={styles.rankText}>{gameWorlds.worldRank5.forthScore}</Text>
              </View>
              <View style={styles.rankBox}>
                <Text style={styles.rankText}>5</Text>
                <Text style={styles.rankText}>{gameWorlds.worldRank5.fifthUserName}</Text>
                <Text style={styles.rankText}>{gameWorlds.worldRank5.fifthScore}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default WorldDetailScreen;