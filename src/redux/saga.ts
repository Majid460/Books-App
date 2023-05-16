import {put, takeLatest, call} from 'redux-saga/effects';
import * as actions from './reducer';
import {AddAuthorApi, addBooks} from '../data/api';
import {booksResponse} from '../data/ModelInterfaces/ModelInterfaces';
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
function* AddAuthor(action: AnyAction): any {
  try {
    const response = yield call(AddAuthorApi, action.payload);
    if (response) {
      yield put(actions.setAuthorAddedStatus('Success'));
    } else {
      yield put(actions.setAuthorAddedStatus('Error'));
    }
  } catch (e) {
    yield put(actions.setAuthorAddedStatus('Error'));
  }
}

export default function* () {
  yield takeLatest(actions.saveBooksData, setBooks);
  yield takeLatest(actions.addAuthor, AddAuthor);
}
