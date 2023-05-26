export type booksResponse = {
  _id: string;
  url: string;
  about: string;
  title: string;
  author: string;
};
export type booksAddModel = {
  url: string;
  about: string;
  title: string;
  author: string;
};
export type AuthorAddModel = {
  name: string;
  pic: string;
};
export type AuthorDataResponse = {
  name: string;
  pic: string;
  _id: string;
};
export type RegisterUserModel = {
  name: string;
  email: string;
  password: string;
  pic: string;
};
export type LoginRequestModel = {
  email: string;
  password: string;
};
export type LoginSuccessModel = {
  message: string;
  data: LoginSubData;
  error: string;
  statusCode: number;
};
export type LoginSubData = {
  id: string;
  email: string;
  token: string;
  name: string;
  pic: string;
};
const initialUserSub: LoginSubData = {
  id: '',
  email: '',
  token: '',
  name: '',
  pic: '',
};
export const initiateUserLogin: LoginSuccessModel = {
  message: '',
  data: initialUserSub,
  error: '',
  statusCode: 0,
};
export interface RegisterResponseModel {
  message: string;
  statusCode: number;
  data: RegisterUserModel;
}
export interface verifyTokenModel {
  success: boolean;
  message: string;
}
export interface tokenModel {
  token: string;
}
export interface updateProfileModel {
  name: string;
  email: string;
  id: string;
  token: string;
}

export interface updatedProfileRes {
  message: string;
  data: LoginSubData;
}
const initialProfileData: LoginSubData = {
  id: '',
  email: '',
  token: '',
  name: '',
  pic: '',
};
export const UpdateProfileResp: updatedProfileRes = {
  message: '',
  data: initialProfileData,
};
export interface updatePasswordData {
  id: string;
  token: string;
  newPassword: string;
  currentPassword: string;
}
