# Hugo Tailwind CSS Starter Theme

A Hugo starter theme using **Tailwind CSS 4**, **Skeleton UI**, and Hugo's native [`css.TailwindCSS`](https://gohugo.io/functions/css/tailwindcss/) pipe. No separate Tailwind watch process — Hugo compiles CSS during `hugo server` / `hugo build`.

Reference site: [stephenc.art](https://stephenc.art/)

## Requirements

- Hugo **extended** v0.161.0 or later
- Node.js 18+ (Tailwind CLI is invoked by Hugo via `node_modules`)

## Usage as a submodule

```bash
git submodule add https://github.com/taocode/hugo-theme-tailwindcss-starter themes/hugo-theme-tailwindcss-starter
```

In your site's `config.toml`:

```toml
theme = "hugo-theme-tailwindcss-starter"
```

Install npm dependencies in your **site repo** (not the theme):

```bash
npm install -D tailwindcss @tailwindcss/cli @tailwindcss/typography @skeletonlabs/skeleton
```

Enable Hugo build stats and mount `hugo_stats.json` (see [Hugo Tailwind docs](https://gohugo.io/functions/css/tailwindcss/#setup)). Override `assets/css/tailwind.input.css` in your site to customize Skeleton themes and `@source` paths.

Your site layouts override the theme's — copy and adapt partials from this repo as needed.

## Try the example site

From the theme repository:

```bash
cd exampleSite
npm install
npm run dev
```

The example site sets `themesDir = ".."` and `theme = "."` in `config.toml` so Hugo loads this theme from the repo root.

## Color system

Uses [Skeleton UI](https://www.skeleton.dev/) pairing utilities (e.g. `bg-surface-50-950`, `text-primary-500`) with the **cerberus** preset theme. Sites can register a custom Skeleton theme in their own `tailwind.input.css` and set `data-theme` on `<html>`.

Dark mode toggles `html.dark` and `color-scheme` via `assets/js/site.js`.

## What's included

- Base layouts (`baseof`, `list`, `single`, `index`, `404`)
- Header, footer, head partials with Hugo `css.TailwindCSS` pipeline
- Default `assets/css/tailwind.input.css` (Cerberus + typography plugin)
- Dev partials: breakpoint indicator and page variable dump (Hugo server only)

## License

MIT
