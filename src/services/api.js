// services/api.js
import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/";

export const fetchCharacters = async (queryParams) => {
  try {
    const response = await axios.get(`${BASE_URL}character`, {
      params: queryParams,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCharacterById = async (characterId) => {
  try {
    const response = await axios.get(`${BASE_URL}character/${characterId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
