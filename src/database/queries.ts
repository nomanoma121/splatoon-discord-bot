const Schedules = {
  createTable: `
    CREATE TABLE IF NOT EXISTS schedules (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      start_time TEXT NOT NULL,
      end_time TEXT NOT NULL,
      match_type_key TEXT NOT NULL,
      rule_key TEXT NOT NULL,
      stage1_id INTEGER NOT NULL,
      stage2_id INTEGER NOT NULL,
      created_at TEXT NOT NULL
    );
  `
}

const MatchTypes = {
  createTable: `
    CREATE TABLE IF NOT EXISTS match_types (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key TEXT NOT NULL,
      name TEXT NOT NULL
    );
  `
}

const Rules = {
  createTable: `
    CREATE TABLE IF NOT EXISTS rules (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key TEXT NOT NULL,
      name TEXT NOT NULL
    );
  `
}

const Stages = {
  createTable: `
    CREATE TABLE IF NOT EXISTS stages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      image_url TEXT NOT NULL
    );
  `
}

export const queries = {
  Schedules,
  MatchTypes,
  Rules,
  Stages
}
