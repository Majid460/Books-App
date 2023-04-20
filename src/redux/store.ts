import {configureStore} from '@reduxjs/toolkit';
import saga from '../redux/saga';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './combineReducers';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(saga);
export default store;
