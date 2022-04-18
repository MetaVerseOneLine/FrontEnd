import { AutoStoriesTwoTone } from '@mui/icons-material';
import React, { Profiler, useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Text, Image } from 'react-native';
import { Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { images } from '../common/images';
import { theme } from '../common/theme';
import { IconButton, Colors } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentage, heightPercentage, fontPercentage } from '../common/responsiveSize';

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
    const [nickName, setNickName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setComfirm] = useState('')
    const [profile, setProfile] = useState('')
    const [matched, setMatch] = useState(false)
    const [image, setImage] = useState('1');

    const registerRequest = async () => {
        if (password.length < 8 || passwordConfirm.length < 8) {
            alert('비밀번호를 8자리 이상 사용해주세요.')
            return
        }

        if (password != passwordConfirm) {
            alert('비밀번호가 일치하지 않습니다.')
            return
        }

        axios.post('http://oneline1-dev.eba-njfq6hmd.us-east-1.elasticbeanstalk.com/api/User/Join', {
            userId: id,
            userPassword: password,
            userName: nickName,
            userContent: profile,
            userImg: image,
        }).then(
            //localstorage에 저장해야한다.
            res => {
                console.log("OK")
                if (res.data.statusCode == 201) {
                    AsyncStorage.setItem('asyncUserId', id, () => { //
                        console.log('유저 id저장')
                    });
                    alert('성공')
                    navigation.navigate('Login')
                }
                else if (matched == false) {
                    alert('아이디 확인 바랍니다.')
                }
                else {
                    alert('회원가입을 위해서는 모든 내용을 입력해주세요.')
                }
            }
        ).catch(err => console.log(err))
    }

    const confirmId = async () => {
        axios.post('http://oneline1-dev.eba-njfq6hmd.us-east-1.elasticbeanstalk.com/api/User/Check', {
            userId: id,
            userPassword: password,
        }).then(
            res => {
                console.log("OK")
                if (res.data.statusCode == 201) {
                    alert('사용 가능한 아이디입니다.')
                    setMatch(true)
                }
                else {
                    alert('이미 가입 된 아이디입니다.')
                    setMatch(false)
                }
            }
        ).catch(err => console.log(err))
    }

    const [img1, setImg1] = useState<boolean>(false);
    const [img2, setImg2] = useState<boolean>(false);
    const [img3, setImg3] = useState<boolean>(false);
    const [img4, setImg4] = useState<boolean>(false);
    const [img5, setImg5] = useState<boolean>(false);
    const [img6, setImg6] = useState<boolean>(false);

    const [isModal, setModal] = useState<boolean>(false);
    const closeModal = () => {
        setModal(false);
    };
    const [isOpen, setOpen] = useState<boolean>(false);

    const GetImage = () => {
        var img;
        switch (image) {
            case '1':
                img = images.defaultImage;
                break;
            case '2':
                img = images.pro01;
                break;
            case '3':
                img = images.pro02;
                break;
            case '4':
                img = images.pro03;
                break;
            case '5':
                img = images.pro04;
                break;
            case '6':
                img = images.pro05;
                break;
            case '7':
                img = images.pro06;
                break;
        }
        return (
            <View>
                <Image source={img} style={{ width: 70, height: 70 }} />
            </View>
        );
    };

    const Modal = (props) => {
        const styles = StyleSheet.create({
            container: {
                position: 'absolute',
                backgroundColor: '#55555555',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
            },
            modal: {
                width: '80%',
                height: heightPercentage(250),
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.background,
            },
            title: {
                marginBottom: heightPercentage(10),
            },
            imgContainer: {
                flexDirection: 'row',
                marginVertical: heightPercentage(5),
            },
            profileImg: {
                width: widthPercentage(63),
                height: heightPercentage(63),
                marginLeft: widthPercentage(3),
            },
            profileImgSelect: {
                width: widthPercentage(63),
                height: heightPercentage(63),
                marginLeft: widthPercentage(3),
                borderColor: '#FF4C4C',
                borderWidth: 3,
                borderRadius: 50,
            },
            btnContainer: {
                flexDirection: 'row',
                marginTop: heightPercentage(15),
            },
            btn: {
                marginHorizontal: widthPercentage(3),
                width: '20%',
                height: '100%',
            },
        });

        const clickOK = async () => {
            var img;
            if (img1) {
                img = 'img1';
                setImage('1');
            } else if (img2) {
                img = 'img2';
                setImage('2');
            } else if (img3) {
                img = 'img3';
                setImage('3');
            } else if (img4) {
                img = 'img4';
                setImage('4');
            } else if (img5) {
                img = 'img5';
                setImage('5');
            } else if (img6) {
                img = 'img6';
                setImage('6');
            }
            else {
                setImage('1')
            }
            props.close();
        };

        const clickCancel = async () => {
            props.close();
        };

        const clickImg = async (data) => {
            if (data === 'img1') {
                setImg1(true);
                setImg2(false);
                setImg3(false);
                setImg4(false);
                setImg5(false);
                setImg6(false);
            } else if (data === 'img2') {
                setImg1(false);
                setImg2(true);
                setImg3(false);
                setImg4(false);
                setImg5(false);
                setImg6(false);
            } else if (data === 'img3') {
                setImg1(false);
                setImg2(false);
                setImg3(true);
                setImg4(false);
                setImg5(false);
                setImg6(false);
            } else if (data === 'img4') {
                setImg1(false);
                setImg2(false);
                setImg3(false);
                setImg4(true);
                setImg5(false);
                setImg6(false);
            } else if (data === 'img5') {
                setImg1(false);
                setImg2(false);
                setImg3(false);
                setImg4(false);
                setImg5(true);
                setImg6(false);
            } else if (data === 'img6') {
                setImg1(false);
                setImg2(false);
                setImg3(false);
                setImg4(false);
                setImg5(false);
                setImg6(true);
            }
        };

        const setInitialImg = () => {
            switch (image) {
                case 'img1':
                    setImg1(true);
                    break;
                case 'img2':
                    setImg2(true);
                    break;
                case 'img3':
                    setImg3(true);
                    break;
                case 'img4':
                    setImg4(true);
                    break;
                case 'img5':
                    setImg5(true);
                    break;
                case 'img6':
                    setImg6(true);
                    break;
            }
            setOpen(false);
        };

        useEffect(() => {
            if (isOpen) {
                setInitialImg();
            }
        }, []);

        return (
            <>
                {props.isModal ? (<View style={styles.container}>
                    <View style={styles.modal}>
                        <Text style={styles.title}>
                            변경하고 싶은 프로필 사진을 선택해주세요
                        </Text>
                        <View style={styles.imgContainer}>
                            <TouchableOpacity onPress={() => clickImg('img1')}>
                                {img1 ? (
                                    <Image
                                        source={require('../../assets/images/profile/img1.png')}
                                        style={styles.profileImgSelect}
                                    />
                                ) : (
                                    <Image source={require('../../assets/images/profile/img1.png')} style={styles.profileImg} />
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => clickImg('img2')}>
                                {img2 ? (
                                    <Image
                                        source={require('../../assets/images/profile/img2.png')}
                                        style={styles.profileImgSelect}
                                    />
                                ) : (
                                    <Image source={require('../../assets/images/profile/img2.png')} style={styles.profileImg} />
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => clickImg('img3')}>
                                {img3 ? (
                                    <Image
                                        source={require('../../assets/images/profile/img3.png')}
                                        style={styles.profileImgSelect}
                                    />
                                ) : (
                                    <Image source={require('../../assets/images/profile/img3.png')} style={styles.profileImg} />
                                )}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imgContainer}>
                            <TouchableOpacity onPress={() => clickImg('img4')}>
                                {img4 ? (
                                    <Image
                                        source={require('../../assets/images/profile/img4.png')}
                                        style={styles.profileImgSelect}
                                    />
                                ) : (
                                    <Image source={require('../../assets/images/profile/img4.png')} style={styles.profileImg} />
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => clickImg('img5')}>
                                {img5 ? (
                                    <Image
                                        source={require('../../assets/images/profile/img5.png')}
                                        style={styles.profileImgSelect}
                                    />
                                ) : (
                                    <Image source={require('../../assets/images/profile/img5.png')} style={styles.profileImg} />
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => clickImg('img6')}>
                                {img6 ? (
                                    <Image
                                        source={require('../../assets/images/profile/img6.png')}
                                        style={styles.profileImgSelect}
                                    />
                                ) : (
                                    <Image source={require('../../assets/images/profile/img6.png')} style={styles.profileImg} />
                                )}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btnContainer}>
                            <Button
                                color='#242424'
                                title="확인"
                                onPress={() => clickOK()}
                                style={styles.btn}
                            >
                            </Button>
                            <Button
                                title="취소"
                                onPress={() => clickCancel()}
                                style={styles.btn}
                                color={Colors.red500}
                            >
                            </Button>
                        </View>
                    </View>
                </View>
                ) : null}
            </>
        );
    };

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
        confirmButton: {
            marginHorizontal: widthPercentage(10),
            marginVertical: heightPercentage(10),
            marginBottom: heightPercentage(5),
            justifyContent: "center",
            alignItems: "center",
            borderColor: 'black',
            borderWidth: 1,
            height: heightPercentage(32),
        },
        row: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        touchArea: {
            marginTop: heightPercentage(10),
        },
        img: {
            justifyContent: "center",
            alignItems: "center",
            width: widthPercentage(45),
            height: heightPercentage(25),
            resizeMode: 'contain',
            marginHorizontal: widthPercentage(10),
            marginVertical: heightPercentage(10),
        },
        TextinputId: {
            marginHorizontal: widthPercentage(10),
            marginVertical: heightPercentage(10),
            marginBottom: heightPercentage(5),
            height: heightPercentage(32),
            width: widthPercentage(113),
            paddingBottom: heightPercentage(4),
            paddingHorizontal: heightPercentage(10),
            borderRadius: 5,
            borderColor: 'gray',
            borderWidth: 1,
        },
        TextinputPassword: {
            marginVertical: heightPercentage(5),
            paddingHorizontal: widthPercentage(10),
            height: heightPercentage(32),
            paddingBottom: heightPercentage(4),
            borderRadius: 5,
            borderColor: 'gray',
            borderWidth: 1,
            width: widthPercentage(225),
        },
        TextInputMargin: {
            marginTop: heightPercentage(40),
        },
        RegisterButton: {
            marginHorizontal: widthPercentage(10),
            marginVertical: heightPercentage(10),
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
            paddingBottom: heightPercentage(10),
            height: heightPercentage(35),
            width: widthPercentage(225),
        },
        header: {
            flexDirection: 'row',
        },
        registerFont: {
            fontSize: fontPercentage(26),
            fontWeight: "bold",
            fontStyle: "normal",
            color: "#000000",
        },
        profileImage: {
            paddingVertical: heightPercentage(10),
        }
    });
    return (
        <View style={styles.background}>
            <View style={styles.row}>
                <Image source={require('../../assets/images/logo.png')} style={styles.img} />
                <Text style={styles.registerFont}>회원가입</Text>
            </View>
            <View style={styles.profileImage}>
                <TouchableOpacity onPress={() => {
                    setModal(true), setOpen(true);
                }}>
                    <GetImage />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TextInput
                    style={styles.TextinputId}
                    onChangeText={(text) => { setId(text) }}
                    placeholder="아이디                "
                />
                <Button style={styles.confirmButton} title="중복확인" color='#242424' onPress={() => confirmId()} />
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
            <TextInput
                style={styles.TextinputPassword}
                onChangeText={(text) => { setNickName(text) }}
                placeholder="닉네임"
            />
            <View
                style={{
                    justifyContent: "center",
                    backgroundColor: profile,
                    borderWidth: 1,
                    borderColor: "gray",
                    borderRadius: 5,
                    width: widthPercentage(225),
                    marginHorizontal: widthPercentage(5),
                    marginVertical: heightPercentage(5),
                }}>
                <UselessTextInput
                    multiline
                    numberOfLines={3}
                    onChangeText={text => setProfile(text)}
                    value={profile}
                    style={{ paddingVertical: heightPercentage(10), paddingHorizontal: widthPercentage(10) }}
                    placeholder="자기소개 한 마디"
                />
            </View>
            <Button style={styles.RegisterButton} title="회원가입" color='#242424' onPress={() => {
                registerRequest()
            }} />
            <Modal
                isModal={isModal}
                close={closeModal}
            />
        </View>
    )
}
export default RegisterScreen;