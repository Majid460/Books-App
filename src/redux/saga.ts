import {put, takeLatest, call} from 'redux-saga/effects';
import * as actions from './reducer';
import {
  AddAuthorApi,
  GetAuthorsApi,
  LoginApi,
  addBooks,
  getBooksApi,
  registerUserApi,
  verifyTokenApi,
} from '../data/RemoteData/api';
import {
  LoginSuccessModel,
  RegisterResponseModel,
  verifyTokenModel,
} from '../data/ModelInterfaces/ModelInterfaces';
import {AnyAction} from '@reduxjs/toolkit';

function* RegisterUser(action: AnyAction): any {
  try {
    const response: RegisterResponseModel = yield call(
      registerUserApi,
      action.payload,
    );
    if (response.statusCode == 200) {
      yield put(actions.registerStatus('Success'));
    } else {
      yield put(actions.registerStatus('Error'));
    }
  } catch (e) {
    yield put(actions.registerStatus('Error'));
  }
}

function* loginUser(action: AnyAction): any {
  try {
    const response: LoginSuccessModel = yield call(LoginApi, action.payload);
    if (response) {
      yield put(actions.loginSuccessData(response));
      yield put(actions.setLoginError(response.message));
    } else {
      yield put(actions.setLoginError('Error'));
    }
  } catch (e) {
    yield put(actions.setLoginError('Error'));
  }
}

function* setBooks(action: AnyAction): any {
  try {
    const response = yield call(addBooks, action.payload);
    if (response) {
      yield put(actions.setBookAddedStatus('Success'));
    } else {
      yield put(actions.setBookAddedStatus('Error'));
    }
  } catch (e) {
    yield put(actions.setBookAddedStatus('Error'));
  }
}
function* getBooks(): any {
  try {
    const response = yield call(getBooksApi);
    if (response) {
      yield put(actions.setSuccessBooksData(response));
    } else {
      yield put(actions.setBooksError('Error'));
    }
  } catch (e) {
    yield put(actions.setBooksError('Error'));
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
function* getAuthors(): any {
  try {
    const response = yield call(GetAuthorsApi);
    if (response) {
      yield put(actions.getSuccessAuthor(response));
    } else {
      yield put(actions.getErrorAuthor('Error'));
    }
  } catch (e) {
    yield put(actions.getErrorAuthor('Error'));
  }
}
function* verifyToken(action: AnyAction): any {
  try {
    const response = yield call(verifyTokenApi, action.payload);
    if (response) {
      yield put(actions.setTokenStatus(response.message));
    } else {
      yield put(actions.setTokenStatus('Error'));
    }
  } catch (e) {
    yield put(actions.setTokenStatus('Error'));
  }
}
export default function* () {
  yield takeLatest(actions.loginUser, loginUser);
  yield takeLatest(actions.registerUser, RegisterUser);
  yield takeLatest(actions.saveBooksData, setBooks);
  yield takeLatest(actions.getBooksData, getBooks);
  yield takeLatest(actions.addAuthor, AddAuthor);
  yield takeLatest(actions.getAuthor, getAuthors);
  yield takeLatest(actions.verifyToken, verifyToken);
}
