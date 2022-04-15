import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentage, heightPercentage, fontPercentage } from '../../common/responsiveSize';

const RankList = ({ userId, userName, worldName, score, rank, firstUserId, firstUserName, firstScore, secondUserId, secondUserName, secondScore, thirdUserId, thirdUserName, thirdScore }) => {
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#FFFFFF',
          marginHorizontal: widthPercentage(10),
          marginTop: heightPercentage(10),
          paddingHorizontal: widthPercentage(4),
          paddingVertical: heightPercentage(4),
        },
        rankBox: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderBottomColor: '#CCCCCC',
            borderBottomWidth: 1,
            borderTopColor: '#CCCCCC',
            borderTopWidth: 1,
            paddingHorizontal: widthPercentage(10),
            paddingVertical: heightPercentage(10),
        },
        myRankBox: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderBottomColor: '#CCCCCC',
            borderBottomWidth: 1,
            borderTopColor: '#CCCCCC',
            borderTopWidth: 1,
            paddingHorizontal: widthPercentage(10),
            paddingVertical: heightPercentage(10),
            backgroundColor: 'rgba(181, 178, 255, 0.5)',
        },
        rankTitle: {
            fontSize: fontPercentage(20),
            marginVertical: heightPercentage(12),
        },
        rankText: {
            fontSize: fontPercentage(17),
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