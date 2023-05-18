import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import RootStackParamList from './Routes/routes';
import {Routes} from './Routes/routes_names';

//Login
type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Routes.LOGIN
>;
type NavProps = {
  navigation: ScreenNavigationProp;
};
//Add New Book
type NewBookScreenNavProp = StackNavigationProp<
  RootStackParamList,
  Routes.ADD_BOOK
>;
type NewBookNavProps = {
  navigation: NewBookScreenNavProp;
};
type ScreenRouteProp = RouteProp<RootStackParamList, Routes.LOGIN>;
//Home
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Routes.HOME
>;
type HomeScreenRoute = RouteProp<RootStackParamList, Routes.HOME>;
type HomeNavProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRoute;
};
//Book
type BookScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Routes.BOOK
>;
type BookScreenRoute = RouteProp<RootStackParamList, Routes.BOOK>;
type BookNavProps = {
  navigation: BookScreenNavigationProp;
  route: BookScreenRoute;
};
//Add New Author
type AuthorScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Routes.ADD_AUTHOR
>;
type AuthorScreenRoute = RouteProp<RootStackParamList, Routes.ADD_AUTHOR>;
type AuthorNavProps = {
  navigation: AuthorScreenNavigationProp;
  route: AuthorScreenRoute;
};
export type {
  ScreenNavigationProp,
  NavProps,
  BookNavProps,
  NewBookNavProps,
  AuthorNavProps,
  HomeNavProps,
};
