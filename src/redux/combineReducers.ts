import {combineReducers} from '@reduxjs/toolkit';
import reducer from './reducer';

const rootReducer = combineReducers({
  movies: reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
