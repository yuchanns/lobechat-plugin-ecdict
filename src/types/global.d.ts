import { Service } from "@cloudflare/workers-types"
import { Hono } from "hono/tiny"
import { PluginSchema } from "@lobehub/chat-plugin-sdk"
import { DrizzleD1Database } from "drizzle-orm/d1"

export { }

declare global {
  interface Bindings {
    MYSELF: Service
    DB: D1Database
    db: DrizzleD1Database
  }

  interface APIProvider<T> {
    name: string
    path: string
    route: Hono<{ Bindings: T }>
    description: string
    parameters: PluginSchema
  }
}
