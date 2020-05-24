import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AlertSection = ({error}) => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};

export default AlertSection;

const styles = StyleSheet.create({
  conatiner: {
    height: 30,
    width: '100%',
    backgroundColor: '#eb4d4b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
  },
});
