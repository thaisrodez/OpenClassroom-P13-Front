import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    // request status
    status: 'void',
    // data return by the request
    data: null,
    // error if request failed
    error: null,
  },
  reducers: {
    fetchingUser: (state, action) => {
      if (state.status === 'void') {
        // on passe en pending
        state.status = 'pending';
        return;
      }
      // si le statut est rejected
      if (state.status === 'rejected') {
        // on supprime l'erreur et on passe en pending
        state.error = null;
        state.status = 'pending';
        return;
      }
      // si le statut est resolved
      if (state.status === 'resolved') {
        // on passe en updating (requête en cours mais des données sont déjà présentent)
        state.status = 'updating';
        return;
      }
      // sinon l'action est ignorée
      return;
    },
    resolvedUser: (state, action) => {
      if (state.status === 'pending' || state.status === 'updating') {
        // on passe en resolved et on sauvegarde les données
        state.data = action.payload;
        state.status = 'resolved';
        return;
      }
      // sinon l'action est ignorée
      return;
    },
    rejectedUser: (state, actionstate, action) => {
      if (state.status === 'pending' || state.status === 'updating') {
        // on passe en rejected, on sauvegarde l'erreur et on supprime les données
        state.status = 'rejected';
        state.error = action.payload;
        state.data = null;
        return;
      }
      // sinon l'action est ignorée
      return;
    },
  },
});

export const { fetchingUser, resolvedUser, rejectedUser } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
