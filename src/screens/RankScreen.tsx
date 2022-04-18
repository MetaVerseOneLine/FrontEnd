import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import RankList from '../components/Rank/RankList';
import { widthPercentage, heightPercentage, fontPercentage } from '../common/responsiveSize';

const RankScreen = ({ navigation }) => {
  type rank = {
    userId : string,
    userName : string,
    worldName : string,
    score : string,
    rank: number,
    firstUserId : string,
    firstUserName : string,
    firstScore : string,
    secondUserId : string,
    secondUserName : string,
    secondScore : number,
    thirdUserId : string,
    thirdUserName : string,
    thirdScore : string,
  };

  const [asyncUserId, setId] = useState<String>('');
  AsyncStorage.getItem('asyncUserId', (err, res) => {
    setId(res);
  });

  // const asyncUserId = 'test';

  const [ranks, setResult] = useState<Array<rank>>([]);

  const getRanks = async () => {
    axios
      .get(`http://oneline1-dev.eba-njfq6hmd.us-east-1.elasticbeanstalk.com/api/Score/${asyncUserId}`)
      .then(({ data }) => {
        setResult(data);
      })
      .catch((e) => {
        // API 호출이 실패한 경우
        console.error(e); // 에러표시
      });
  };

  useEffect(() => {
    if (asyncUserId.length != 0) getRanks();
  }, [asyncUserId]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    title: {
      fontSize: fontPercentage(27),
      marginLeft: widthPercentage(15),
      marginTop: heightPercentage(10),
      fontFamily: 'GmarketSansTTFBold',
    },
    noneContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    noneImg: {
      width: widthPercentage(100),
      height: heightPercentage(100),
      resizeMode: 'contain',
    },
    noneText: {
      fontSize: fontPercentage(18),
      marginTop: heightPercentage(10),
      fontFamily: 'NanumSquareR'
    }
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⭐랭킹⭐</Text>
        {ranks.length > 0 ? (
        <ScrollView>
          <FlatList
            data={ranks}
            renderItem={({ item }) => (
              <RankList
                {...item}
              />
            )}
          />
        </ScrollView>
        ):(
        <View style={styles.noneContainer}>
          <Image source={require('../../assets/images/rank/sad.png')} style={styles.noneImg}/>
          <Text style={styles.noneText}>참여한 월드가 없습니다!</Text>
        </View>
        )}
    </View>
  );
};

export default RankScreen;