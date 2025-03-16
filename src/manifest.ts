import { LobeChatPluginManifest, PluginSchema } from "@lobehub/chat-plugin-sdk"

// Replace the following with your plugin's information
export const TITLE = "LobeChat Plugin ECDICT"
export const DESCRIPTION = "A plugin for LobeChat that provides English-Chinese dictionary lookup."
const IDENTIFIER = "xyz.yuchanns.lobechat-ecdict"
const HOMEPAGE = "https://github.com/yuchanns/lobechat-plugin-ecdict"
const AUTHOR = "yuchanns"
const TAGS: string[] = ["dictionary", "english", "chinese"]
const SYSTEM_ROLE = "You are a helpful assistant that can search English phrases through tools and return the results in a structured format to help the user with their queries."
const SETTINGS: PluginSchema = {
  type: "object",
  properties: {},
}

export const buildManifest = (url: URL, providers: APIProvider[]): LobeChatPluginManifest => {
  const { protocol, host } = url
  const AVATAR = `${protocol}//${host}/logo`
  return {
    "$schema": "../node_modules/@lobehub/chat-plugin-sdk/schema.json",
    "version": "1",
    "identifier": IDENTIFIER,
    "author": AUTHOR,
    "homepage": HOMEPAGE,
    "gateway": `${protocol}//${host}/api/gateway`,
    "meta": {
      "avatar": AVATAR,
      "tags": TAGS,
      "title": TITLE,
      "description": DESCRIPTION
    },
    "systemRole": SYSTEM_ROLE,
    "settings": SETTINGS,
    "api": Object.entries(providers).map(([_, provider]) => ({
      "name": provider.name,
      "url": `${protocol}//${host}/api/${provider.path}`,
      "description": provider.description,
      "parameters": provider.parameters,
    })),
  }
}
