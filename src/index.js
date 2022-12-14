import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Landing />,
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//     path: '/signup',
//     element: <SignUp />,
//   },
//   {
//     path: '/main',
//     element: <Main />,
//   },
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
