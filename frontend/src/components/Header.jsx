import React from 'react';
import Logo from "./Logo";
import SignIn from "./SignIn";

const Header = () => {
  return (
        <nav className="main-nav">
          <Logo/>
          <SignIn/>
        </nav>
  );
};

export default Header;
