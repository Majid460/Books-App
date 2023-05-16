import {createSlice} from '@reduxjs/toolkit';
import {
  AuthorAddModel,
  AuthorDataResponse,
} from '../data/ModelInterfaces/ModelInterfaces';
const initialState: {
  authorData: AuthorDataResponse[];
  authorAddedStatus: string;
  authorError: string;
  movies: [];
} = {
  authorData: [],
  authorAddedStatus: '',
  authorError: '',
  movies: [],
};
export const movieReducer = createSlice({
  name: 'reducer',
  initialState,
  reducers: {
    setBooksData: (state, action) => {
      state.movies = action.payload;
    },
    setAuthorAddedStatus: (state, action) => {
      state.authorAddedStatus = action.payload;
    },
    getSuccessAuthor: (state, action) => {
      state.authorData = action.payload;
    },
    getErrorAuthor: (state, action) => {
      state.authorError = action.payload;
    },

    getBooksData: (state, action) => {},
    saveBooksData: (state, action) => {},
    addAuthor: (state, action) => {},
    getAuthor: (state, action) => {},
  },
});

export const {
  setBooksData,
  getBooksData,
  saveBooksData,
  addAuthor,
  setAuthorAddedStatus,
  getAuthor,
  getSuccessAuthor,
  getErrorAuthor,
} = movieReducer.actions;
export default movieReducer.reducer;
