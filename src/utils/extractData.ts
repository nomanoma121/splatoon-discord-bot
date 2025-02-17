import { TFetchData } from "./types";
import { TMatchData } from "./types";

type TSchedules = {
  regular: TMatchData[];
  bankara_open: TMatchData[];
  bankara_challenge: TMatchData[];
  x: TMatchData[];
}

export const extractData = (data: TFetchData): TSchedules => {
  const { result } = data;
  const { regular, bankara_open, bankara_challenge, x } = result;
  const schedules = {
    regular: regular,
    bankara_open: bankara_open,
    bankara_challenge: bankara_challenge,
    x: x
  };
  return schedules;
} 
