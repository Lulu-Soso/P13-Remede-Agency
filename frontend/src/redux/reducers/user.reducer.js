import { LOGIN_SUCCESS, LOGIN_FAILURE, EDIT_SUCCESS, EDIT_FAILURE, LOGOUT } from "../actions/user.action";

// Récupérer les données du localStorage s'ils existent
const storedUserData = JSON.parse(localStorage.getItem('userData'));
const storedToken = localStorage.getItem('token');

const initialState = {
  userData: storedUserData || {},
  token: storedToken || '',
  errorState: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload.userData,
        token: action.payload.token,
        errorState: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        errorState: action.payload.errorState,
      };
      case EDIT_SUCCESS:
      return {
        ...state,
        userData: action.payload.userData,
        token: action.payload.token,
        errorState: null,
      };
      case EDIT_FAILURE:
      return {
        ...state,
        errorState: action.payload.errorState,
      };
    case LOGOUT:
      return {
        ...state,
        userData: null,
        token: null,
        errorState: null,
      };
    default:
      return state;
  }
};

export default userReducer;

