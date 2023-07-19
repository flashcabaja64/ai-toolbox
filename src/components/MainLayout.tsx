import React from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout;