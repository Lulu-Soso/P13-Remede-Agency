import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/user.action";

const UserNavbar = () => {
  // Accéder aux informations de l'utilisateur depuis le state Redux
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <>
      {user.userData && user.userData.firstName ? (
        <div className="info-logged">
          <button className="main-nav-item" onClick={handleProfileClick}>
            <FontAwesomeIcon icon={faUserCircle} />
            {user.userData.firstName}
          </button>
          <button className="main-nav-item" onClick={() => handleLogout()}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sign Out
          </button>
        </div>
      ) : (
        <Link to="/login" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} /> Sign In
        </Link>
      )}
    </>
  );
};

export default UserNavbar;
