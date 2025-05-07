import React from 'react';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Login from '../screens/Login';
import Home from '../screens/Home';
import ProtectedRoute from './ProtectedRoute'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <ProtectedRoute/>,
    children: [
      {
    index: true,
       element: <Home />}]
    
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
