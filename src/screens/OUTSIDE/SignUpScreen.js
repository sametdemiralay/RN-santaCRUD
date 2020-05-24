import React from 'react';
import {Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';

import {useDispatch} from 'react-redux';
import allActions from '../../redux/actions/index';
import AsyncStorage from '@react-native-community/async-storage';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {styles} from './styles/SignUpStyle';
import ButtonSection from './components/ButtonSection';
import AlertSection from './components/AlertSection';
import TextInputSection from './components/TextInputSection';
import SecureSection from './components/SecureSection';

const SignUpScreen = ({navigation}) => {
  const [mail, setMail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [passRepeat, setPassRepeat] = React.useState('');
  const [secureText, setSecureText] = React.useState(true);
  const [secureTextRepeat, setSecureTextRepeat] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');

  const dispatch = useDispatch();
  const userNotNull = (val) => dispatch(allActions.userTokenActions.userNotNull(val));

  const setItemStorage = async key => {
    try {
      await AsyncStorage.setItem('@storage_Key', key);
    } catch (e) {
      // saving error
    }
  };

  const saveStorage = async () => {
    await setItemStorage(mail);
    userNotNull(mail);
  };

  //SIGN UP
  const create = () => {
    if (mail === '' || pass === '' || passRepeat === '') {
      setIsError(true);
      setErrorText('Boş alan bırakılamaz!');
      return;
    } else if (pass !== passRepeat) {
      setIsError(true);
      setErrorText('Parola ve Parola Tekrar aynı olmalı!');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(mail, pass)
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

  const secureTextFonk = () => {
    setSecureText(secureText ? false : true);
  };

  const secureTextRepeatFonk = () => {
    setSecureTextRepeat(secureTextRepeat ? false : true);
  };

  const backToSignIn = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#f2f2f2" size={20} />
          <TextInputSection textSecure={false} setAction={setMail} />
          {mail.length > 6 ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="#f2f2f2" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={[styles.text_footer, {marginTop: 15}]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#f2f2f2" size={20} />
          <TextInputSection textSecure={secureText} setAction={setPass} />

          <SecureSection action={secureTextFonk} isSecure={secureText} />
        </View>

        <Text style={[styles.text_footer, {marginTop: 15}]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#f2f2f2" size={20} />
          <TextInputSection
            textSecure={secureTextRepeat}
            setAction={setPassRepeat}
          />

          <SecureSection
            action={secureTextRepeatFonk}
            isSecure={secureTextRepeat}
          />
        </View>

        {isError ? <AlertSection error={errorText} /> : null}

        <View style={styles.button}>
          <ButtonSection buttonText={'Sign Up'} action={create} />

          <ButtonSection buttonText={'Sign In'} action={backToSignIn} />
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;
