/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import ScreenIndex from './src/screens/ScreenIndex';



function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} translucent={true} />
      <ScreenIndex />
    </>
  );
}

export default App;
