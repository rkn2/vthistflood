# VT Historic Flood Guide

This project is a React application built with Vite, designed to provide guidance on adapting historic buildings for flood resilience. It includes an engineering guide and information on funding options.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Vite:** A fast build tool and development server for modern web projects.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **ESLint:** A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
* **Font Awesome:** For icons.
* **Google Fonts (Inter):** For typography.

## Project Structure

The project follows a standard Vite + React structure:

* **`public/`**: Contains static assets that are copied directly to the build output. (Implicit based on Vite conventions, `vite.svg` is referenced in `index.html`)
* **`src/`**: Contains the main application code.
    * **`assets/`**: (Implicit, though not explicitly shown in provided files, usually for images, etc.)
    * **`components/`**: Reusable React components.
        * `ActionButton.jsx`: A button component for actions within the application.
        * `StepContentDisplay.jsx`: A component to display content for various steps, including descriptions, lists, cautions, and notes.
    * **`pages/`**: Components representing different pages or views of the application.
        * `LandingPage.jsx`: The initial page users see.
        * `FundingOptionsPage.jsx`: Displays funding opportunities.
        * `EngineeringMainHubPage.jsx`: The main hub for the engineering guide.
        * `EngineeringSectionAccordionPage.jsx`: Displays engineering guide sections in an accordion style.
        * `EngineeringStepPage.jsx`: Displays individual steps within the engineering guide. (File exists but not explicitly detailed in provided content, inferred from naming and `App.jsx`)
    * `App.jsx`: The main application component, handling routing and page rendering.
    * `App.css`: Global styles for the application.
    * `data.js`: Contains the site's content, including page definitions, text, and navigation structure.
    * `index.css`: Tailwind CSS directives and global body styles.
    * `main.jsx`: The entry point of the React application.
* `index.html`: The main HTML file where the React app is mounted.
* `package.json`: Lists project dependencies and scripts.
* `package-lock.json`: Records the exact versions of dependencies.
* `vite.config.js`: Configuration file for Vite, including the base path for deployment.
* `tailwind.config.js`: Configuration for Tailwind CSS.
* `postcss.config.js`: Configuration for PostCSS, used with Tailwind CSS and Autoprefixer.
* `eslint.config.js`: Configuration for ESLint.

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd vthistflood
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    (Or `yarn install` if you prefer Yarn)

## Available Scripts

In the project directory, you can run the following scripts:

* ### `npm run dev`
    Runs the app in development mode using Vite.
    Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.
    The page will reload if you make edits.

* ### `npm run build`
    Builds the app for production to the `dist` folder.
    It correctly bundles React in production mode and optimizes the build for the best performance.

* ### `npm run lint`
    Runs ESLint to check for linting errors in the project.

* ### `npm run preview`
    Serves the production build locally to preview it.

* ### `npm run predeploy`
    This script is automatically run before the `deploy` script. It ensures the project is built before deployment.

* ### `npm run deploy`
    Deploys the application to GitHub Pages using the `gh-pages` package. It pushes the content of the `dist` folder to the `gh-pages` branch.

## ESLint Configuration

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* `@vitejs/plugin-react` uses Babel for Fast Refresh.
* `@vitejs/plugin-react-swc` uses SWC for Fast Refresh.

The ESLint configuration (`eslint.config.js`) includes:
* Ignoring the `dist` directory.
* Configuration for `js` and `jsx` files.
* Browser globals.
* ECMAScript 2020 and JSX features.
* Plugins for `react-hooks` and `react-refresh`.
* Recommended rules from ESLint and `react-hooks`.
* A rule for unused variables (`no-unused-vars`), ignoring variables starting with an uppercase letter or underscore.
* A warning for `react-refresh/only-export-components`.

For production applications, it's recommended to use TypeScript with type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for more information.

## Deployment to GitHub Pages

The project is configured for deployment to GitHub Pages.
The `vite.config.js` file sets the `base` path to `/vthistflood/`, which should match your repository name for correct asset loading on GitHub Pages.

To deploy:
1.  Ensure your repository is named `vthistflood` or update the `base` path in `vite.config.js` and the `homepage` field in `package.json` (if you add one).
2.  Run `npm run deploy`.

## Important Notes for UI

* Ensure Font Awesome and Inter font links are present in the `<head>` of your `index.html` for icons and custom fonts to work correctly.
    ```html
    <link rel="stylesheet" href="[https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css)" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    <link href="[https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap](https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap)" rel="stylesheet" />
    ```
    (Note: The `App.jsx` comment refers to `font-awesome/5.15.4` but `index.html` uses `font-awesome/6.0.0`. The version in `index.html` is likely the correct one being used.)
* The application uses global styles defined in `src/App.jsx` via `<style jsx global>{...}</style>` and also in `src/index.css` for Tailwind base, components, and utilities.