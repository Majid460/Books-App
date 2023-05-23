import {createSlice} from '@reduxjs/toolkit';
import {
  AuthorDataResponse,
  LoginSuccessModel,
  initiateUserLogin,
} from '../data/ModelInterfaces/ModelInterfaces';
interface InitialStates {
  authorData: AuthorDataResponse[];
  authorAddedStatus: string;
  authorError: string;
  booksSuccessData: [];
  booksError: string;
  booksAddedStatus: string;
  registerStatus: string;
  loginSuccess: LoginSuccessModel;
  loginError: string;
  tokenStatus: string;
}

export const initialState: InitialStates = {
  authorData: [],
  authorAddedStatus: '',
  authorError: '',
  booksSuccessData: [],
  booksAddedStatus: '',
  booksError: '',
  registerStatus: '',
  loginSuccess: initiateUserLogin,
  loginError: '',
  tokenStatus: '',
};
export const movieReducer = createSlice({
  name: 'reducer',
  initialState,
  reducers: {
    setSuccessBooksData: (state, action) => {
      state.booksSuccessData = action.payload;
    },
    setBookAddedStatus: (state, action) => {
      state.booksAddedStatus = action.payload;
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
    setBooksError: (state, action) => {
      state.booksError = action.payload;
    },

    registerStatus: (state, action) => {
      state.registerStatus = action.payload;
    },

    registerUser: (state, action) => {},
    getBooksData: (state, action) => {},
    saveBooksData: (state, action) => {},
    addAuthor: (state, action) => {},
    getAuthor: (state, action) => {},

    loginUser: (state, action) => {},
    loginSuccessData: (state, action) => {
      state.loginSuccess = action.payload;
    },
    setLoginError: (state, action) => {
      state.loginError = action.payload;
    },
    verifyToken: (state, action) => {},
    setTokenStatus: (state, action) => {
      state.tokenStatus = action.payload;
    },
  },
});

export const {
  //Books
  setSuccessBooksData,
  getBooksData,
  saveBooksData,
  setBookAddedStatus,
  setBooksError,
  //Author
  addAuthor,
  setAuthorAddedStatus,
  getAuthor,
  getSuccessAuthor,
  getErrorAuthor,
  //Register
  registerUser,
  registerStatus,
  // Login
  loginUser,
  loginSuccessData,
  setLoginError,
  //token Verify
  verifyToken,
  setTokenStatus,
} = movieReducer.actions;
export default movieReducer.reducer;
