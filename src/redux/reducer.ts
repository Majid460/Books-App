import {createSlice} from '@reduxjs/toolkit';

export const movieReducer = createSlice({
  name: 'reducer',
  initialState: {movies: []},
  reducers: {
    setMoviesData: (state, action) => {
      state.movies = action.payload;
    },
    getMoviesData: (state, action) => {},
  },
});

export const {setMoviesData, getMoviesData} = movieReducer.actions;
export default movieReducer.reducer;
