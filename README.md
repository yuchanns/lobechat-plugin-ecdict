# 📚 LobeChat ECDICT Plugin

<div align="center">
  <a href="README.md">English</a>
</div>

<p align="center">
  <img src="https://img.shields.io/github/license/yuchanns/lobechat-plugin-ecdict?style=flat-square" alt="license">
  <img src="https://img.shields.io/github/stars/yuchanns/lobechat-plugin-ecdict?style=flat-square" alt="stars">
  <img src="https://img.shields.io/github/forks/yuchanns/lobechat-plugin-ecdict?style=flat-square" alt="forks">
</p>

A powerful English-Chinese dictionary plugin for [LobeChat](https://github.com/lobehub/lobe-chat) that provides instant word lookup and translation services. Based on the comprehensive [ECDICT](https://github.com/skywind3000/ECDICT) dictionary database.

## ✨ Features

- 🔍 Fast and accurate English-Chinese word lookups
- 📖 Comprehensive dictionary entries with detailed explanations
- ☁️ Cloudflare Workers powered for global accessibility
- 🚀 High performance with D1 database integration
- 🔄 Real-time translation and word definition lookup

## 🛠️ Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended package manager)
- [Cloudflare Workers](https://workers.cloudflare.com/) account
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)

### Getting Started

1. Clone the repository with submodules:

```bash
git clone --recursive git@github.com:yuchanns/lobechat-plugin-ecdict.git
cd lobechat-plugin-ecdict
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up the development database:

```bash
pnpm dev:setup
```

4. Start the development server:

```bash
pnpm dev
```

> **Note**: If database setup fails, you may need to import the data manually using database management tools like Navicat.

## 🚀 Deployment

1. First-time setup:

```bash
# Configure D1 database
pnpm deploy:setup
```

2. Deploy to Cloudflare Workers:

```bash
pnpm deploy
```

After deployment, your plugin manifest will be available at:
```
https://your-worker-name.your-account.workers.dev/manifest.json
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Propose new features
- 📝 Improve documentation
- 👩‍💻 Submit pull requests

## 📝 License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [LobeChat](https://github.com/lobehub/lobe-chat) - The amazing chatbot platform
- [ECDICT](https://github.com/skywind3000/ECDICT) - The comprehensive English-Chinese dictionary database
- [Cloudflare Workers](https://workers.cloudflare.com/) - Edge computing platform
