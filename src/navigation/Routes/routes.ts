import {Routes} from './routes_names';

type RootStackParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.SIGNUP]: undefined;
  [Routes.HOME]: undefined;
  [Routes.ADD_BOOK]: undefined;
  [Routes.ADD_AUTHOR]: undefined;
  [Routes.BOOK]: {url: String; title: String; detail: String; writer: String};
};
export default RootStackParamList;
