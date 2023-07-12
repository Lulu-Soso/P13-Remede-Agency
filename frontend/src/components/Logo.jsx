import React from 'react';
import logo from "../assets/img/argentBankLogo.png"
import {Link} from "react-router-dom";


const Logo = () => {
  return (
      // <a href=".index.html">
      <Link to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      // </a>
  );
};

export default Logo;
