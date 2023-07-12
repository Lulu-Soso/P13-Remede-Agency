import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  return (
      <div>
        <Link to="/login" className="main-nav-item">
          {/*<i className="fa fa-user-circle"></i>*/}
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </Link>
      </div>
  );
};

export default SignIn;
