import * as actionTypes from './actionTypes';

const samco = () => {
  return {
    type: actionTypes.SAMCO_EKLE,
    payload: {
      name: 'samcoPanza',
    },
  };
};

export default {
  samco,
};
