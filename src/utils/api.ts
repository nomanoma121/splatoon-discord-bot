import axios from "axios";
import { TFetchData } from "./types";
import dotenv from "dotenv";

dotenv.config();

export const fetchData = async (): Promise<TFetchData | null> => {
  try {
    if (!process.env.API_URL) {
      throw new Error("API_URL is not defined");
    }
    const response = await axios.get(process.env.API_URL);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error(error);
  }
  return null;
};
