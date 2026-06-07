---
author: Mark Jones
title: Hugo Tailwind CSS Starter
date: 2021-05-15
description: Hugo starter theme with Tailwind CSS 4, Skeleton UI, and Hugo's css.TailwindCSS pipe.
---

## Tailwind CSS 4 + Skeleton UI + Hugo

This theme uses [Tailwind CSS 4](https://tailwindcss.com/), [Skeleton UI](https://www.skeleton.dev/) color pairings (e.g. `bg-surface-50-950`), and Hugo's native [`css.TailwindCSS`](https://gohugo.io/functions/css/tailwindcss/) pipe — no separate Tailwind watch process.

Reference site: [stephenc.art](https://stephenc.art/)

## What's included

- Dark mode toggle (`html.dark` + `color-scheme`)
- Cerberus Skeleton preset (override in your site's `tailwind.input.css`)
- Dev partials: breakpoint indicator and page parameters (Hugo server only)

## Try the example site

```bash
cd exampleSite
npm install
npm run dev
```

Open [http://localhost:1313/](http://localhost:1313/).

## Usage as a submodule

```bash
git submodule add https://github.com/taocode/hugo-theme-tailwindcss-starter themes/hugo-theme-tailwindcss-starter
```

In your site `config.toml`:

```toml
theme = "hugo-theme-tailwindcss-starter"
```

Install Tailwind/Skeleton in your **site repo** and override `assets/css/tailwind.input.css` as needed. See the theme `readme.md` for Hugo build stats setup.

## License

MIT License
