import React from 'react';
import {Button} from 'react-native-paper';
import {styles} from './stylesInsideComponents/globalStyles';

const ButtonSection = ({title, icon, action}) => {
  return (
    <Button
      style={styles.button}
      icon={icon}
      mode="outlined"
      color="#e84118"
      onPress={() => action()}>
      {title}
    </Button>
  );
};

export default ButtonSection;
