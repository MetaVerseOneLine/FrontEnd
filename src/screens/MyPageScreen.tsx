import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';
import { images } from '../common/images';
import AchievementList from '../components/Achivement/AchievementList';

const MyPageScreen = ({ navigation }) => {
  type user = {
    userId : string,
    userName : string,
    userContent : string,
    userImg : string,
  };

  type achievement = {
    doneQuest : Array<quest>,
    total : number,
  };

  type quest = {
    questContent : string,
  };

  const [asyncUserId, setId] = useState<String>('');
  AsyncStorage.getItem('asyncUserId', (err, res) => {
    setId(res);
  });

  // const asyncUserId = 'test';

  const [userInfo, setUserInfo] = useState<user>({
    userId : '',
    userName : '',
    userContent : '',
    userImg : '',
  });

  const [achInfo, setAchInfo] = useState<achievement>({
    doneQuest : [],
    total : 0,
  });

  const getUser = async () => {
    axios
      .get(`http://oneline1-dev.eba-njfq6hmd.us-east-1.elasticbeanstalk.com/api/User/${asyncUserId}`)
      .then(({ data }) => {
        setUserInfo(data);
      })
      .catch((e) => {
        // API 호출이 실패한 경우
        console.error(e); // 에러표시
      });
  };
  
  const getAchivement = async () => {
    axios
      .get(`http://oneline1-dev.eba-njfq6hmd.us-east-1.elasticbeanstalk.com/api/Achievement/${asyncUserId}`)
      .then(({ data }) => {
        setAchInfo(data);
      })
      .catch((e) => {
        // API 호출이 실패한 경우
        console.error(e); // 에러표시
      });
  };

  useEffect(() => {
    if (asyncUserId.length != 0) getUser();
  }, [asyncUserId]);

  useEffect(() => {
    if (asyncUserId.length != 0) getAchivement();
  }, [asyncUserId]);

  var percent;
  if(achInfo.total == 0) {
    percent = 0;
  }
  else {
    percent = achInfo.total / 100;
  }

  var img;
  switch (userInfo.userImg) {
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
    profileImg : {
      width: '100%',
      height: 110,
    },
    name : {
      fontSize: 22,
    },
    content : {
      fontSize: 15,
      marginTop: 5,
    },
    achTitle : {
      marginLeft: 15,
      marginVertical: 10,
      fontSize: 20,
    },
    progressSection: {
      alignContent: 'center',
      marginHorizontal: 20,
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
            <Image source={img} style={styles.profileImg}/>
          </View>
          <Text style={styles.name}>{userInfo.userName}</Text>
          <Text style={styles.content}>{userInfo.userContent}</Text>
        </View>
        <Text style={styles.achTitle}>성취도</Text>
        <View style={styles.progressSection}>
          <Text style={styles.progressText}>{Math.floor(achInfo.total)}%</Text>
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
            data={achInfo.doneQuest}
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
    </ScrollView>
  );
};

export default MyPageScreen;