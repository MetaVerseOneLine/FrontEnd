import React, { useEffect, useState } from 'react';
import Styled from 'styled-components/native';
import { Alert, BackHandler, } from 'react-native';
import Orientation from 'react-native-orientation';
import Navigation from '../navigations';

const Container = Styled.SafeAreaView`
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
    flex: 1;
`;

const EmptyScreen = ({ navigation }) => {
    useEffect(() => {
        Orientation.lockToLandscapeLeft();
        Orientation.addOrientationListener(onOrientationDidChange);

        return () => {
            Orientation.unlockAllOrientations()
            Orientation.removeOrientationListener(onOrientationDidChange);
        }
    }, []);

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Home", "홈으로 돌아가시겠습니까?", [
                {
                    text: "취소",
                    onPress: () => null,
                },
                { text: "확인", onPress: () => navigation.goBack() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    const onOrientationDidChange = (orientation: any) => {
        if (orientation === 'PORTRAIT') {
            Orientation.lockToLandscapeLeft();
        }
    }

    return (
        <Container>
        </Container>
    );
};

export default EmptyScreen;