// import axios from "axios";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const GET_USER = 'GET_USER'

export const loginAction = (userData) => ({
  type: LOGIN,
  payload: userData,
});

export const logoutAction = () => ({
  type: LOGOUT,
});

export const signupAction = () => ({
  type: SIGNUP,
});

// export const getUserData = () => ({
//   return (dispatch) => {
//     return 
//     axios.post('http://localhost:3001/api/v1/user/login', {
//       email: email,
//       password: password,
//     })
//       .then(response => {
//         console.log(response);
//         // Vérifier si le token JWT est présent dans la réponse
//         if (response.data.body.token) {
//           // Rediriger vers la page de profil ou toute autre page appropriée après la connexion réussie
//           navigate('/profile');
//         } else {
//           console.error('Authentification échouée.');
//         }

//         // Réinitialiser les champs de saisie du formulaire
//         setEmail("");
//         setPassword("");
//       })
//       .catch(error => {
//         console.error('Erreur lors de la connexion:', error);
//       });
//   }
// })