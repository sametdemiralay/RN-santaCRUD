import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  //TextInputSection.js
  textInput: {
    height: 50,
    width: width * 0.6,
    marginBottom: 30,
  },
  //MessageSection.js
  cardContainer: {
    backgroundColor: '#2f3640',
    margin: 10,
    width: width * 0.9,
  },
  cardTitle: {
    color: '#e84118',
  },
  cardParagraph: {
    color: '#dcdde1',
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
  //ButtonSection.js
  button: {
    marginHorizontal: 1,
    width: 100,
  },
});
