import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Stack} from 'native-base';
import LoginView from '../../views/login_view';
import SignUpView from '../../views/register_view';
import RootStackParamList from '../routes';
import HomeView from '../../views/home_view';
import BookDetailView from '../../views/book_detail_view';

const stack = createNativeStackNavigator<RootStackParamList>();

const NavigationWrapper = () => {
  return (
    <stack.Navigator initialRouteName="Login">
      <stack.Screen
        name="Login"
        component={LoginView}
        options={{headerTitleAlign: 'center'}}
      />
      <stack.Screen
        name="SignUp"
        component={SignUpView}
        options={{headerTitleAlign: 'center'}}
      />
      <stack.Screen
        name="Home"
        component={HomeView}
        options={{headerTitleAlign: 'center', headerShown: false}}
      />
      <stack.Screen
        name="Book"
        component={BookDetailView}
        initialParams={{title: '', url: ''}}
        options={{
          headerTitleAlign: 'center',
          headerShown: true,
          headerBackButtonMenuEnabled: true,
        }}
      />
    </stack.Navigator>
  );
};
export default NavigationWrapper;
