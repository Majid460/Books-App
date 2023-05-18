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
import {UserRealmContext} from './src/data/LocalDataStorage';
function App() {
  return <AppWrapper />;
}
const AppWrapper = () => {
  const {RealmProvider} = UserRealmContext;
  return (
    <RealmProvider>
      <Provider store={store}>
        <NavigationContainer>
          <NativeBaseProvider>
            <NavigationWrapper />
          </NativeBaseProvider>
        </NavigationContainer>
      </Provider>
    </RealmProvider>
  );
};

export default App;
