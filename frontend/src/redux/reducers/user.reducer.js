import { LOGIN, LOGOUT, SIGNUP } from "../actions/user.action";

const initialState = {
  // email: null,
  // firstName: null,
  // lastName: null,
  // isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        isLoggedIn: true,
      };
    case LOGOUT:
      return initialState; // Retourne l'état initial lors de la déconnexion
    case SIGNUP:
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default userReducer;
