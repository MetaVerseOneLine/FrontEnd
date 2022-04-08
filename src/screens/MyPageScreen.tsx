import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';
import { images } from '../common/images';
import AchievementList from '../components/Achivement/AchievementList';

const MyPageScreen = ({ navigation }) => {
  type user = {
    UserId: string,
    UserName: string,
    UserContent: string,
    UserImg: string,
  };

  type achievement = {
    DoneQuest: Array<quest>,
    Total: number,
  };

  type quest = {
    Quest_content: string,
  };

  const userInfo = { UserId: 'aa', UserName: 'seo-yeon', UserContent: '안녕하세요. seo-yeon 입니다.', UserImg: '1', };
  const achInfo = { DonQuest: [{ Quest_content: '리트머스 실험' }, { Quest_content: '불꽃 변화 실험' }, { Quest_content: '전류 변화 실험' }, { Quest_content: '돋보기 실험' }, { Quest_content: '부력 실험' }], Total: 43 };

  // const [userId, setId] = useState<String>('');
  // AsyncStorage.getItem('userId', (err, res) => {
  //   setId(res);
  // });

  // const [userInfo, setUserInfo] = useState<user>({
  //   UserId : '',
  //   UserName : '',
  //   UserContent : '',
  //   UserImg : '',
  // });

  // const [achInfo, setAchInfo] = useState<achievement>({
  //   DoneQuest : [],
  //   Total : 0,
  // });

  // const getUser = async () => {
  //   axios
  //     .get(`http://localhost:8080/User/${userId}`)
  //     .then(({ data }) => {
  //       setUserInfo(data);
  //     })
  //     .catch((e) => {
  //       // API 호출이 실패한 경우
  //       console.error(e); // 에러표시
  //     });
  // };

  // const getAchivement = async () => {
  //   axios
  //     .get(`http://localhost:8080/Achievement/${userId}`)
  //     .then(({ data }) => {
  //       setAchInfo(data);
  //     })
  //     .catch((e) => {
  //       // API 호출이 실패한 경우
  //       console.error(e); // 에러표시
  //     });
  // };

  var percent;
  if (achInfo.Total == 0) {
    percent = 0;
  }
  else {
    percent = achInfo.Total / 100;
  }

  var img;
  switch (userInfo.UserImg) {
    case '1':
      img = images.pro01;
      break;
    case '2':
      img = images.pro02;
      break;
    case '3':
      img = images.pro03;
      break;
    case '4':
      img = images.pro04;
      break;
    case '5':
      img = images.pro05;
      break;
    case '6':
      img = images.pro06;
      break;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      margin: 0,
      padding: 0,
    },
    img: {
      width: '100%',
      height: 250,
      resizeMode: 'contain',
      margin: 0,
      padding: 0,
    },
    myPageContent: {
      top: -70,
    },
    profileContent: {
      alignItems: 'center',
      paddingBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#C2C2C2',
    },
    iconImg: {
      width: 120,
      height: 120,
      borderRadius: 60,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 0,
    },
    profileImg: {
      width: '100%',
      height: 110,
    },
    name: {
      fontSize: 22,
    },
    content: {
      fontSize: 15,
      marginTop: 5,
    },
    achTitle: {
      marginLeft: 15,
      marginVertical: 10,
      fontSize: 20,
    },
    progressSection: {
      alignContent: 'center',
      marginHorizontal: 10,
      flexDirection: 'row',
    },
    progressText: {
      fontSize: 17,
    },
    progress: {
      width: '90%',
      justifyContent: 'center',
      marginHorizontal: 10,
    },
    questContent: {
      alignItems: 'center',
    }
  });
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/images/mypage/back.jpg')} style={styles.img} />
      <View style={styles.myPageContent}>
        <View style={styles.profileContent}>
          <View style={styles.iconImg}>
            <Image source={img} style={styles.profileImg} />
          </View>
          <Text style={styles.name}>{userInfo.UserName}</Text>
          <Text style={styles.content}>{userInfo.UserContent}</Text>
        </View>
        <Text style={styles.achTitle}>성취도</Text>
        <View style={styles.progressSection}>
          <Text style={styles.progressText}>{achInfo.Total}%</Text>
          <View style={styles.progress}>
            <Progress.Bar
              progress={percent}
              width={null}
              height={10}
              color={"rgba(51, 65, 159, 0.8)"}
              borderColor={"#CCCCCC"}
            />
          </View>
        </View>
        <View style={styles.questContent}>
          <FlatList
            data={achInfo.DonQuest}
            renderItem={({ item }) => (
              <AchievementList
                {...item}
              />
            )}
            numColumns={2}
          //nestedScrollEnabled
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MyPageScreen;