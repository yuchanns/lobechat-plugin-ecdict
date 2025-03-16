import { Hono } from "hono/tiny"
import { tableStarDict } from "../schema"
import { and, gte, notLike } from "drizzle-orm"

const route = new Hono<{ Bindings: Bindings }>()

const apiMatch: APIProvider<Bindings> = {
  name: "match",
  path: "match",
  route: route,
  description: "Match the top 5 most similar words.",
  parameters: {
    type: "object",
    properties: {
      word: {
        type: "string",
        description: "The word to match.",
      }
    },
    required: ["word"],
  },
}

route.post("/*", async (c) => {
  const { word } = await c.req.json() as { word: string }
  const result = await c.env.db.select()
    .from(tableStarDict)
    .limit(5)
    .where(and(gte(tableStarDict.sw, word), notLike(tableStarDict.word, `% %`)))
    .orderBy(tableStarDict.sw, tableStarDict.word)
  if (!result) {
    throw new Error(`Word not found: ${word}`)
  }
  return c.json(result)
})


export default apiMatch
