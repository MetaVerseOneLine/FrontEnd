import { AutoStoriesTwoTone } from '@mui/icons-material';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from "@react-native-material/core";
import { widthPercentage, heightPercentage, fontPercentage } from '../common/responsiveSize';

const FirstScreen = ({ navigation }) => {
    // style
    const styles = StyleSheet.create({
        background: {
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            backgroundColor: '#FFFFFF',
        },

        button: {
            justifyContent: "center",
            alignItems: "center",
            marginTop: heightPercentage(100),
        },

        row: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        touchArea: {
            marginTop: heightPercentage(10),
        },
        img: {
            justifyContent: "center",
            alignItems: "center",
            width: widthPercentage(220),
            height: heightPercentage(140),
            resizeMode: 'contain',
        },
        logo: {
            marginTop: heightPercentage(7),
        },
    });
    return (
        <View style={styles.background}>
            <Image source={require('../../assets/images/logo.png')} style={styles.img} />
            <View style={styles.button}>
                <Button style={{width: widthPercentage(200)}} title="로그인" color='#242424' onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    );
}
export default FirstScreen;