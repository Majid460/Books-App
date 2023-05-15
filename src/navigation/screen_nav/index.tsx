import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginView from '../../views/login_view';
import SignUpView from '../../views/register_view';
import RootStackParamList from '../Routes/routes';
import HomeView from '../../views/home_view';
import BookDetailView from '../../views/book_detail_view';
import {Routes} from '../Routes/routes_names';
import AddBookView from '../../views/add_book_view';
import AddAuthor from '../../views/add_author_view';

const stack = createNativeStackNavigator<RootStackParamList>();

const NavigationWrapper = () => {
  return (
    <stack.Navigator initialRouteName={Routes.LOGIN}>
      <stack.Screen
        name={Routes.LOGIN}
        component={LoginView}
        options={{headerTitleAlign: 'center'}}
      />
      <stack.Screen
        name={Routes.SIGNUP}
        component={SignUpView}
        options={{headerTitleAlign: 'center'}}
      />
      <stack.Screen
        name={Routes.HOME}
        component={HomeView}
        options={{headerTitleAlign: 'center', headerShown: false}}
      />
      <stack.Screen
        name={Routes.BOOK}
        component={BookDetailView}
        initialParams={{title: '', url: ''}}
        options={{
          headerTitleAlign: 'center',
          headerShown: true,
          headerBackButtonMenuEnabled: true,
        }}
      />
      <stack.Screen
        name={Routes.ADD_BOOK}
        component={AddBookView}
        options={{
          headerTitleAlign: 'center',
          headerShown: true,
          headerBackButtonMenuEnabled: true,
        }}
      />
      <stack.Screen
        name={Routes.ADD_AUTHOR}
        component={AddAuthor}
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
