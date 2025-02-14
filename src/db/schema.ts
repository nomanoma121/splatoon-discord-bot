import * as t from "drizzle-orm/sqlite-core";
import { sqliteTable as table } from "drizzle-orm/sqlite-core";

export const schedules = table("schedules", {
  id: t.int().primaryKey({ autoIncrement: true }),
  startTime: t.text("start_time").notNull(),
  endTime: t.text("end_time").notNull(),
  matchTypeKey: t.text("match_type_key").notNull(),
  ruleKey: t.text("rule_key").notNull(),
  stage1ID: t.int("stage1_id").notNull(),
  stage2ID: t.int("stage2_id").notNull(),
});

export const matchTypes = table("match_types", {
  id: t.int().primaryKey({ autoIncrement: true }),
  key: t.text().notNull(),
  name: t.text().notNull(),
});

export const rules = table("rules", {
  id: t.int().primaryKey({ autoIncrement: true }),
  key: t.text().notNull(),
  name: t.text().notNull(),
});

export const stages = table("stages", {
  id: t.int().primaryKey({ autoIncrement: true }),
  name: t.text().notNull(),
  imageUrl: t.text("image_url").notNull(),
});

