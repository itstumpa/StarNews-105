import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router";
import './index.css';
// import {  } from "react-router/dom";
import router from './Routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>

     <RouterProvider router={router} />
     <ToastContainer />
  </StrictMode>,
)
