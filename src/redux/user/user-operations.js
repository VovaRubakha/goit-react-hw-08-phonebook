import { createAsyncThunk } from '@reduxjs/toolkit';

import * as services from '../../shared/services/user';

export const signup = createAsyncThunk(
  'user/signup',
  async (data, { rejectWithValue }) => {
    try {
      const user = await services.signup(data);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const user = await services.login(data);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const data = await services.getCurrent(user.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const user = await services.logout();
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
