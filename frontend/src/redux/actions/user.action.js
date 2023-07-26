// user.action.js
import apiRequests from "../../service/apiRequests";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAILURE = "EDIT_FAILURE";
export const LOGOUT = "LOGOUT";

export const loginSuccess = (userData, token) => ({
  type: LOGIN_SUCCESS,
  payload: { userData, token },
});

export const loginFailure = (errorState) => ({
  type: LOGIN_FAILURE,
  payload: { errorState },
});

export const editSuccess = (userData) => ({
  type: EDIT_SUCCESS,
  payload: { userData },
});

export const editFailure = (errorState) => ({
  type: EDIT_FAILURE,
  payload: { errorState },
});

// Action pour réinitialiser le state de Redux lors de la déconnexion
export const logout = () => ({
  type: LOGOUT,
});

export const loginUser = (email, password) => async (dispatch) => {
  // Vérifier si l'email et le mot de passe sont présents et non vides
  if (!email.trim() || !password.trim()) {
    dispatch(loginFailure("Please enter both email and password."));
    return;
  }

  try {
    // Appeler l'API pour obtenir le token
    const token = await apiRequests.getToken(email, password);

    // Vérifier si le token est valide
    if (!token) {
      dispatch(loginFailure("Invalid email or password."));
      return;
    }

    // Appeler l'API pour obtenir les données utilisateur
    const userData = await apiRequests.userData(token);

    // Vérifier si les données utilisateur sont valides
    if (!userData) {
      dispatch(loginFailure("User data not found."));
      return;
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

export const editUser = (firstName, lastName) => async (dispatch, getState) => {
  const { token } = getState().user;

  try {
    // Appeler l'API pour éditer les données de l'utilisateur
    const userData = await apiRequests.userEdit(firstName, lastName, token);

    // Si les données utilisateur sont disponibles, dispatch l'action de réussite avec les nouvelles données de l'utilisateur
    dispatch(editSuccess(userData));

    // Mettre à jour le localStorage avec les nouvelles données de l'utilisateur
    const updatedUserData = { ...getState().user.userData, firstName, lastName };
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
  } catch (error) {
    dispatch(editFailure("Failed to edit user details."));
    console.error("Edit User Error:", error);
  }
};


export const logoutUser = () => (dispatch) => {
  // Supprimer le token du local storage
  localStorage.removeItem("token");
  localStorage.removeItem("userData");

  // Dispatch l'action de déconnexion pour réinitialiser le state de Redux
  dispatch({ type: LOGOUT });
};
