import axios from "axios";
import { TFetchData } from "./types";
import dotenv from "dotenv";

dotenv.config();
const API_URL = "https://spla3.yuu26.com/api/schedule";

export const fetchData = async (): Promise<TFetchData | null> => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "User-Agent": process.env.USER_AGENT,
      }
    });
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
