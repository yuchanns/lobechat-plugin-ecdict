import apiMatch from "./match"
import apiQuery from "./query"

export const providers: APIProvider<Bindings>[] = [
  apiQuery,
  apiMatch,
]
