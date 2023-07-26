// LoginPage.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { loginUser } from "../redux/actions/user.action";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const loginError = useSelector((state) => state.user);
  const { userData, errorState, token } = useSelector((state) => state.user);

  // Utilisez useEffect pour surveiller les changements de userData
  useEffect(() => {
    // userData est mis à jour, vérifiez si les données utilisateur sont valides
    if (userData && token) {
      navigate("/profile");
    }
  }, [userData, token, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Les vérifications d'erreurs sont gérées dans l'action loginUser
    dispatch(loginUser(email, password));
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
        <h1>Sign In</h1>
        {errorState && <p style={{ color: "red" }}>{errorState}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
