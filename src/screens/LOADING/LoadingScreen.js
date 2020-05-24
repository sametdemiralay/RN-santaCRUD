import React from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textt}>SantaCRUD</Text>
      <ActivityIndicator size="large" color="#e84118" />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f3640',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textt: {
    fontSize: 40,
    color: '#e84118',
    marginBottom: 10,
  },
});
