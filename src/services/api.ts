import axios from "axios";

const API_BASE_URL = "https://superstock-backend-1.onrender.com/api";

export const fetchEquipments = async () => {
  const response = await axios.get(`${API_BASE_URL}/equipment`);
  return response.data;
};
