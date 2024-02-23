import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './nav_bar/nav_bar';
import FooterBar from '../layout/footer_bar/footer_bar';


function RootLayout() {
  return <>
    <NavBar/>
    <Outlet/>
    <FooterBar/>

  </>
}

export default RootLayout;
