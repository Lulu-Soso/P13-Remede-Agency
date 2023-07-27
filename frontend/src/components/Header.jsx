import React from 'react';
import Logo from "./Logo";
import UserNavbar from './UserNavbar';

const Header = () => {
  return (
        <nav className="main-nav">
          <Logo/>
          <UserNavbar />
        </nav>
  );
};

export default Header;
