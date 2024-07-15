import axios from "axios";

export const getGeoInfo = async (ip, token) => {
  const response = await axios.post(
    "http://localhost:5000/api/geo/",
    { ip },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const getHistory = async (token) => {
  const response = await axios.get("http://localhost:5000/api/geo/history", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteHistories = async (ids, token) => {
  const response = await axios.delete("http://localhost:5000/api/geo/history", {
    data: { ids },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
