import { TSchedule } from "./types";
import { Schedules } from "../db/queries";

export const insertData = (data: TSchedule[]): void => {
  data.forEach((schedule) => {
    Schedules.create(schedule);
  });
}
