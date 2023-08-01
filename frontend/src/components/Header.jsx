import React from 'react';
import Logo from "./Logo";
import Navbar from './Navbar';

const Header = () => {
  return (
        <nav className="main-nav">
          <Logo/>
          <Navbar />
        </nav>
  );
};

export default Header;
