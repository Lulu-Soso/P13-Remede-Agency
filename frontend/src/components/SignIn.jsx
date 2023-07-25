import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const SignIn = () => {
  // Accéder aux informations de l'utilisateur depuis le state Redux
  const user = useSelector((state) => state.user);

  return (
    <>
      {user.userData && user.userData.firstName ? (
        <div className="info-logged">
          <div className="nav-logged-in">
            <FontAwesomeIcon icon={faUserCircle} />
            <p>{user.userData.firstName}</p>
          </div>
          <div className="nav-logged-out">
            <Link to="/logout" className="main-nav-item">
              <FontAwesomeIcon icon={faUserCircle} />
              Signout
            </Link>
          </div>
        </div>
      ) : (
        <Link to="/login" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </Link>
      )}
    </>
  );
};

export default SignIn;
