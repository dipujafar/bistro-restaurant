import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import {HelmetProvider } from 'react-helmet-async';
import AuthProvide from './provider/AuthProvide';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvide>
    <QueryClientProvider  client={queryClient}>
    <HelmetProvider>
    <div className='max-w-7xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
    </QueryClientProvider>
    </AuthProvide>
    <ToastContainer position="bottom-center" />
  </React.StrictMode>,
)
