# JavaScript Template

A reusable JavaScript project template with ESLint, Prettier, and VS Code settings already configured.

---

## Features

- ✅ ESLint (Flat Config)
- ✅ Prettier
- ✅ Format on Save
- ✅ VS Code Workspace Settings
- ✅ npm Scripts
- ✅ Git Ready

---

## Project Structure

```text
js-template/
├── src/
│   └── index.js
├── dist/
├── .vscode/
│   └── settings.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── package.json
└── README.md
```

---

## Installation

Clone the repository and install the dependencies.

```bash
npm install
```

---

## Available Scripts

### Lint the project

```bash
npm run lint
```

Checks your JavaScript for errors and bad practices.

---

### Automatically fix lint issues

```bash
npm run lint:fix
```

Fixes issues that ESLint can automatically resolve.

---

### Format the project

```bash
npm run format
```

Formats every supported file using Prettier.

---

### Check formatting

```bash
npm run format:check
```

Checks whether the project follows the configured Prettier rules.

---

## Configuration

### ESLint

Configuration file:

```text
eslint.config.js
```

### Prettier

Configuration file:

```text
.prettierrc
```

### VS Code

Workspace settings:

```text
.vscode/settings.json
```

These settings automatically:

- Format files on save.
- Use Prettier as the default formatter.
- Enable ESLint code actions.

---

## Creating a New Project

1. Click **Use this template** on GitHub.
2. Give your new repository a name.
3. Clone it.

```bash
git clone <repository-url>
```

4. Install dependencies.

```bash
npm install
```

5. Start coding.

---

## Tech Stack

- JavaScript
- Node.js
- npm
- ESLint
- Prettier
- Git

---

## License

This project is free to use.
