import React from 'react';
import {Appbar} from 'react-native-paper';

const TitleSection = ({title}) => {
  return (
    <Appbar style={{backgroundColor: '#2f3640'}}>
      <Appbar.Content color={'#e84118'} title={title} />
    </Appbar>
  );
};

export default TitleSection;
