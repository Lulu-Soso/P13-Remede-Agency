import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthGuard = ({ children }) => {
  // const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  // Vérifier si l'utilisateur est connecté en vérifiant si token existe
  useEffect(() => {
    if (token) {
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

  // Afficher le composant fourni en tant qu'enfant (children) du Route
  return children;
};

export default AuthGuard;
