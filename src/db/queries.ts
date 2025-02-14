import { db } from "./index";
import { schedules, stages, rules, matchTypes } from "./schema";
import { SQLiteTable } from "drizzle-orm/sqlite-core";

type Schedule = {
  startTime: string;
  endTime: string;
  matchTypeKey: string;
  ruleKey: string;
  stage1ID: number;
  stage2ID: number;
};

const getAll = async (table: SQLiteTable) => {
  return await db.select().from(table);
}

const create = async (table: SQLiteTable, values) => {
  return await db.insert(table).values(values);
}

export const Schedules = {
  getAll: () => getAll(schedules),
  create: (values: Schedule) => create(schedules, values),
}

export const Stages = {
  getAll: () => getAll(stages),
  create: (data: {name: string, imageUrl: string}) => create(stages, data),
}

export const Rules = {
  getAll: () => getAll(rules),
  create: (data: {key: string, name: string}) => create(rules, data),
}

export const MatchTypes = {
  getAll: () => getAll(matchTypes),
  create: (data: {key: string, name: string}) => create(matchTypes, data),
}

export const deleteAll = async () => {
  await db.delete(schedules);
  await db.delete(stages);
  await db.delete(rules);
  await db.delete(matchTypes);
}
