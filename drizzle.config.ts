import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./database/drizzle/schema.ts",
  dialect: "sqlite",
  out: "./database/drizzle",
});

