import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api/v1/user";

const apiRequests = {
  getBearer: (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },

  userToken: async (email, password) => {
    try {
      const response = await axios.post("/login", { email, password });
      if (response.status === 200) {
        return response.data.body.token;
      } else {
        throw new Error("Failed to get user token");
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },

  userData: async (token) => {
    apiRequests.getBearer(token);

    try {
      const response = await axios.post("/profile");
      if (response.status === 200) {
        return response.data.body;
      } else {
        throw new Error("Failed to get user data");
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },

  userEdit: async (firstName, lastName, token) => {
    apiRequests.getBearer(token);

    try {
      const response = await axios.put("/profile", { firstName, lastName });
      if (response.status === 200) {
        return response.data.body;
      } else {
        throw new Error("Failed to edit user data");
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },
};

export default apiRequests;
