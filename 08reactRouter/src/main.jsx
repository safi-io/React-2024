import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Error from './components/Error'
import Login from "./components/Login"
import ProductArea from "./components/ProductArea"
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><App/></>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <><ProductArea/></>
      },
      {
        path: "/login",
        element: <><Login/></>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
