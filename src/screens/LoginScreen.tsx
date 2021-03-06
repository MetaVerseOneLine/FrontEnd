import { AutoStoriesTwoTone } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Text, Image, Alert, BackHandler } from 'react-native';
import { Button } from "@react-native-material/core";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentage, heightPercentage, fontPercentage } from '../common/responsiveSize';

const LoginScreen = ({ navigation }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        AsyncStorage.setItem('asyncUserId', id)
    })
    const LoginRequest = async () => {
        axios.post('http://oneline1-dev.eba-njfq6hmd.us-east-1.elasticbeanstalk.com/api/User/Login', {
            userId: id,
            userPassword: password,
        }).then(
            //localstorage에 저장해야한다.
            res => {
                console.log("OK")
                if (res.data.statusCode == 201) {
                    AsyncStorage.setItem('asyncUserId', id)
                    Alert.alert("Login", "로그인 되었습니다.", [
                        {
                            text: "확인", onPress: () => {
                                // setId('')
                                // setPassword('')
                                navigation.navigate('Tab')
                            }
                        }
                    ]);
                }
                else {
                    Alert.alert("오류", `${res.data.message}`, [
                        {
                            text: "확인",
                        }
                    ]);
                }

            }
        ).catch(err => console.log(err))
    }

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
            width: widthPercentage(180),
            height: heightPercentage(100),
            resizeMode: 'contain',
        },
        logo: {
            marginTop: heightPercentage(7),
        },
        Textinput: {
            marginTop: heightPercentage(10),
            marginBottom: heightPercentage(5),
            paddingHorizontal: widthPercentage(10),
            height: heightPercentage(42),
            width: widthPercentage(210),
            borderRadius: 5,
            borderColor: 'gray',
            borderWidth: 1
        },
        TextInputMargin: {
            marginTop: heightPercentage(80),
        },
        LoginButtin: {
            marginHorizontal: widthPercentage(10),
            marginVertical: heightPercentage(10),
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
            width: widthPercentage(210),
        }
    });
    return (
        <View style={styles.background}>
            <Image source={require('../../assets/images/logo.png')} style={styles.img} />
            <View style={styles.TextInputMargin}>
                <TextInput
                    style={styles.Textinput}
                    onChangeText={(text) => { setId(text) }}
                    value={id}
                    placeholder="아이디"
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.Textinput}
                    onChangeText={(text) => { setPassword(text) }}
                    value={password}
                    placeholder="비밀번호"
                />
            </View>
            <View style={styles.LoginButtin}>
                <Button title="로그인" color='#242424' onPress={() => {
                    LoginRequest()
                }} />
            </View>
            <Text onPress={() => navigation.navigate('Register')}>회원가입</Text>
        </View>
    )
}
export default LoginScreen;