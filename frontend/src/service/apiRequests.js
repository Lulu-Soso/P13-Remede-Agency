import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001/api/v1/user';

const apiRequests = {
  getToken: (email, password) => {
    return axios.post("/login", { email, password })
      .then(response => response.data.body.token)
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  },

  userData: (token) => {
    apiRequests.setBearer(token);

    return axios.post("/profile")
      .then(response => {
        console.log("User Data Response:", response.data.body);
        return response.data.body;
      })
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  },

  userEdit: (firstName, lastName, token) => {
    apiRequests.setBearer(token);

    return axios.put("/profile", { firstName, lastName })
      .then(response => response.data.body)
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  },

  setBearer: (token) => {
    console.log('Current headers:', axios.defaults);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

export default apiRequests;
