import * as React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import UpdateModal from './UpdateModal';
import ButtonSection from './ButtonSection';
import {styles} from './stylesInsideComponents/globalStyles';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

const MessageSection = ({id, title, authorization}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const deleteMessage = () => {
    firestore()
      .collection('todos')
      .doc(id)
      .delete()
      .then(() => {
        console.log('User deleted!');
      });
  };

  const modal = () => {
    setModalVisible(!modalVisible);
  };

  const [asyncStore, setAsyncStore] = React.useState('');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      setAsyncStore(value);
    } catch (e) {
      // error reading value
    }
  };

  React.useEffect(() => {
    getData();
  });

  const PermissionAlert = () => {
    Alert.alert('permission notice', 'You can only edit your own posts!');
  };

  return (
    <Card style={styles.cardContainer}>
      <Card.Content>
        <Title style={styles.cardTitle}>{authorization}</Title>
        <Paragraph style={styles.cardParagraph}>{title}</Paragraph>
      </Card.Content>
      {asyncStore === authorization ? (
        <Card.Actions style={styles.cardActions}>
          <ButtonSection title="DELETE" icon="delete" action={deleteMessage} />
          <ButtonSection title="EDIT" icon="pen" action={modal} />
        </Card.Actions>
      ) : (
        <Card.Actions style={styles.cardActions}>
          <ButtonSection
            title="DELETE"
            icon="delete"
            action={PermissionAlert}
          />
          <ButtonSection title="EDIT" icon="pen" action={PermissionAlert} />
        </Card.Actions>
      )}
      <UpdateModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={title}
        id={id}
      />
    </Card>
  );
};

export default MessageSection;
