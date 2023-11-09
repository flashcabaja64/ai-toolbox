import React from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ScrollToAnchor from '../hooks/useScrollToAnchor';

const MainLayout: React.FC = () => {
  return (
    <div>
      <ScrollToAnchor />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout;