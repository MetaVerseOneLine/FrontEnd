import { AutoStoriesTwoTone } from '@mui/icons-material';
import React, { Profiler, useState } from 'react';
import { TextInput, StyleSheet, View, Text, Image } from 'react-native';
import { Button, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const UselessTextInput = (props) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={40}
        />
    );
}

const RegisterScreen = ({ navigation }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setComfirm] = useState('')
    const [profile, setProfile] = useState('')
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
        confirmButton: {
            marginTop: 40,
            margin: 10,
            marginBottom: 5,
            justifyContent: "center",
            alignItems: "center",
            borderColor: 'black',
            borderWidth: 1,
            height: 40,
        },
        row: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        touchArea: {
            marginTop: 10,
        },
        img: {
            justifyContent: "center",
            alignItems: "center",
            width: 45,
            height: 25,
            margin: 10,
        },
        TextinputId: {
            marginTop: 40,
            margin: 10,
            marginBottom: 5,
            height: 40,
            width: 113,
            borderRadius: 5,
            borderColor: 'gray',
            borderWidth: 1,
        },
        TextinputPassword: {
            marginTop: 10,
            marginBottom: 5,
            paddingHorizontal: 10,
            height: 40,
            borderRadius: 5,
            borderColor: 'gray',
            borderWidth: 1,
            width: 225,
        },
        TextInputMargin: {
            marginTop: 40,
        },
        RegisterButton: {
            margin: 10,
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
            width: 225,
        },
        header: {
            flexDirection: 'row',
        },
        registerFont: {
            fontSize: 26,
            fontWeight: "bold",
            fontStyle: "normal",
            color: "#000000",
        }
    });
    return (
        <View style={styles.background}>
            <View style={styles.row}>
                <Image source={require('../../assets/images/logo.png')} style={styles.img} />
                <Text style={styles.registerFont}>회원가입</Text>
            </View>
            <View style={styles.row}>
                <TextInput
                    style={styles.TextinputId}
                    onChangeText={(text) => { setId(text) }}
                    placeholder="아이디                "
                />
                <Button style={styles.confirmButton} title="중복확인" color='#242424' />
            </View>
            <TextInput
                style={styles.TextinputPassword}
                secureTextEntry={true}
                onChangeText={(text) => { setPassword(text) }}
                placeholder="비밀번호"
            />
            <TextInput
                style={styles.TextinputPassword}
                secureTextEntry={true}
                onChangeText={(text) => { setComfirm(text) }}
                placeholder="비밀번호 확인"
            />
            <View
                style={{
                    justifyContent: "center",
                    backgroundColor: profile,
                    borderWidth: 1,
                    borderColor: "gray",
                    borderRadius: 5,
                    width: 225,
                    margin: 10,
                }}>
                <UselessTextInput
                    multiline
                    numberOfLines={4}
                    onChangeText={text => setProfile(text)}
                    value={profile}
                    style={{ padding: 10 }}
                    placeholder="자기소개 한 마디"
                />
            </View>
            <View style={styles.RegisterButton}>
                <Button title="회원가입" color='#242424' onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    )
}
export default RegisterScreen;