import React from 'react';
import {Link} from "react-router-dom";


const Logo = () => {
  return (
      <Link to="/">
        <img className="main-nav-logo-image" src="/assets/img/argentBankLogo.png" alt="Argent Bank Logo"/>
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
  );
};

export default Logo;
