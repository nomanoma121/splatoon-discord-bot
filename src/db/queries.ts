import { db } from "./index";
import { schedules, stages, rules, matchTypes } from "./schema";
import { SQLiteTable } from "drizzle-orm/sqlite-core";
import { eq, and, or, gt, aliasedTable, desc, asc, max } from "drizzle-orm";
import { TSchedule } from "../utils/types";

const getAll = async (table: SQLiteTable) => {
  return await db.select().from(table);
};

const create = async (table: SQLiteTable, values: any) => {
  return await db.insert(table).values(values);
};

const clean = async () => {
  const maxStartTime = await db
    .select({ value: max(schedules.startTime) })
    .from(schedules) as { value: string }[];
  return await db
    .delete(schedules)
    .where(gt(schedules.startTime, maxStartTime[0].value));
};

const search = async (
  stage: string | null,
  rule: string | null,
  matchType: string | null
) => {
  const stage1 = aliasedTable(stages, "stage1");
  const stage2 = aliasedTable(stages, "stage2");
  // TODO: 必要な分だけ取得するように修正
  return await db
    .select()
    .from(schedules)
    .leftJoin(stage1, eq(stage1.id, schedules.stage1ID))
    .leftJoin(stage2, eq(stage2.id, schedules.stage2ID))
    .innerJoin(rules, eq(rules.key, schedules.ruleKey))
    .innerJoin(matchTypes, eq(matchTypes.key, schedules.matchTypeKey))
    .where(
      and(
        stage ? or(eq(stage1.name, stage), eq(stage2.name, stage)) : undefined,
        rule ? eq(rules.name, rule) : undefined,
        matchType ? eq(matchTypes.name, matchType) : undefined
      )
    );
};

const getTimeRange = async () => {
  const min = await db
    .select()
    .from(schedules)
    .orderBy(asc(schedules.startTime));
  const max = await db
    .select()
    .from(schedules)
    .orderBy(desc(schedules.startTime));
  return {
    min: min[0].startTime,
    max: max[0].startTime,
  };
};

const currentSchedules = async () => {
  const now = new Date();
  // 現在の時間が奇数ならそのまま、偶数なら1引く
  const beginHour =
    now.getHours() % 2 === 0 ? now.getHours() - 1 : now.getHours();
  const begin = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    beginHour,
    0,
    0
  ).toString();
  return await db
    .select()
    .from(schedules)
    .where(eq(schedules.startTime, begin));
};

const nextSchedules = async () => {
  const now = new Date();
  const beginHour =
    now.getHours() % 2 === 0 ? now.getHours() + 1 : now.getHours() + 2;
  const begin = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    beginHour,
    0,
    0
  ).toString();
  return await db
    .select()
    .from(schedules)
    .where(eq(schedules.startTime, begin));
};
  
export const Schedules = {
  getAll: () => getAll(schedules),
  create: (data: TSchedule) => create(schedules, data),
  search: (
    stage: string | null,
    rule: string | null,
    matchType: string | null
  ) => search(stage, rule, matchType),
  current: () => currentSchedules(),
  next: () => nextSchedules(),
  getTimeRange: () => getTimeRange(),
  clean: () => clean(),
  deleteAll: () => db.delete(schedules),
};

export const Stages = {
  getAll: () => getAll(stages),
  create: (data: { name: string; imageUrl: string }) => create(stages, data),
};

export const Rules = {
  getAll: () => getAll(rules),
  create: (data: { key: string; name: string }) => create(rules, data),
};

export const MatchTypes = {
  getAll: () => getAll(matchTypes),
  create: (data: { key: string; name: string }) => create(matchTypes, data),
};
