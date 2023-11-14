import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import {HelmetProvider } from 'react-helmet-async';
import AuthProvide from './provider/AuthProvide'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvide>
    <HelmetProvider>
    <div className='max-w-7xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
    </AuthProvide>
  </React.StrictMode>,
)
