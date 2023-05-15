import {baseUrls} from '../NetworkConfig/config';
import {booksAddModel, booksResponse} from './ModelInterfaces/ModelInterfaces';

export const addBooks = async (data: booksAddModel) => {
  try {
    console.log('Books data in Api Calling::' + JSON.stringify(data));
    const response = await fetch(baseUrls.LocalUrl + 'AddBook', {
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
