import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView } from 'react-native';
import { images } from '../common/images';
import axios from 'axios';
import WorldList from '../components/World/WorldList';

const HomeScreen = ({ navigation }) => {
  type world = {
    worldIdx: number,
    worldName: string,
    worldImg: number,
    worldCategory: string,
  };

  const [worlds, setResult] = useState<Array<world>>([]);
  let edu = [];
  let game = [];

  const getWorlds = async () => {
    axios
      .get(`http://oneline1-dev.eba-njfq6hmd.us-east-1.elasticbeanstalk.com/api/World`)
      .then(({ data }) => {
        setResult(data);
      })
      .catch((e) => {
        // API 호출이 실패한 경우
        console.error(e); // 에러표시
      });
  };

  useEffect(() => {
    getWorlds();
  });

  if(worlds.length > 0) {
    for(var i = 0; i < worlds.length; i++){
      if(worlds[i].worldCategory === 'edu'){
        edu.push(worlds[i]);
      }
      else if(worlds[i].worldCategory === 'game'){
        game.push(worlds[i]);
      }
    }
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
    text: {
      fontSize: 20,
      alignItems: 'flex-start',
      marginLeft: 40,
    },
    list: {
      margin: 20,
      flex: 1,
    },
  });
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/images/main/adver.jpg')} style={styles.img} />
      <Text style={styles.text}>교육</Text>
      <FlatList
        data={edu}
        keyExtractor={(item) => item.worldIdx.toString()}
        renderItem={({ item }) => (
          <WorldList
            {...item}
          />
        )}
        style={styles.list}
        numColumns={2}
      //nestedScrollEnabled
      />
      <Text style={styles.text}>게임</Text>
      <FlatList
        data={game}
        keyExtractor={(item) => item.worldIdx.toString()}
        renderItem={({ item }) => (
          <WorldList
            {...item}
          />
        )}
        style={styles.list}
        numColumns={2}
      //nestedScrollEnabled
      />
    </ScrollView>
  );
};

export default HomeScreen;