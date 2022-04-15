import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, Button } from 'react-native';
import { images } from '../common/images';
import AchievementList from '../components/Achivement/AchievementList';
import { widthPercentage, heightPercentage, fontPercentage } from '../common/responsiveSize';

const WorldDetailScreen = ({ route, navigation }) => {
  var { world } = route.params;
  var worldId = JSON.stringify(world);

  type quest = {
    questContent: string,
  };

  type eduWorld = {
    worldIdx: number,
    worldName: string,
    worldContent: string,
    worldSceneId: number,
    worldCategory: string,
    worldImg: number,
    doneQuest: Array<quest>,
  };

  const [eduWorlds, setResult] = useState<eduWorld>({
    worldIdx: 0,
    worldName: '',
    worldContent: '',
    worldSceneId: 0,
    worldCategory: '',
    worldImg: 0,
    doneQuest: [],
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
    getWorlds();
  });

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
        height: heightPercentage(200),
        opacity: 0.6,
    },
    detailContainer: {
        marginLeft: widthPercentage(10),
    },
    titleContainer: {
        marginTop: heightPercentage(30),
        top: -heightPercentage(80),
    },
    nameText: {
        fontSize: fontPercentage(30),
        color: '#333333',
    },
    contentTitle: {
      fontSize: fontPercentage(20),
      marginTop: heightPercentage(25),
    },
    contentText: {
      fontSize: fontPercentage(18),
      marginTop: heightPercentage(10),
    },
    questTitle: {
      fontSize: fontPercentage(20),
      marginTop: heightPercentage(15),
    },
    listContainer: {
      marginTop: heightPercentage(20),
    },
    noneContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: heightPercentage(30),
    },
    noneImg: {
      width: widthPercentage(100),
      height: heightPercentage(100),
      resizeMode: 'contain',
    },
    noneText: {
      fontSize: fontPercentage(18),
      marginTop: heightPercentage(10),
    },
    playButton: {
      alignItems: 'center',
      marginTop: heightPercentage(25),
    }
  });

  return (
      <ScrollView style={styles.container}>
        <Image source={img} style={styles.coverImg} />
        <View style={styles.detailContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.nameText}>{eduWorlds.worldName}</Text>
              <Text style={styles.contentTitle}>[ 설명 ]</Text>
              <Text style={styles.contentText}>{eduWorlds.worldContent}</Text>
              <View style={styles.playButton}>
                <View style={{width: widthPercentage(200), height: heightPercentage(50)}}>
                  <Button
                    title={'플레이'}
                    // onPress={() => {
                    //   this.setState({isVisible: true});
                      // }}
                    color={'#4641D9'}
                  />
                </View>
              </View>
              <Text style={styles.questTitle}>[ 달성한 퀘스트 ]</Text>
              {eduWorlds.doneQuest.length > 0 ? (
                <View style={styles.listContainer}>
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
              ) : (
                <View style={styles.noneContainer}>
                  <Image source={require('../../assets/images/rank/sad.png')} style={styles.noneImg}/>
                  <Text style={styles.noneText}>달성한 퀘스트가 없습니다!</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default WorldDetailScreen;