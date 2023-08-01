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

export const editSuccess = (userData, token) => ({
  type: EDIT_SUCCESS,
  payload: { userData, token },
});

export const editFailure = (errorState) => ({
  type: EDIT_FAILURE,
  payload: { errorState },
});

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

    const token = await apiRequests.loginToken(email, password);

    if (!token) {
      dispatch(loginFailure("Invalid email or password."));
      return;
    }

    const userData = await apiRequests.profileData(token);

    if (!userData) {
      dispatch(loginFailure("User data not found."));
      return;
    }

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
    const userData = await apiRequests.profileEdit(firstName, lastName, token);

    // Si les données utilisateur sont disponibles, dispatch l'action de réussite avec les nouvelles données de l'utilisateur
    dispatch(editSuccess(userData, token));

    localStorage.setItem("userData", JSON.stringify(userData));
  } catch (error) {
    dispatch(editFailure("Failed to edit user details."));
    console.error("Edit User Error:", error);
  }
};


export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");

  // Dispatch l'action de déconnexion pour réinitialiser le state de Redux
  dispatch({ type: LOGOUT });
};
