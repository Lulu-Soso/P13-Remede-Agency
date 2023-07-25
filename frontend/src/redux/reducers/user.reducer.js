import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/user.action";

// Récupérer les données du localStorage s'ils existent
const storedUserData = JSON.parse(localStorage.getItem('userData'));
const storedToken = localStorage.getItem('token');

const initialState = {
  userData: storedUserData || {}, // Définir userData à partir des données du localStorage
  token: storedToken || '', // Définir le token à partir des données du localStorage
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload.userData,
        token: action.payload.token,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case LOGOUT:
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
      return {
        ...state,
        userData: null,
        token: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;

