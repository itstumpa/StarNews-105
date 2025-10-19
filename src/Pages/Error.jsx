import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from "../Pages/Home/Home.jsx";

const Error = () => {

const error = useRouteError()
  return (
    <>
                  {/* <Home/> */}
                  <title>Error-404</title>
                  <Navbar />
                  <div className='text-center text-7xl'>Error</div>
                  <div>{error.message}</div>
                  <Footer />
  </>
  
  )
}

export default Error;