import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdde1',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#2f3640',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#e84118',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: '#dcdde1',
    marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
