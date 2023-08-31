import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/HeroSection';
import { Outlet } from 'react-router-dom';

export default function Layout () {
  return (
    <>
      <Navbar />
      <div className='max-w-xl2 max-w-6xl p-3 mx-auto'>
        <HeroSection />
        <Outlet />
      </div>
    </>
  )
}
