import React from 'react';
import {StyleSheet, TextInput, Platform} from 'react-native';

const TextInputSection = ({textSecure, setAction}) => {
  return (
    <TextInput
      placeholder="Your Password"
      placeholderTextColor="#f2f2f2"
      secureTextEntry={textSecure}
      style={styles.textInput}
      autoCapitalize="none"
      onChangeText={val => setAction(val)}
    />
  );
};

export default TextInputSection;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#f2f2f2',
    fontSize: 15
  },
});
