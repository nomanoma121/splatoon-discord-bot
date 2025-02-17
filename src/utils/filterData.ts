import { TMatchData, TSchedule } from "./types";

type TFilterData = {
  regular: TMatchData[];
  bankara_open: TMatchData[];
  bankara_challenge: TMatchData[];
  x: TMatchData[];
};

const addProp = <T>(data: TMatchData, key: T): TTransformData => {
  return { ...data, matchTypeKey: key as string };
};

type TTransformData = TMatchData & { matchTypeKey: string };

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

export const filterData = (data: TFilterData): TSchedule[] => {
  const objKeys = Object.keys(data) as (keyof TFilterData)[];
  const filteredData: TSchedule[] = [];

  for (const key of objKeys) {
    const transformedData = data[key].map((d) => addProp(d, key));
    const newData = transformData(transformedData); 
    filteredData.push(...newData);
  }

  return filteredData;
};
