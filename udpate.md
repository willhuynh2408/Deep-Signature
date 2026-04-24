You are a senior frontend engineer. Refactor the existing web project to support deployment under a subdirectory (base path) instead of only working at the root domain.

### Goal

Make the project fully functional when hosted at:
`https://domain.com/deeploma/`
instead of only:
`https://domain.com/`

### Requirements

1. **Convert all absolute URLs to base-path aware URLs**

   * Replace hardcoded domain links (e.g., `https://example.com/...`)
   * Replace root-based paths (e.g., `/assets/...`, `/about`)
   * Use either:

     * relative paths (`./assets/...`)
     * OR dynamic base path (`BASE_PATH + "/assets/..."`)

2. **Introduce a configurable BASE_PATH**

   * Create a global variable:

     ```js
     const BASE_PATH = process.env.BASE_PATH || "/deeploma";
     ```
   * All internal routing, API calls, and asset paths must use this base path.

3. **Update assets handling**

   * Ensure images, CSS, JS work under `/deeploma/`
   * No broken paths like `/assets/...`

4. **Framework-specific adjustments (apply if relevant)**

   * If using Vite:

     ```js
     export default {
       base: process.env.VITE_BASE_PATH || "/"
     }
     ```
   * If using Next.js:

     ```js
     module.exports = {
       basePath: "/deeploma",
       assetPrefix: "/deeploma"
     }
     ```

5. **Routing compatibility**

   * Ensure navigation works under:

     ```
     /deeploma/
     /deeploma/about
     /deeploma/contact
     ```
   * Avoid hardcoded root navigation (`/about`)

6. **Output**

   * Return updated code snippets for:

     * routing
     * assets
     * config files
   * Highlight all changes clearly

### Constraints

* Do NOT break local development (`/`)
* Must support BOTH:

  * root deployment (`/`)
  * subdirectory deployment (`/deeploma/`)

### Deliverable

Clean, production-ready refactored code that is base-path flexible.
