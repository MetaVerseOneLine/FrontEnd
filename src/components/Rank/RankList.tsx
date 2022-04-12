import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RankList = ({ userId, userName, worldName, score, rank, firstUserId, firstUserName, firstScore, secondUserId, secondUserName, secondScore, thirdUserId, thirdUserName, thirdScore }) => {
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#FFFFFF',
          marginHorizontal: 10,
          marginTop: 10,
          padding: 4,
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
        myRankBox: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderBottomColor: '#CCCCCC',
            borderBottomWidth: 1,
            borderTopColor: '#CCCCCC',
            borderTopWidth: 1,
            padding: 10,
            backgroundColor: 'rgba(181, 178, 255, 0.5)',
        },
        rankTitle: {
            fontSize: 20,
            marginVertical: 12,
        },
        rankText: {
            fontSize: 17,
        }
      });

    return(
        <View style={styles.container}>
            <Text style={styles.rankTitle}>{worldName}</Text>
            <View style={styles.rankBox}>
                <Text style={styles.rankText}>순위</Text>
                <Text style={styles.rankText}>이름</Text>
                <Text style={styles.rankText}>점수</Text>
            </View>
            <View style={styles.myRankBox}>
                <Text style={styles.rankText}>{rank}</Text>
                <Text style={styles.rankText}>{userName}</Text>
                <Text style={styles.rankText}>{score}</Text>
            </View>
            <View style={styles.rankBox}>
                <Text style={styles.rankText}>1</Text>
                <Text style={styles.rankText}>{firstUserName}</Text>
                <Text style={styles.rankText}>{firstScore}</Text>
            </View>
            {secondUserId ? (
                <View style={styles.rankBox}>
                    <Text style={styles.rankText}>2</Text>
                    <Text style={styles.rankText}>{secondUserName}</Text>
                    <Text style={styles.rankText}>{secondScore}</Text>
                </View>
            ) : (
                <View style={styles.rankBox}>
                    <Text style={styles.rankText}>2</Text>
                    <Text style={styles.rankText}>-</Text>
                    <Text style={styles.rankText}>-</Text>
                </View>
            )}
            {thirdUserId ? (
                <View style={styles.rankBox}>
                    <Text style={styles.rankText}>3</Text>
                    <Text style={styles.rankText}>{thirdUserName}</Text>
                    <Text style={styles.rankText}>{thirdScore}</Text>
                </View>
            ) : (
                <View style={styles.rankBox}>
                    <Text style={styles.rankText}>3</Text>
                    <Text style={styles.rankText}>-</Text>
                    <Text style={styles.rankText}>-</Text>
                </View>
            )}
        </View>
    );
};

export default RankList;