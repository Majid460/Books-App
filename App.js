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
import {Provider} from 'react-redux';
import store from './src/redux/store';
function App() {
  return <AppWrapper />;
}
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <NavigationWrapper />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
