import axios from "axios";

const API_BASE_URL = "https://taxi-api.ioready.io/api";

export async function Login(data) {
  try {
    const response = await axios.post(`${API_BASE_URL}/v1/auth/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function UserSignup(data) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const response = await axios.post(
      `${API_BASE_URL}/v1/auth/register_renter`,
      data,
      config,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function HostSignup(data) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const response = await axios.post(
      `${API_BASE_URL}/v1/auth/register_host`,
      data,
      config,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getAllCars() {
  try {
    const response = await axios.get(`${API_BASE_URL}/v1/car/getall`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getCarById(id) {
  try {
    const response = await axios.get(`${API_BASE_URL}/v1/car/getById/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function checkAvailability() {
  try {
    const response = await axios.get(`${API_BASE_URL}/v1/booking/availability`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
