import axios from "axios";

export const login = async (email, password) => {
  const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
  return response.data;
};
