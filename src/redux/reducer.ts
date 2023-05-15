import {createSlice} from '@reduxjs/toolkit';

export const movieReducer = createSlice({
  name: 'reducer',
  initialState: {movies: []},
  reducers: {
    setBooksData: (state, action) => {
      state.movies = action.payload;
    },
    getBooksData: (state, action) => {},
    saveBooksData: (state, action) => {},
  },
});

export const {setBooksData, getBooksData, saveBooksData} = movieReducer.actions;
export default movieReducer.reducer;
