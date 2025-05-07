import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Login from '../screens/Login';
import Home from '../screens/Home';
const router = createHashRouter([{
    path: '/',
    element: <Login />,   
    },
    {
        path: '/home',
        element: <Home/>,
    },
]);
const Routing =()=> {
  return (
    <RouterProvider router={router} />
  )
}

export default Routing
