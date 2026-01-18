import React from 'react'
import { Cart ,Checkout ,Products ,SingleProduct , Error ,HomeLayout , Login ,Register , Landing ,About ,Orders} from './pages'
import {createBrowserRouter , RouterProvider} from 'react-router-dom';



//router banana is one of the important task in UI

const router = createBrowserRouter([
 {
  path :'/',
  element:<HomeLayout/>,
  errorElement : <Error/>,
  children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      { path: 'about', element: <About /> },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ]
 },
 {
  path:'/Login',
  element:<Login/>,
  errorElement:<Error/>
 },
 {
  
  path:'/Register',
  element:<Register/>,
  errorElement:<Error/>
 

 }

]);

const App = () => {
  return<RouterProvider router={router}></RouterProvider>
}

export default App