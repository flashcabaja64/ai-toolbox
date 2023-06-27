import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default MainLayout;