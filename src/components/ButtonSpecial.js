import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './GlobalStyles/styles';

const ButtonSpecial = ({title}) => {
  return (
    <TouchableOpacity>
      <LinearGradient colors={['#000000', '#923CB5']} style={styles.buttonContainer}>
        <Text style={[styles.buttonText, {color: '#FFF'}]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonSpecial;
