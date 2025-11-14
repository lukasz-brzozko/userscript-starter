# Userscript Starter

A modern, well-structured starter template for creating browser userscripts. This template provides a solid foundation for developing userscripts with modern JavaScript, build tools, and best practices.

## Features

- 🪄 **Modern JavaScript** - Write ES6+ code that gets transpiled for browser compatibility
- 🔧 **Babel Integration** - Automatic code transpilation using Babel
- 📝 **ESLint Configuration** - Code quality and consistency checks
- 🎨 **Stylelint Support** - CSS-in-JS linting and style validation
- ✨ **Prettier Support** - Automatic code formatting
- 🏗️ **Build System** - Automated build process that generates both `.user.js` and `.meta.js` files
- 📦 **Ready to Use** - Includes example code structure and helper functions

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v22 or higher recommended)
- **npm** (comes with Node.js)
- A userscript manager browser extension:
  - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Edge, Safari)
  - [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox, Edge)
  - [Greasemonkey](https://www.greasespot.net/) (Firefox)

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

1. Edit the userscript in `src/index.user.js`
2. Update the userscript metadata header (the `// ==UserScript==` section) with your script details:
   - `@name` - Your script name
   - `@namespace` - Your namespace URL
   - `@version` - Version number or date
   - `@description` - Script description
   - `@match` - URL patterns where the script should run
   - `@author` - Your name
   - `@updateURL` / `@downloadURL` - URLs for auto-updates (if hosting)

3. Build the userscript:

```bash
npm run build
```

4. Install the compiled userscript:
   - Open your userscript manager (Tampermonkey, Violentmonkey, etc.)
   - Click "Create a new script" or "Add script"
   - Copy the contents of `dist/index.user.js` into the editor
   - Save the script

### Available Scripts

- `npm run build` - Builds the userscript (copies source and transpiles with Babel)
- `npm run format` - Formats code using Prettier
- `npm run stylelint` - Lints CSS-in-JS code using Stylelint
- `npm run stylelint:fix` - Automatically fixes CSS-in-JS linting issues

## How It Works

The build process (`npm run build`) performs the following steps:

1. **Copy Metadata** - Extracts the userscript header (metadata) and saves it to `dist/index.meta.js`
2. **Copy Source** - Copies the full source file to `dist/index.user.js`
3. **Transpile** - Uses Babel to transpile the code for browser compatibility

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

### Babel

Edit `babel.config.json` to customize transpilation settings. The default configuration uses `@babel/preset-env` for automatic browser compatibility.

### ESLint

Edit `eslint.config.js` to customize linting rules. The configuration includes:

- Recommended JavaScript rules
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
2. Update the `@updateURL` and `@downloadURL` in the userscript header to point to the raw files:
   ```
   @updateURL    https://raw.githubusercontent.com/yourusername/yourrepo/main/dist/index.meta.js
   @downloadURL  https://raw.githubusercontent.com/yourusername/yourrepo/main/dist/index.user.js
   ```
3. Users with userscript managers will automatically receive updates

## License

MIT

## Author

Łukasz Brzózko
