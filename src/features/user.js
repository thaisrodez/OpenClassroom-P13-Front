import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    firstName: '',
    lastName: '',
    token: '',
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUser(state, action) {
      const { id, firstName, lastName } = action.payload;
      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
    },
    removeUser(state) {
      state.id = '';
      state.firstName = '';
      state.lastName = '';
      state.token = '';
    },
  },
});

export const { setToken, setUser, removeUser } = userSlice.actions;
