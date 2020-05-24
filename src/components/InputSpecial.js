import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './GlobalStyles/styles';

const InputSpecial = ({value, onChangeText}) => {
  return (
    <TextInput
      style={styles.inputContainer}
      value={value}
      onChangeText={val => onChangeText(val)}
    />
  );
};

export default InputSpecial;
