import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Layout from './Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Profile } from './pages/profile';
import { Provider } from 'react-redux';
import { store } from './utils/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
