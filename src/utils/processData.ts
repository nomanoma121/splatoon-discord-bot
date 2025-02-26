import { TSchedule, TSchedules, TFetchData, TMatchData,  } from './types';
import { Schedules } from '../db/queries';

export const insertData = (data: TSchedule[]): void => {
  data.forEach((schedule) => {
    Schedules.create(schedule);
  });
}

const transformData = (data: TTransformData[]): TSchedule[] => {
  return data.map((d) => {
    return {
      startTime: d.start_time,
      endTime: d.end_time,
      matchTypeKey: d.matchTypeKey,
      ruleKey: d.rule.key,
      stage1ID: d.stages[0].id,
      stage2ID: d.stages[1].id,
    };
  });
};

const addProp = <T>(data: TMatchData, key: T): TTransformData => {
  return { ...data, matchTypeKey: key as string };
};

type TTransformData = TMatchData & { matchTypeKey: string };

export const filterData = (data: TSchedules): TSchedule[] => {
  const objKeys = Object.keys(data) as (keyof TSchedules)[];
  const filteredData: TSchedule[] = [];

  for (const key of objKeys) {
    const transformedData = data[key].map((d) => addProp(d, key));
    const newData = transformData(transformedData); 
    filteredData.push(...newData);
  }

  return filteredData;
};

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
