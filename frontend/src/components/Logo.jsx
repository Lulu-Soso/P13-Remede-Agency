import React from 'react';
import logo from "../assets/img/argentBankLogo.png"


const Logo = () => {
  return (
      <a href="#">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
        <h1 className="sr-only">Argent Bank</h1>
      </a>
  );
};

export default Logo;
