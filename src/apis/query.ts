import { Hono } from "hono/tiny"
import { tableStarDict } from "../schema"
import { eq } from "drizzle-orm"

const route = new Hono<{ Bindings: Bindings }>()

const apiQuery: APIProvider<Bindings> = {
  name: "query",
  path: "query",
  route: route,
  description: "Query the dictionary for a word.",
  parameters: {
    type: "object",
    properties: {
      word: {
        type: "string",
        description: "The word to query.",
      }
    },
    required: ["word"],
  },
}

route.post("/*", async (c) => {
  const { word } = await c.req.json() as { word: string }
  const result = await c.env.db.select()
    .from(tableStarDict)
    .limit(1)
    .where(eq(tableStarDict.word, word))
    .get()
  if (!result) { 
    throw new Error(`Word not found: ${word}`)
  }
  return c.json(result)
})


export default apiQuery
