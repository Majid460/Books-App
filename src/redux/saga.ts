import {put, takeLatest, call} from 'redux-saga/effects';
import * as actions from './reducer';
import {addBooks} from '../data/api';
import {
  booksAddModel,
  booksResponse,
} from '../data/ModelInterfaces/ModelInterfaces';
import {AnyAction} from '@reduxjs/toolkit';

function* setBooks(action: AnyAction) {
  console.log('Action Payload::' + JSON.stringify(action.payload));
  try {
    const response: booksResponse = yield call(addBooks, action.payload);
    if (response) {
      console.log(response);
      // yield put(actions.);
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* () {
  yield takeLatest(actions.saveBooksData, setBooks);
}
