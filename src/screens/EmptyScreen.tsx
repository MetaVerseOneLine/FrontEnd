import React, { useEffect, useState } from 'react';
import Styled from 'styled-components/native';
import { Alert, BackHandler, Platform, Dimensions} from 'react-native';
import Orientation from 'react-native-orientation';
import Navigation from '../navigations';
import AsyncStorage from '@react-native-async-storage/async-storage';

import UnityView, {
    UnityModule,
    UnityResponderView,
  } from 'react-native-unity-play';

const {width, height} = Dimensions.get('window');
const Container = Styled.SafeAreaView`
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
    flex: 1;
`;

const EmptyScreen = ({ navigation, route }) => {
    const [worldId, setWorldId] = useState(route.params.worldIndex);

    const onMessage = (event) => {
        if (event == 'start') {
            console.log('게임이 시작되었습니다.');
            UnityModule.postMessage('RNConnectManager', 'GetUserId', `${AsyncStorage.getItem('asyncUserId')}`);
            UnityModule.postMessage('RNConnectManager', 'GetWorldIdx', worldId);
            console.log('check')
          }
        if (event == 'endGame') {
            UnityModule.quit();
        //페이지 전환
        }
    }

    let unityElement

    if (Platform.OS === 'android') {
        unityElement = (
        <UnityView style={{flex: 1}}
        onMessage={onMessage.bind(this)}/>
        );
    } else {
        unityElement = (
        <UnityResponderView
            fullScreen={true}
            style={{width: width, height: height}}
        />
        );
    }

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
                { text: "확인", onPress: () => {
                    UnityModule.quit();
                    navigation.goBack();
                }}
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
            {unityElement}
        </Container>
    );
};

export default EmptyScreen;