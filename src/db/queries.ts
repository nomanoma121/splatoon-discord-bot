import { db } from "./index";
import { schedules, stages, rules, matchTypes } from "./schema";
import { SQLiteTable } from "drizzle-orm/sqlite-core";
import { eq, and, or, not, aliasedTable, desc, asc, max } from "drizzle-orm";
import { TSchedule } from "../utils/types";
import { convertToISOJST, ceilDate, floorDate } from "../utils/date";

const getAll = async (table: SQLiteTable) => {
  return await db.select().from(table);
};

const create = async (table: SQLiteTable, values: any) => {
  return await db.insert(table).values(values);
};

const clean = async () => {
  const now = new Date();
  const begin = floorDate(now.toString());
  return await db
    .delete(schedules)
    .where(not(eq(schedules.startTime, convertToISOJST(begin))));
};

const deleteAll = async (table: SQLiteTable) => {
  return await db.delete(table);
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
  const begin = floorDate(now.toString());
  const stage1 = aliasedTable(stages, "stage1");
  const stage2 = aliasedTable(stages, "stage2");
  return await db
    .select()
    .from(schedules)
    .leftJoin(stage1, eq(stage1.id, schedules.stage1ID))
    .leftJoin(stage2, eq(stage2.id, schedules.stage2ID))
    .innerJoin(rules, eq(rules.key, schedules.ruleKey))
    .innerJoin(matchTypes, eq(matchTypes.key, schedules.matchTypeKey))
    .where(eq(schedules.startTime, convertToISOJST(begin)));
};

const nextSchedules = async () => {
  const now = new Date();
  const begin = ceilDate(now.toString());
  const stage1 = aliasedTable(stages, "stage1");
  const stage2 = aliasedTable(stages, "stage2");

  return await db
    .select()
    .from(schedules)
    .leftJoin(stage1, eq(stage1.id, schedules.stage1ID))
    .leftJoin(stage2, eq(stage2.id, schedules.stage2ID))
    .innerJoin(rules, eq(rules.key, schedules.ruleKey))
    .innerJoin(matchTypes, eq(matchTypes.key, schedules.matchTypeKey))
    .where(eq(schedules.startTime, convertToISOJST(begin)));
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
  deleteAll: () => deleteAll(schedules),
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
