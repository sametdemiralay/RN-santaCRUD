import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import MessageSection from './components/MessageSection';
import TitleSection from './components/TitleSection';
import {styles} from './stylesINSIDE/stylesHome';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [messageList, setMessageList] = useState([]);

  const ref = firestore().collection('todos');

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const {title, authorization} = doc.data();
        list.push({
          id: doc.id,
          title,
          authorization,
        });
      });

      setMessageList(list);

      if (loading) {
        setLoading(false);
      }
    });
  });

  if (loading) {
    return null; // or a spinner
  }

  return (
    <View style={styles.container}>
      <TitleSection title={'HOME'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatListStyle}
        data={messageList}
        keyExtractor={item => item.id}
        renderItem={({item}) => <MessageSection {...item} />}
      />
    </View>
  );
};

export default HomeScreen;
