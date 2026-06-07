# Hugo Tailwind CSS Starter Theme

A Hugo starter theme that works with **Tailwind CSS CLI**. Site repos build utility CSS into this theme's `assets/css/tailwind.css`.

Reference site: [stephenc.art](https://stephenc.art/)

## Usage as a submodule

```bash
git submodule add https://github.com/taocode/hugo-theme-tailwindcss-starter themes/hugo-theme-tailwindcss-starter
```

In your site's `config.toml`:

```toml
theme = "hugo-theme-tailwindcss-starter"
```

## Tailwind build (in your site repo)

The site repo owns `tailwind.config.js`, `assets/css/tailwind.input.css`, and npm scripts. CSS is output here:

```
themes/hugo-theme-tailwindcss-starter/assets/css/tailwind.css
```

Example scripts (from stephenc.art):

```json
"tailwind:dev": "tailwindcss -i ./assets/css/tailwind.input.css -o themes/hugo-theme-tailwindcss-starter/assets/css/tailwind.css --watch",
"tailwind": "tailwindcss -i ./assets/css/tailwind.input.css -o themes/hugo-theme-tailwindcss-starter/assets/css/tailwind.css --minify",
"dev": "run-p tailwind:dev hugo:dev"
```

## What's included

- Base layouts (`baseof`, `list`, `single`, `index`, `404`)
- Header, footer, head partials (override in your site `layouts/`)
- Dev partials: breakpoint indicator and page variable dump (Hugo server only)

## License

MIT
