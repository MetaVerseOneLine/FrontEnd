import React,  { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView } from 'react-native';
import { images } from '../common/images';
import axios from 'axios';
import WorldList from '../components/World/WorldList';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  type world = {
    world_idx : number,
    world_name : string,
    world_img : number,
    world_category : string,
  };

  const [worlds, setResult] = useState<Array<world>>([]);
  // const [edu, setEdu] = useState<Array<world>>([]);
  // const [game, setGame] = useState<Array<world>>([]);

  const edu = [{world_idx : 0, world_name : "국어", world_img : 0, world_category : "edu"}, 
  {world_idx : 1, world_name : "수학", world_img : 1, world_category : "edu"},
  {world_idx : 2, world_name : "사회", world_img : 2, world_category : "edu"},
  {world_idx : 3, world_name : "과학", world_img : 3, world_category : "edu"},];

  const game = [{world_idx : 4, world_name : "카트", world_img : 4, world_category : "game"}, 
  {world_idx : 5, world_name : "게임", world_img : 5, world_category : "game"}];

  // const getWorlds = async () => {
  //   axios
  //     .get(`http://localhost:8080//World`)
  //     .then(({ data }) => {
  //       setResult(data);
  //       for(var i = 0; i < worlds.length; i++){
  //         if(worlds[i].world_category === 'edu'){
  //           setEdu(edu.concat(worlds[i]));
  //         }
  //         else if(worlds[i].world_category === 'game'){
  //           setGame(game.concat(worlds[i]));
  //         }
  //       }
  //     })
  //     .catch((e) => {
  //       // API 호출이 실패한 경우
  //       console.error(e); // 에러표시
  //     });
  // };


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
          keyExtractor={(item) => item.world_idx.toString()}
          renderItem={({ item }) => (
            <WorldList
              {...item}
            />
          )}
          style={styles.list}
          numColumns={2}
          nestedScrollEnabled
        />
      <Text style={styles.text}>게임</Text>
        <FlatList
          data={game}
          keyExtractor={(item) => item.world_idx.toString()}
          renderItem={({ item }) => (
            <WorldList
              {...item}
            />
          )}
          style={styles.list}
          numColumns={2}
          nestedScrollEnabled
        />
    </ScrollView>
  );
};

export default HomeScreen;