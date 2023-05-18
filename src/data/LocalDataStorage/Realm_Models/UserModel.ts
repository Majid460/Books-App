import {Realm} from '@realm/react';

class UserModel extends Realm.Object<UserModel> {
  email!: string;
  userId!: string;
  token!: string;
  name!: string;
  pic!: string;
  static schema = {
    name: 'UserModel',
    properties: {
      email: 'string',
      userId: 'string',
      token: 'string',
      name: 'string',
      pic: 'string',
    },
    primaryKey: 'userId',
  };
}
export default UserModel;
