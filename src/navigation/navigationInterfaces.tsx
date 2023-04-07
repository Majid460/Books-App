import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import RootStackParamList from './roots';

type ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type NavProps = {
  navigation: ScreenNavigationProp;
};
type ScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
//Book
type BookScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Book'>;
type BookScreenRoute = RouteProp<RootStackParamList, 'Book'>;
type BookNavProps = {
  navigation: BookScreenNavigationProp;
  route: BookScreenRoute;
};

export type {ScreenNavigationProp, NavProps, BookNavProps};
