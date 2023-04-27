import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from '../public/layout/Main';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import AuthProviders from './providers/AuthProviders';
import Oders from './component/Oders';
import PrivetRoutes from './routers/PrivetRoutes';
import Profile from './component/Profile';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register> </Register>
      },
      {
        path: "/profile",
        element: <PrivetRoutes><Profile></Profile></PrivetRoutes>
      },
      {
        path: '/oders',
        element: <PrivetRoutes><Oders></Oders></PrivetRoutes>
      }
    ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
