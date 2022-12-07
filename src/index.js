import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landing from './routes/Landing';
import Login from './routes/Login';
import SignUp from './routes/SignUp';

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


