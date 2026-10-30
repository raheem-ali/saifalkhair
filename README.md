# Saif Al Khair website

1. `npm install`
2. `npm run dev` -> http://localhost:3000

Edit all content in `lib/data.ts`.
Adding to an existing project: copy `app/`, `components/`, `lib/` and use the same `postcss.config.mjs`.
Make sure `app/globals.css` has NO old resets like `* { margin:0; padding:0 }` (they override Tailwind v4 utilities).
If your project uses a `src/` folder, put app/components/lib inside it and set paths to "./src/*".
