import { AutoStoriesTwoTone } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Text, Image } from 'react-native';
import { Button } from "@react-native-material/core";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
                    alert('성공')
                    AsyncStorage.setItem('asyncUserId', id)
                    AsyncStorage.getItem('asyncUserId', (err, res) => {
                        console.log(res)
                    })
                    navigation.navigate('stack')
                }
                else {
                    alert('회원가입을 완료하기 위해서는 모두 입력해주시기 바랍니다.')
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
            marginTop: 100,
        },

        row: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        touchArea: {
            marginTop: 10,
        },
        img: {
            justifyContent: "center",
            alignItems: "center",
            width: 180,
            height: 100,
        },
        logo: {
            marginTop: 7,
        },
        Textinput: {
            marginTop: 10,
            marginBottom: 5,
            paddingHorizontal: 10,
            height: 40,
            width: 210,
            borderRadius: 5,
            borderColor: 'gray',
            borderWidth: 1
        },
        TextInputMargin: {
            marginTop: 80,
        },
        LoginButtin: {
            margin: 10,
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
            width: 210,
        }
    });
    return (
        <View style={styles.background}>
            <Image source={require('../../assets/images/logo.png')} style={styles.img} />
            <View style={styles.TextInputMargin}>
                <TextInput
                    style={styles.Textinput}
                    onChangeText={(text) => { setId(text) }}
                    placeholder="아이디"
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.Textinput}
                    onChangeText={(text) => { setPassword(text) }}
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