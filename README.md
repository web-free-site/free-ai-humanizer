# Free AI Humanizer

[Free AI Humanizer](https://free-ai-humanizer.web-free.site) rewrites AI-generated English text in the browser with tone options and a live word counter. No paid LLM APIs.

## Open-source base

| Component | Repository | License |
|-----------|------------|---------|
| Rule engine & phrase lists | [Shahryartariq/tidytext](https://github.com/Shahryartariq/tidytext) | MIT |
| Additional AI-phrase patterns (via TidyText) | [harshaneel/humanize](https://github.com/harshaneel/humanize) | MIT |

Vendored engine: `src/vendor/tidytext-transforms.js` (see `src/vendor/TIDYTEXT-LICENSE`).

## Commands

```bash
npm install
npm run dev    # http://127.0.0.1:43123
npm test
npm run build  # static export to out/
```

Deploy is handled outside this repo (Gentil's box). See `wrangler.toml` and `public/ads.json` for Cloudflare Workers + Adsterra.
