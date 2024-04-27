import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './pages/Home/Home';
import ArtsAndCrafts from './pages/ArtsAndCrafts/ArtsAndCrafts';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AddCraftItem from './pages/AddCraftItem/AddCraftItem';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/item')
      },
      {
        path: '/ArtsAndCrafts',
        element: <ArtsAndCrafts></ArtsAndCrafts>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/AddCraftItem',
        element: <AddCraftItem></AddCraftItem>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
