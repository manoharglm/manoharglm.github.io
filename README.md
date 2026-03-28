# manoharglm.github.io

Portfolio site rebuilt with Astro.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm deploy
```

## Data source

The homepage content is pulled from a public JSON endpoint at build time:

- `src/lib/portfolio.ts`

## Notes

- Static site output, good fit for GitHub Pages
- Deploy script publishes the `dist/` directory with `gh-pages`
- Current rewrite work lives on the `astro-rewrite` branch
