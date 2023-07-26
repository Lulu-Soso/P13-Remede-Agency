import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/user.action";

const SignIn = () => {
  // Accéder aux informations de l'utilisateur depuis le state Redux
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
    console.log(dispatch(logoutUser()));
  };

  return (
    <>
      {user.userData && user.userData.firstName ? (
        <div className="info-logged">
          <div className="nav-logged-in">
            <FontAwesomeIcon icon={faUserCircle} />
            <p>{user.userData.firstName}</p>
          </div>
          <div className="nav-logged-out">
            <button className="main-nav-item" onClick={() => handleLogout()}>
              <FontAwesomeIcon icon={faUserCircle} />
              Signout
            </button>
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
