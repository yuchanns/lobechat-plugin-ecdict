import { drizzle } from "drizzle-orm/d1"
import { Context, Next } from "hono"

export const dbMiddleware = async (c: Context<{ Bindings: Bindings }>, next: Next) => {
  const db = drizzle(c.env.DB)
  c.env.db = db

  await next()
}
