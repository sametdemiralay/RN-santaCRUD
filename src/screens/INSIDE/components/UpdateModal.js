import React from 'react';
import {View, Modal, Platform, KeyboardAvoidingView, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import TextInputSection from './TextInputSection';
import ButtonSection from './ButtonSection';
import {styles} from './stylesInsideComponents/updateModalStyles';

const UpdateModal = ({modalVisible, setModalVisible, title, id}) => {
  const [updateTitle, setUpdateTitle] = React.useState(title);
  const modalAction = () => {
    setModalVisible(!modalVisible);
    firestore()
      .collection('todos')
      .doc(id)
      .update({
        title: updateTitle,
      })
      .then(() => {
        console.log('User updated!');
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInputSection
              val={updateTitle}
              onChange={setUpdateTitle}
              label="Edit Article"
            />
            <ButtonSection title="Edit" icon="brush" action={modalAction} />
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default UpdateModal;
