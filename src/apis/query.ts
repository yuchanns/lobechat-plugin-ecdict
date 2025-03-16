import { Hono } from "hono/tiny"

const route = new Hono()

const apiQuery: APIProvider = {
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

route.post("/*", async (_c) => {
  throw new Error("Not implemented")
})


export default apiQuery
