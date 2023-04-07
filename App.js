/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import NavigationWrapper from './src/navigation/screen_nav';
import {NativeBaseProvider} from 'native-base';
function App() {
  return <AppWrapper />;
}
const AppWrapper = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <NavigationWrapper />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
