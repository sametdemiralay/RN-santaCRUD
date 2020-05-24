import React from 'react';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SecureSection = ({action, isSecure}) => {
  return (
    <TouchableOpacity onPress={action}>
      {isSecure ? (
        <Feather name="eye-off" color="#f2f2f2" size={20} />
      ) : (
        <Feather name="eye" color="#f2f2f2" size={20} />
      )}
    </TouchableOpacity>
  );
};

export default SecureSection;
