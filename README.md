# 🤯 lobechat-plugin-ecdict
A plugin for LobeChat that provides English-Chinese dictionary lookup.

## ⚙️  Development

We use [pnpm](https://pnpm.io/) as package manager. Follow these simple steps to get started:

```bash
# 📦 Install dependencies
pnpm install

# 🛠️ Start development server
pnpm dev
```

### Setup the database

```bash
pnpm dev:setup
```


## 🌟 Deployment

Before the first time of deploying, make sure to set the D1 database:

```bash
pnpm deploy:setup
```

This is a Cloudflare Worker project. Deploy it to Cloudflare Workers with just one command:

```bash
# 🚀 Build and deploy
pnpm run deploy
```

Once deployed, you can access your plugin manifest at:
`https://your-worker-name.your-account.workers.dev/manifest.json`
