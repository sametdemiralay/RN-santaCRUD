import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from './stylesInsideComponents/globalStyles';

const TextInputSection = ({val, onChange, label}) => {
  return (
    <View style={styles.textInput}>
      <TextInput
        label={label}
        value={val}
        onChangeText={onChange}
        underlineColor={'#e84118'}
        multiline={true}
      />
    </View>
  );
};

export default TextInputSection;
