/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import ScreenIndex from './src/screens/ScreenIndex';
import Navigator from './src/navigators/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} translucent={true} />
      <Navigator />
      {/* <ScreenIndex /> */}
    </SafeAreaProvider>
  );
}

export default App;
