import { sqliteTable, text } from "drizzle-orm/sqlite-core"

export const tableStarDict = sqliteTable("stardict", {
  id: text("id").primaryKey(),
  word: text("word").notNull().unique(),
  sw: text("sw").notNull(),
  phonetic: text("phonetic"),
  definition: text("definition"),
  translation: text("translation"),
  pos: text("pos"),
  collins: text("collins").default("0"),
  oxford: text("oxford").default("0"),
  tag: text("tag"),
  bnc: text("bnc"),
  frq: text("frq"),
  exchange: text("exchange"),
  detail: text("detail"),
  audio: text("audio")
})

