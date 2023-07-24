import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SET_USER_DETAILS = 'SET_USER_DETAILS';

export const loginSuccess = (email, firstName, lastName, id) => ({
  type: LOGIN_SUCCESS,
  payload: { email, firstName, lastName, id},
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const setUserDetails = (userDetails) => ({
  type: SET_USER_DETAILS,
  payload: userDetails,
});

export const loginUser = (email, password) => {
  return (dispatch) => {
    return axios
      .post('http://localhost:3001/api/v1/user/login', {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data.body);

        if (response.data.body.token) {
          // Dispatch a success action with user details
          const { firstName, lastName, email, _id } = response.data.body;
          dispatch(loginSuccess(email, firstName, lastName, _id));

          // Call the getUserDetails function to get the user's details from the database
          dispatch(getUserDetails(response.data.body.token)).then(() => {
            // Redirect to the profile page
            // navigate('/profile');
          });
        } else {
          alert('Invalid username or password.');
        }
      })
      .catch((error) => {
        // Dispatch a failure action
        dispatch(loginFailure(error.response.data));
      });
  };
};


export const getUserDetails = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/profile',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data && response.data.body) {
        const { firstName, lastName, email, id } = response.data.body;
        console.log('User details:', firstName, lastName, email, id);

        // Dispatch the setUserDetails action to update the state with user details
        dispatch(setUserDetails({ firstName, lastName, email, id }));
      } else {
        console.log('User details not found.');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  };
};