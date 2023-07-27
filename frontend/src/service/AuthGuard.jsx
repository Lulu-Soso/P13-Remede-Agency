import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthGuard = ({ children }) => {
  const user = useSelector((state) => state.user);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Vérifier si l'utilisateur est connecté en vérifiant si user.userData existe
  useEffect(() => {
    setIsLoading(true); // Début du chargement
    if (user.userData.email) {
      setIsUserLoggedIn(true); // Utilisateur connecté
    } else {
      setIsUserLoggedIn(false); // Utilisateur non connecté
    }
    setIsLoading(false); // Fin du chargement
  }, [user.userData]);

  // Gérer le chargement
  if (isLoading) {
    return <p>Loading...</p>; // Vous pouvez afficher un message de chargement plus complexe ici
  }

  // Si l'utilisateur n'est pas connecté, rediriger l'utilisateur vers la page de connexion
  if (!isUserLoggedIn) {
    navigate("/login");
    return null;
  }

  // Sinon, afficher le composant fourni en tant qu'enfant (children) du Route
  return children;
};

export default AuthGuard;
