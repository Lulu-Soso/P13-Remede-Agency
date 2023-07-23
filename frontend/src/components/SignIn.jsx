import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
// import { useSelector } from 'react-redux'

const SignIn = () => {
  // const firstName = useSelector(state => state.user.user?.firstName || ''); 

  return (
      <>
       {/* {firstName} ! Affichez le prénom de l'utilisateur ici */}
        <Link to="/login" className="main-nav-item">
          {/*<i className="fa fa-user-circle"></i>*/}
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </Link>
      </>
  );
};

export default SignIn;
