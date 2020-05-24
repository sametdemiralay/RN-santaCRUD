import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import allActions from '../../redux/actions/index';
import AsyncStorage from '@react-native-community/async-storage';
import TitleSection from './components/TitleSection';
import ButtonSection from './components/ButtonSection';
import {styles} from './stylesINSIDE/stylesHome';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const userNull = () => dispatch(allActions.userTokenActions.userNull());

  const removeItemStorage = async () => {
    try {
      await AsyncStorage.setItem('@storage_Key', 'null');
    } catch (e) {
      // saving error
    }
  };

  const removeStorage = async () => {
    await removeItemStorage();
    userNull();
  };

  return (
    <View>
      <TitleSection title={'SETTING'} />
      <View style={styles.settingsContainer}>
        <ButtonSection title="Logout" icon="logout" action={removeStorage} />
      </View>
    </View>
  );
};

export default SettingsScreen;
