import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthGuard = ({ children }) => {
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  if (token) {
    return children;
  }

  // Sinon, ne rien afficher ici car nous avons déjà redirigé vers /login
  return null;
};

export default AuthGuard;
