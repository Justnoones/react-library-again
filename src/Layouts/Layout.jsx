import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/HeroSection';
import "./layout.css";
import { Outlet, useLocation } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

export default function Layout () {
  const locatin = useLocation();

  return (
    <>
      <Navbar />
      <SwitchTransition>
        <CSSTransition timeout={400} classNames="fade" key={locatin.pathname}>
            <div className='max-w-xl2 max-w-6xl p-3 mx-auto'>
              <HeroSection />
              <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  )
}
