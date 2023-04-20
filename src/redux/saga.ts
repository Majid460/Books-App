import {put, takeLatest, call} from 'redux-saga/effects';
import * as actions from './reducer';
import {getMovies, moviesResponse} from '../data/api';

function* getMovieList() {
  try {
    const response: moviesResponse = yield call(getMovies);
    if (response) {
      yield put(actions.setMoviesData(response.movies));
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* () {
  yield takeLatest(actions.getMoviesData, getMovieList);
}
