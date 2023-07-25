// user.reducer.js
import { LOGIN_SUCCESS, LOGIN_FAILURE, SET_USER_DETAILS } from '../actions/user.action';

const initialState = {
  // isLoggedIn: false,
  // firstName: '',
  // lastName: '',
  // email: '',
  // id: '',
  // error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        // firstName: action.payload.firstName,
        // lastName: action.payload.lastName,
        // email: action.payload.email,
        id: action.payload.id,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        // firstName: '',
        // lastName: '',
        // email: '',
        // id: '',
        error: action.payload,
      };
    case SET_USER_DETAILS:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        id: action.payload.id,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
