import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import store from './store/store.js';
import { Provider } from 'react-redux';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layout/Root.jsx';
import AuthForm from './features/auth/AuthForm.jsx';
import Lipsum from './features/lipsum/Lipsum';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Lipsum />,
      },
      {
        path: '/login',
        element: <AuthForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
