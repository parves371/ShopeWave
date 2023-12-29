import React from 'react';
import { Outlet } from 'react-router-dom';


import Navbar from '../Navbar';
import NavHeader from '../NavHeader';
import Footer from '../Footer';

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <NavHeader/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout