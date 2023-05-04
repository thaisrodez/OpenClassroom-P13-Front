import { createStore } from 'redux';
import { produce } from 'immer';

// backend retourne un token à la connexion
// token à mettre dans le local storage, et à mettre dans le header des requêtes.

// reducer user et reducer loggin

const initialState = {
  user: { status: 'void' },
  token: null,
  loggedIn: false,
  logginForm: { username: null, password: null },
};

// actions
export const fillLoginUsername = (username) => ({
  type: 'fillLoginUsername',
  payload: { username: username },
});

export const fillLoginPassword = (username, password) => ({
  type: 'fillLoginPassword',
  payload: { password: password },
});

function reducer(state = initialState, action) {
  if (action.type === 'fillLoginUsername') {
    return produce(state, (draft) => {
      draft.logginForm.username = action.payload.username;
    });
  }
  if (action.type === 'fillLoginPassword') {
    return produce(state, (draft) => {
      draft.logginForm.password = action.payload.password;
    });
  }
  return state;
}

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, reduxDevtools);
