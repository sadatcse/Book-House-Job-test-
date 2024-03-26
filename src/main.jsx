import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom';
import ErrorPage from './pages/Error';
import Home from './pages/Main/Home';
import Root from './pages/Root';
import Listedbooks from './pages/Main/Listedbooks';
import Pagestoread from './pages/Main/Pagestoread';
import DetailsBook from './pages/DynamicPage/DetailsBook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'/listbook',
        element:<Listedbooks></Listedbooks>
        
      },
      {
        path:'/pageread',
        element:<Pagestoread></Pagestoread>
        
      },
      {
        path:'/book/:id',
        element:<DetailsBook></DetailsBook>
        
      }

            
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      </React.StrictMode>,
)