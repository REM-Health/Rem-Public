## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Prettier Setup

We use Prettier for formatting the code. Install prettier extension and add the following configurations to user settings JSON in VSCode:

```
  "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[typescriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
```

Also using https://github.com/ony3000/prettier-plugin-classnames for formatting long Tailwind class names.

## Tailwind IntelliSense Setup

Add the following configurations in user settings JSON in VSCode.
This will capture styles defined in `class:` or `cn()` function.

```
  "tailwindCSS.experimental.classRegex": [
    "class:\\s*?[\"'`]([^\"'`]*).*?,",
    ["\\bcn\\(([^)]+)\\)", "\"([^\"]*)\""],
  ],
```
