import {baseUrls} from '../NetworkConfig/config';
import {AuthorAddModel, booksAddModel} from './ModelInterfaces/ModelInterfaces';

export const addBooks = async (data: booksAddModel) => {
  try {
    console.log('Books data in Api Calling::' + JSON.stringify(data));
    await fetch(baseUrls.LocalUrl + 'AddBook', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(resp => {
        const responseToJson = resp.json();
        return responseToJson;
      })
      .then(resp => {
        console.log(resp);
      })
      .catch(e => {
        console.log('Error :: ' + e);
      });
  } catch (e) {
    console.log(e);
  }
};
//Add Author
export const AddAuthorApi = async (data: AuthorAddModel) => {
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
