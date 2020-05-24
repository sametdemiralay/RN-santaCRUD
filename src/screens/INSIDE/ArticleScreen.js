import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import TitleSection from './components/TitleSection';
import ButtonSection from './components/ButtonSection';
import TextInputSection from './components/TextInputSection';
import AsyncStorage from '@react-native-community/async-storage';
import {styles} from './stylesINSIDE/stylesHome';

const ArticleScreen = () => {
  const [message, setMessage] = useState('');
  const [asyncStore, setAsyncStore] = useState('');

  const ref = firestore().collection('todos');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      setAsyncStore(value);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  });

  async function addTodo() {
    if (message.length < 4) {
      Alert.alert('Warning', 'You cannot write less than 5 characters!');
    } else {
      await ref.add({
        title: message,
        authorization: asyncStore,
      });
      setMessage('');
    }
  }

  return (
    <>
      <TitleSection title={'ARTICLE'} />
      <View style={styles.container}>
        <TextInputSection
          label={'New Article'}
          val={message}
          onChange={setMessage}
        />
        <ButtonSection title={'ADD'} icon="brush" action={addTodo} />
      </View>
    </>
  );
};

export default ArticleScreen;
