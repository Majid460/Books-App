import {Routes} from './routes_names';

type RootStackParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.SIGNUP]: undefined;
  [Routes.HOME]: {id: string; name: string; email: string; pic: string};
  [Routes.ADD_BOOK]: undefined;
  [Routes.ADD_AUTHOR]: undefined;
  [Routes.BOOK]: {url: String; title: String; detail: String; writer: String};
  [Routes.SPLASH]: undefined;
  [Routes.PROFILE]: undefined;
};
export default RootStackParamList;
