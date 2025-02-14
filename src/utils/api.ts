import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get("https://spla3.yuu26.com/api/schedule");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error(error);
  }
};
