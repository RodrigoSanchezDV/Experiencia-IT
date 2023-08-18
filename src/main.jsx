import React from 'react'
import ReactDOM from 'react-dom/client'

import {createHashRouter, RouterProvider} from 'react-router-dom'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'

const router= createHashRouter([{
  path:'/',
  element: <Home />
},
{
path:'/login',
element: <Login />
},
{
  path:'/register',
  element: <Register />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   
  </React.StrictMode>
)
