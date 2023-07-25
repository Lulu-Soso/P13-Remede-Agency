// user.action.js
import apiRequests from "../../service/apiRequests";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GET_USER_DETAILS_SUCCESS = "GET_USER_DETAILS_SUCCESS";
export const GET_USER_DETAILS_FAILURE = "GET_USER_DETAILS_FAILURE";
export const LOGOUT = "LOGOUT";

export const loginSuccess = (userData, token) => ({
  type: LOGIN_SUCCESS,
  payload: { userData, token },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error },
});

export const getUserDetailsSuccess = (userData, token) => ({
  type: GET_USER_DETAILS_SUCCESS,
  payload: { userData, token },
});

export const getUserDetailsFailure = (error) => ({
  type: GET_USER_DETAILS_FAILURE,
  payload: { error },
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = (email, password) => async (dispatch) => {
  // Vérifier si l'email et le mot de passe sont présents et non vides
  if (!email.trim() || !password.trim()) {
    dispatch(loginFailure("Please enter both email and password."));
    return; // Arrêter l'exécution de la fonction
  }

  try {
    // Appeler l'API pour obtenir le token
    const token = await apiRequests.getToken(email, password);

    // Vérifier si le token est valide
    if (!token) {
      dispatch(loginFailure("Invalid email or password."));
      return; // Arrêter l'exécution de la fonction
    }

    // Appeler l'API pour obtenir les données utilisateur
    const userData = await apiRequests.userData(token);

    // Vérifier si les données utilisateur sont valides
    if (!userData) {
      dispatch(loginFailure("User data not found."));
      return; // Arrêter l'exécution de la fonction
    }

    // Si toutes les vérifications sont réussies, dispatch l'action de connexion réussie
    dispatch(loginSuccess(userData, token));

    // Sauvegarde des données dans localStorage
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("token", token);
  } catch (error) {
    dispatch(loginFailure("Login failed. Please check your credentials."));
    console.error("Login Error:", error);
  }
};

export const getUserDetails = (token) => async (dispatch) => {
  try {
    // Appeler l'API pour obtenir les détails de l'utilisateur
    const userData = await apiRequests.userData(token);

    // Vérifier si les données utilisateur sont valides
    if (!userData) {
      dispatch(getUserDetailsFailure("User data not found."));
      return; // Arrêter l'exécution de la fonction
    }

    // Si les données utilisateur sont disponibles, dispatch l'action de réussite avec les détails de l'utilisateur
    dispatch(getUserDetailsSuccess(userData, token));
  } catch (error) {
    dispatch(getUserDetailsFailure("Failed to get user details."));
    console.error("Get User Details Error:", error);
  }
};
