import { Schedules } from "./queries";
import { extractData, filterData, insertData } from "../utils/processData";
import { fetchData } from "../utils/api";

export const updateDB = async () => {
  try {
    await Schedules.deleteAll();
    const data = await fetchData();
    if (!data) {
      throw new Error("Failed to fetch data");
    }
    const schedules = extractData(data);
    const filteredSchedules = filterData(schedules);
    insertData(filteredSchedules);
    console.log("Schedules successfully updated");
  } catch (err) {
    console.error(err);
  }
};
