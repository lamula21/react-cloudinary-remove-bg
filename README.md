# Getting Started

- Create Svelete App
  `npm create vite@latest`
  Need to install the following packages:
  create-vite@4.4.0
  Ok to proceed? (y) `Y`
  ✔ Project name: … `react-cloudinary-remove-bg`
  ✔ Select a framework: › `Svelte`
  ✔ Select a variant: › `TypeScript`

- Add Tailwind to Svelte Project

```bash
npx svelte-add@latest tailwindcss
```

- Then delete default css from src/app.postcss

# Prettier

- Install Prettier plugin for svelte

```bash
npm i --save-dev prettier-plugin-svelte prettier
```

- Create and add Prettier config

```.prettierrc
{
	"useTabs": true,
	"singleQuote": true,
	"trailingComma": "none",
	"printWidth": 100,
	"plugins": ["prettier-plugin-svelte"],
	"pluginSearchDirs": ["."],
	"overrides": [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
}

```

# DropZoneJs

Drag and Drop easy to use!

- URL: https://www.dropzone.dev/
- Install

```bash
npm i dropzone
```

# Two-up

Web Component. A dynamic divider that shows two files. https://squoosh.app/editor

```bash
npm i two-up-element
```

# Cloudinary Remove Background SDK

```bash
npm i @cloudinary/url-gen
```
