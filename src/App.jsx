import React from 'react'
import { Cart ,Checkout ,Products ,SingleProduct , Error ,HomeLayout , Login ,Register , Landing } from './pages'
import {createBrowserRouter , RouterProvider} from 'react-router-dom';



//router banana is one of the important task in UI

const router = createBrowserRouter([
 {
  path :'/Home',
  element:<HomeLayout/>,
  errorElement : <Error/>
 }

]);






const App = () => {
  return<RouterProvider router={router}></RouterProvider>
}

export default App