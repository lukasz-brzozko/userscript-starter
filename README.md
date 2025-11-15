# Userscript Starter

A modern, well-structured starter template for creating browser userscripts. This template provides a solid foundation for developing userscripts with TypeScript, Vite.

## Features

- 🪄 **TypeScript** - Write type-safe code that gets compiled for browser compatibility
- ⚡ **Vite** - Fast build tool with hot module replacement and watch mode
- 📝 **ESLint Configuration** - Code quality and consistency checks with TypeScript support
- 🎨 **Stylelint Support** - CSS-in-JS linting and style validation
- ✨ **Prettier Support** - Automatic code formatting
- 🏗️ **Build System** - Automated build process that merges metadata with compiled code
- 🚀 **Development Server** - Local dev server for testing userscripts with Violentmonkey
- 📦 **Ready to Use** - Includes example code structure and helper functions

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v22 or higher recommended)
- **npm** (comes with Node.js)
- A userscript manager browser extension:
  - [Violentmonkey](https://violentmonkey.github.io/) (recommended)
  - [Tampermonkey](https://www.tampermonkey.net/)
  - [Greasemonkey](https://www.greasespot.net/)

### Recommended IDE Extensions

For a better development experience, it's recommended to install the following IDE extensions:

- **ESLint** - Provides real-time linting feedback and automatic fixes
- **Stylelint** - Provides real-time CSS-in-JS linting and style validation

## Installation

1. Clone or download this repository:

```bash
git clone https://github.com/lukasz-brzozko/userscript-starter.git
cd userscript-starter
```

2. Install dependencies:

```bash
npm install
```

## Usage

### Development

1. Edit the userscript source files in `src/`:
   - `src/main.ts` - Main entry point
   - `src/metadata/meta.ts` - Userscript metadata header
   - `src/utils/` - Utility functions
   - `src/constants.ts` - Constants and configuration

2. Update the userscript metadata header in `src/metadata/meta.ts` (the `// ==UserScript==` section) with your script details:
   - `@name` - Your script name
   - `@namespace` - Your namespace URL
   - `@version` - Version number or date
   - `@description` - Script description
   - `@match` - URL patterns where the script should run
   - `@author` - Your name
   - `@updateURL` / `@downloadURL` - URLs for auto-updates (if hosting)

3. Start the development server:

```bash
npm run dev
```

This will:

- Start a Vite dev server on `http://localhost:5173`
- Watch for file changes and rebuild automatically
- Serve the userscript at `http://localhost:5173/dist/index.user.js`

4. Install the userscript from the dev server:
   - Open your userscript manager (Tampermonkey, Violentmonkey, etc.)
   - Click "Create a new script" or "Add script"
   - Install from URL: `http://localhost:5173/dist/index.user.js`
   - Or copy the contents of `dist/index.user.js` into the editor
   - Save the script

5. For production builds:

```bash
npx vite build
```

This will create a production-ready `dist/index.user.js` file.

### Available Scripts

- `npm run dev` - Starts Vite dev server with watch mode (runs `vite` and `vite build --watch` concurrently)
- `npx vite build` - Builds the userscript for production
- `npm run format` - Formats code using Prettier (currently formats `.js` files)
- `npm run stylelint` - Lints CSS-in-JS code using Stylelint
- `npm run stylelint:fix` - Automatically fixes CSS-in-JS linting issues

## How It Works

The build process performs the following steps:

1. **Vite Compilation** - Vite compiles TypeScript source files (`src/main.ts`) and bundles them into `dist/index.user.js`
2. **Post-build Processing** - The `postbuild.js` script automatically:
   - Reads the metadata header from `src/metadata/meta.ts`
   - Reads the compiled code from `dist/index.user.js`
   - Merges them together, prepending the metadata header to the compiled code
   - Writes the final `dist/index.user.js` file ready for installation

The development server (`npm run dev`) runs both Vite's dev server and watch mode build concurrently, automatically rebuilding and serving the userscript whenever source files change.

## Customization

### Modifying the Script

The starter template includes:

- **IDS Object** - Centralized element IDs
- **MESSAGES Object** - Centralized messages and error handling
- **Helper Functions**:
  - `css` - Tagged template literal for CSS (works with Prettier and Stylelint)
  - `html` - Tagged template literal for HTML (works with Prettier and Stylelint)
  - `linkStyles()` - Function to inject CSS styles
  - `lookForAppContainer()` - Waits for DOM elements to appear
  - `renderUiElements()` - Renders UI elements

### Example Usage

The template includes an example that:

- Waits for a container element with ID `container`
- Injects custom styles
- Renders a "Hello World" message

Modify these functions to suit your needs!

## Configuration

### Vite

Edit `vite.config.ts` to customize the build process. The configuration includes:

- Build entry point: `src/main.ts`
- Output file: `dist/index.user.js`
- Dev server on port 5173 with userscript serving middleware
- Post-build hook that runs `postbuild.js` automatically

### TypeScript

Edit `tsconfig.json` to customize TypeScript compilation settings.

### ESLint

Edit `eslint.config.js` to customize linting rules. The configuration includes:

- Recommended JavaScript rules
- TypeScript ESLint plugin for TypeScript support
- Perfectionist plugin for code organization
- Support for browser, Node.js, and Greasemonkey globals

### Prettier

Modify the `.prettierrc` file to customize formatting options.

### Stylelint

Edit `stylelint.config.js` to customize CSS-in-JS linting rules. The configuration includes:

- Standard Stylelint rules
- Clean order plugin for CSS property ordering
- PostCSS Styled Syntax support for CSS-in-JS (works with tagged template literals like the `css` helper function)

## Publishing

If you want to enable auto-updates for your userscript:

1. Host your repository on GitHub (or another Git hosting service)
2. Update the `@updateURL` and `@downloadURL` in `src/metadata/meta.ts` to point to the raw files:
   ```
   @updateURL    https://raw.githubusercontent.com/yourusername/yourrepo/main/dist/index.user.js
   @downloadURL  https://raw.githubusercontent.com/yourusername/yourrepo/main/dist/index.user.js
   ```
3. Users with userscript managers will automatically receive updates

## License

MIT

## Author

Łukasz Brzózko
