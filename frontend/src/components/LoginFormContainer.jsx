import React, { useState } from 'react';
// import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginFormContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Ajoutez cette ligne pour utiliser useNavigate()

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Envoyer les informations de connexion au backend
    // axios.post('http://localhost:3001/api/v1/user/login', {
    //   email: email,
    //   password: password,
    // })
    //   .then(response => {
    //     console.log(response);
    //     // Vérifier si le token JWT est présent dans la réponse
    //     if (response.data.body.token) {
    //       // Rediriger vers la page de profil ou toute autre page appropriée après la connexion réussie
    //       navigate('/profile');
    //     } else {
    //       console.error('Authentification échouée.');
    //     }

    //     // Réinitialiser les champs de saisie du formulaire
    //     setEmail("");
    //     setPassword("");
    //   })
    //   .catch(error => {
    //     console.error('Erreur lors de la connexion:', error);
    //   });
  };
  

  return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          {/*<i className="fa fa-user-circle sign-in-icon"></i>*/}
          <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
          <h1>Sign In</h1>

          <form onSubmit={(e) => { handleFormSubmit(e)}}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>

            {email}

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>

            { password }

            <div className="input-remember">
              <input type="checkbox" id="remember-me"/>
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type="submit">
              {/* <Link to="/">Sign In</Link> */}
              Sign In
            </button>
            {/* <Link to="/" className="sign-in-button">
              Sign In
            </Link> */}
          </form>
        </section>
      </main>
  );
};

export default LoginFormContainer;
