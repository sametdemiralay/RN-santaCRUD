import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;

const ButtonSection = ({buttonText, action}) => {
  return (
    <TouchableOpacity onPress={() => action()}>
      <LinearGradient colors={['#e84118', '#c23616']} style={styles.container}>
        <Text style={styles.containerText}>{buttonText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonSection;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.6,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  containerText: {
    fontSize: 21,
    color: '#f2f2f2',
  },
});
