import {createSlice} from '@reduxjs/toolkit';

export const movieReducer = createSlice({
  name: 'reducer',
  initialState: {
    movies: [],
    authorAddedStatus: '',
  },
  reducers: {
    setBooksData: (state, action) => {
      state.movies = action.payload;
    },
    setAuthorAddedStatus: (state, action) => {
      state.authorAddedStatus = action.payload;
    },
    getBooksData: (state, action) => {},
    saveBooksData: (state, action) => {},
    addAuthor: (state, action) => {},
  },
});

export const {
  setBooksData,
  getBooksData,
  saveBooksData,
  addAuthor,
  setAuthorAddedStatus,
} = movieReducer.actions;
export default movieReducer.reducer;
