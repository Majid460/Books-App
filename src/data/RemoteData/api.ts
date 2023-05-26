import {baseUrls} from '../../NetworkConfig/config';
import {
  AuthorAddModel,
  LoginRequestModel,
  RegisterUserModel,
  booksAddModel,
  tokenModel,
  updatePasswordData,
  updateProfileModel,
} from '../ModelInterfaces/ModelInterfaces';

export const registerUserApi = async (data: RegisterUserModel) => {
  try {
    const response = await fetch(baseUrls.LocalUrl + 'RegisterUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (e) {
    console.log(e);
  }
};
export const LoginApi = async (data: LoginRequestModel) => {
  try {
    const response = await fetch(baseUrls.LocalUrl + 'login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export const addBooks = async (data: booksAddModel) => {
  try {
    const response = await fetch(baseUrls.LocalUrl + 'AddBook', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (e) {
    console.log(e);
  }
};
export const getBooksApi = async () => {
  try {
    const response = await fetch(baseUrls.LocalUrl + 'getAllBooks', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
};
//Add Author
export const AddAuthorApi = async (data: AuthorAddModel) => {
  console.log(data);
  try {
    const response = await fetch(baseUrls.LocalUrl + 'AddAuthor', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (e) {
    console.log(e);
  }
};
//Get All Author
export const GetAuthorsApi = async () => {
  try {
    const response = await fetch(baseUrls.LocalUrl + 'getAllAuthors', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export const verifyTokenApi = async (token: tokenModel) => {
  try {
    const response = await fetch(baseUrls.LocalUrl + 'verifyToken/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(token),
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
};
export const updateProfileApi = async (data: updateProfileModel) => {
  try {
    const dataUp = {name: data.name, email: data.email};
    const response = await fetch(
      baseUrls.LocalUrl + `updateProfile/${data.id}`,
      {
        method: 'PUT',
        headers: {
          Authorization: 'Bearer ' + data.token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataUp),
      },
    );
    const user = await response.json();
    return user;
  } catch (e) {
    console.log('ER::' + e);
  }
};

export const updatePasswordApi = async (data: updatePasswordData) => {
  try {
    const dataUp = {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
      id: data.id,
    };
    const response = await fetch(baseUrls.LocalUrl + 'updatePassword', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + data.token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataUp),
    });
    console.log(response);
    return response.json();
  } catch (e) {
    console.log(e);
  }
};
