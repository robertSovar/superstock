import axios from "axios";

const API_BASE_URL = "https://superstock-backend-1.onrender.com/api";

interface EquipmentData {
  name: string;
  quantity: number;
  type: string;
  image?: string;
  status: string;
  purchaseDate: string;
}

export const fetchEquipments = async () => {
  const response = await axios.get(`${API_BASE_URL}/equipment`);
  return response.data;
};

export const addEquipment = async (data: EquipmentData) => {
  const response = await axios.post(`${API_BASE_URL}/equipment`, data);
  return response.data;
};

export const editEquipments = async (
  id: string,
  updatedData: EquipmentData
) => {
  const response = await axios.put(
    `${API_BASE_URL}/equipment/${id}`,
    updatedData
  );
  return response.data;
};

export const deleteEquipment = async (_id: string) => {
  const response = await axios.delete(`${API_BASE_URL}/equipment/${_id}`);
  return response.data;
};
