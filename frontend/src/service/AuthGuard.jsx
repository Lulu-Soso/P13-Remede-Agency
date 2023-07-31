import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import Loader from "../components/Loader";

const AuthGuard = ({ children }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  // Vérifier si l'utilisateur est connecté en vérifiant si user.userData existe
  useEffect(() => {
    if (user.userData.email) {
    } else {
      navigate("/login");
    }
  }, [user.userData, navigate]);

  // Afficher le composant fourni en tant qu'enfant (children) du Route
  return children;
};

export default AuthGuard;
