# Tools Website

A beautiful, user-friendly static website for discovering and using tools, inspired by https://my-website-tawny-nine.vercel.app.

## Features
- Home and Tools pages
- All tools and categories are managed in JS files (see `tools/` directory)
- PWA install pop-up
- Cookie consent pop-up
- Dark and light mode
- Search bar pop-up
- Lazy loading for images
- All user data (usage, preferences) saved in localStorage
- Banner ad (Adsterra) in top bar
- Most used tools appear at the top
- Small, fast, static files (HTML, CSS, JS, JSON)

## Adding Tools
- Add new categories as JS files in the `tools/` directory (e.g., `tools/seo.js`)
- Each category file exports a `tools` array with tool objects:
  - `category, id, name, icon, description, link, rating, badge, features, pricing, dateAdded`
- The website will automatically load and display new tools and categories.

## Development
- All content is loaded from JS files; HTML is only for the user view.
- No build step required; just open `index.html` in your browser.