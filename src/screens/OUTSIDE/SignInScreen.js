import React from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

import {useDispatch} from 'react-redux';
import allActions from '../../redux/actions/index';
import AsyncStorage from '@react-native-community/async-storage';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {styles} from './styles/SignInStyle';
import AlertSection from './components/AlertSection';
import TextInputSection from './components/TextInputSection';
import ButtonSection from './components/ButtonSection';
import SecureSection from './components/SecureSection';

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [textSecure, setTextSecure] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');

  const dispatch = useDispatch();
  const userNotNull = val =>
    dispatch(allActions.userTokenActions.userNotNull(val));

  const setItemStorage = async key => {
    try {
      const deger = await AsyncStorage.setItem('@storage_Key', key);
      return deger;
    } catch (e) {
      // saving error
    }
  };

  const saveStorage = async () => {
    await setItemStorage(username);
    userNotNull(username);
  };

  //LOGIN
  const login = () => {
    if (username === '' || password === '') {
      setIsError(true);
      setErrorText('Email veya parola boş bırakılamaz!');
      return;
    }
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => saveStorage())
      .then(() => setIsError(false))
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setIsError(true);
          setErrorText('That email address is already in use!');
        } else if (error.code === 'auth/wrong-password') {
          setIsError(true);
          setErrorText('Yanlış Parola');
        } else if (error.code === 'auth/invalid-email') {
          setIsError(true);
          setErrorText('Geçersiz email');
        } else if (error.code === 'auth/user-not-found') {
          setIsError(true);
          setErrorText('Yanlış email');
        } else {
          setIsError(true);
          setErrorText(error);
        }
      });
  };

  const updateSecureTextEntry = () => {
    setTextSecure(textSecure ? false : true);
  };

  const GoToSignUp = () => {
    navigation.navigate('SignUp');
    setIsError(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={'#f2f2f2'} size={20} />
          <TextInputSection secureText={false} setAction={setUsername} />
          {username.length >= 8 ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="#f2f2f2" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={styles.text_footer}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color={'#f2f2f2'} size={20} />
          <TextInputSection textSecure={textSecure} setAction={setPassword} />
          <SecureSection action={updateSecureTextEntry} isSecure={textSecure} />
        </View>
        <View style={styles.errorSection}>
          {isError ? <AlertSection error={errorText} /> : null}
        </View>
        <View style={styles.button}>
          <ButtonSection buttonText={'Sign In'} action={login} />

          <ButtonSection buttonText={'Sign Up'} action={GoToSignUp} />
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;
