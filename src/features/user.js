import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    firstName: '',
    lastName: '',
  },
  reducers: {
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
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
