import { LOGIN_SUCCESS, LOGIN_FAILURE, SET_USER_DETAILS } from '../actions/user.action';

const initialState = {
  email: null,
  isLoggedIn: false,
  firstName: null,
  lastName: null,
  _id: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        isLoggedIn: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SET_USER_DETAILS:
      return {
        ...state,
        _id: action.payload._id, // Mettez à jour le state avec l'id de l'utilisateur
      };
    default:
      return state;
  }
};

export default userReducer;
