import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api/v1/user";

const apiRequests = {
  setBearer: (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },

  getToken: async (email, password) => {
    try {
      const response = await axios.post("/login", { email, password });
      return response.data.body.token;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },

  profileData: async (token) => {
    apiRequests.setBearer(token);

    try {
      const response = await axios.post("/profile");
      return response.data.body;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },

  profileEdit: async (firstName, lastName, token) => {
    apiRequests.setBearer(token);

    try {
      const response = await axios.put("/profile", { firstName, lastName });
      return response.data.body;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },
};

export default apiRequests;
