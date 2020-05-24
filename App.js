import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import InsideNavigationBase from './src/screens/INSIDE/InsideNavigationBase';
import OutsideNavigationBase from './src/screens/OUTSIDE/OutsideNavigationBase';

import LoadingScreen from './src/screens/LOADING/LoadingScreen';

import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import allActions from './src/redux/actions/index';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const userToken = useSelector(state => state.userToken);
  const dispatch = useDispatch();
  const userNull = () => dispatch(allActions.userTokenActions.userNull());
  const userNotNull = () => dispatch(allActions.userTokenActions.userNotNull());

  const girisEkran = () => {
    setTimeout(() => setIsLoading(false), 2000);
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value === 'null') {
        userNull();
      } else {
        userNotNull();
      }
    } catch (e) {
      // error reading value
    }
  };

  React.useEffect(() => {
    girisEkran();
    getData();
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {userToken === 'null' ? (
        <OutsideNavigationBase />
      ) : (
        <InsideNavigationBase />
      )}
    </NavigationContainer>
  );
}

export default App;
