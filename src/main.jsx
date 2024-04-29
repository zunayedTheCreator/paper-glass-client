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
import ItemDetails from './pages/ItemDetails/ItemDetails';
import Error from './pages/Home/Error/Error';
import AuthProvider from './providers/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes';
import MyArtsAndCrafts from './pages/MyArtsAndCrafts/MyArtsAndCrafts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/item')
      },
      {
        path: '/ArtsAndCrafts',
        element: <ArtsAndCrafts></ArtsAndCrafts>,
        loader: () => fetch('http://localhost:5000/item')
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
        element: <PrivateRoutes><AddCraftItem></AddCraftItem></PrivateRoutes>
      },
      {
        path: '/item/:id',
        element: <PrivateRoutes><ItemDetails></ItemDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/item/${params.id}`)
      },
      {
        path: '/MyArtsAndCrafts',
        element: <PrivateRoutes><MyArtsAndCrafts></MyArtsAndCrafts></PrivateRoutes>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
