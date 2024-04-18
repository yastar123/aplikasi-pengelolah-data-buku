import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Core from './Core';


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    // errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/core",
    element: <Core/>
  }
]);

const root = createRoot(document.getElementById('root')); 

root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
