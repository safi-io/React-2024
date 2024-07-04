import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Error from './components/Error'
import Login from "./components/Login"
import ProductArea from "./components/ProductArea"
import Navbar from './components/Navbar'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Github from './components/Github'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><App/></>,
    errorElement: <><Navbar/><Error/></>,
    children: [
      {
        index: true,
        element: <><ProductArea/></>
      },
      {
        path: "/login",
        element: <><Login/></>
      },
      {
        path: "/github",
        element: <><Github/></>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
