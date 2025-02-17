import { db } from "./index";
import { schedules, stages, rules, matchTypes } from "./schema";
import { SQLiteTable } from "drizzle-orm/sqlite-core";
import { TSchedule } from "../utils/types";

const getAll = async (table: SQLiteTable) => {
  return await db.select().from(table);
}

const create = async (table: SQLiteTable, values: any) => {
  return await db.insert(table).values(values);
}

const deleteAll = async (table: SQLiteTable) => {
  return await db.delete(table);
}

export const Schedules = {
  getAll: () => getAll(schedules),
  create: (data: TSchedule) => create(schedules, data),
  deleteAll: () => deleteAll(schedules),
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

