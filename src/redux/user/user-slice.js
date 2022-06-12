import { createSlice } from '@reduxjs/toolkit';

import { signup, login, getCurrentUser, logout } from './user-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: (state, _) => ({ ...state, loading: true, error: null }),
    [signup.fulfilled]: (state, { payload }) => ({
      ...state,
      isLogin: true,
      loading: false,
      ...payload,
    }),
    [signup.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),

    [login.pending]: (state, _) => ({ ...state, loading: true, error: null }),
    [login.fulfilled]: (state, { payload }) => ({
      ...state,
      isLogin: true,
      loading: false,
      ...payload,
    }),
    [login.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),

    [getCurrentUser.pending]: (state, _) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [getCurrentUser.fulfilled]: (state, { payload }) => ({
      ...state,
      isLogin: true,
      loading: false,
      ...payload,
    }),
    [getCurrentUser.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
      token: '',
    }),

    [logout.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [logout.fulfilled]: (state, { payload }) => ({
      user: {},
      token: '',
      isLogin: false,
      loading: false,
      error: null,
    }),
    [logout.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
});

export default authSlice.reducer;
