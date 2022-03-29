import React, { Profiler, useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from '../../common/images';
import { Button, IconButton, Colors } from 'react-native-paper';

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

const GetImage = (data) => {
    var img;
    switch (data.image) {
        case 'img1':
            img = images.pro01;
            break;
        case 'img2':
            img = images.pro02;
            break;
        case 'img3':
            img = images.pro03;
            break;
        case 'img4':
            img = images.pro04;
            break;
        case 'img5':
            img = images.pro05;
            break;
        case 'img6':
            img = images.pro06;
            break;
    }
    return (
        <View>
            <Image source={img} style={{ width: 130, height: 130 }} />
        </View>
    );
};

const modal = (props) => {
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
            height: 250,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            marginBottom: 10,
        },
        imgContainer: {
            flexDirection: 'row',
            marginVertical: 5,
        },
        profileImg: {
            width: 63,
            height: 63,
            marginLeft: 3,
        },
        profileImgSelect: {
            width: 63,
            height: 63,
            marginLeft: 3,
            borderColor: '#FF4C4C',
            borderWidth: 3,
            borderRadius: 50,
        },
        btnContainer: {
            flexDirection: 'row',
            marginTop: 15,
        },
        btn: {
            marginHorizontal: 3,
            width: '20%',
            height: '100%',
        },
    });

    const clickOK = async () => {
        var img;
        if (img1) {
            img = 'img1';
        } else if (img2) {
            img = 'img2';
        } else if (img3) {
            img = 'img3';
        } else if (img4) {
            img = 'img4';
        } else if (img5) {
            img = 'img5';
        } else if (img6) {
            img = 'img6';
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
        setImg1(false);
        setImg2(false);
        setImg3(false);
        setImg4(false);
        setImg5(false);
        setImg6(false);
        switch (props.image) {
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
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Text style={styles.title}>
                        변경하고 싶은 프로필 사진을 선택해주세요
                    </Text>
                    <View style={styles.imgContainer}>
                        <TouchableOpacity onPress={() => clickImg('img1')}>
                            {img1 ? (
                                <Image
                                    source={require('../../../assets/images/profile/img1.png')}
                                    style={styles.profileImgSelect}
                                />
                            ) : (
                                <Image source={require('../../../assets/images/profile/img1.png')} style={styles.profileImg} />
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => clickImg('img2')}>
                            {img2 ? (
                                <Image
                                    source={require('../../../assets/images/profile/img2.png')}
                                    style={styles.profileImgSelect}
                                />
                            ) : (
                                <Image source={require('../../../assets/images/profile/img2.png')} style={styles.profileImg} />
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => clickImg('img3')}>
                            {img3 ? (
                                <Image
                                    source={require('../../../assets/images/profile/img3.png')}
                                    style={styles.profileImgSelect}
                                />
                            ) : (
                                <Image source={require('../../../assets/images/profile/img3.png')} style={styles.profileImg} />
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imgContainer}>
                        <TouchableOpacity onPress={() => clickImg('img4')}>
                            {img4 ? (
                                <Image
                                    source={require('../../../assets/images/profile/img4.png')}
                                    style={styles.profileImgSelect}
                                />
                            ) : (
                                <Image source={require('../../../assets/images/profile/img4.png')} style={styles.profileImg} />
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => clickImg('img5')}>
                            {img5 ? (
                                <Image
                                    source={require('../../../assets/images/profile/img5.png')}
                                    style={styles.profileImgSelect}
                                />
                            ) : (
                                <Image source={require('../../../assets/images/profile/img5.png')} style={styles.profileImg} />
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => clickImg('img6')}>
                            {img6 ? (
                                <Image
                                    source={require('../../../assets/images/profile/img6.png')}
                                    style={styles.profileImgSelect}
                                />
                            ) : (
                                <Image source={require('../../../assets/images/profile/img6.png')} style={styles.profileImg} />
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnContainer}>
                        <Button
                            mode="outlined"
                            onPress={() => clickOK()}
                            style={styles.btn}
                        >
                            확인
                        </Button>
                        <Button
                            mode="outlined"
                            onPress={() => clickCancel()}
                            style={styles.btn}
                            color={Colors.red500}
                        >
                            취소
                        </Button>
                    </View>
                </View>
            </View>
        </>
    );
};

export default modal;