import {createRealmContext} from '@realm/react';
import UserModel from './Realm_Models/UserModel';
export const UserRealmContext = createRealmContext({
  schema: [UserModel],
});
