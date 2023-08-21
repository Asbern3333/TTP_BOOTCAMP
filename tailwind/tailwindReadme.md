 CSS framework for rapidly building custom user interfaces
It allows you to build any design directly in your markup

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

### Setting up Tailwind CSS in a Vite + React project (15 minutes)

Here's how you can set up Tailwind CSS in your project:

1. Install Tailwind via npm (from the job-app-tracker directory in your terminal)

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

2. Create a `tailwind.config.js` file and `postcss.config.js` file in your root directory

```bash
npx tailwindcss init -p
```

3. In the `tailwind.config.js` file, configure the purge option to remove unused styles in production:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
You can leave the postcss config file as is.


4. Include Tailwind in your CSS:

```css
/* ./src/index.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

5. run `npm run dev` in your terminal


### Exploring More Complex Tailwind CSS Utilities (10 minutes)

Tailwind includes utilities for many other CSS features, like:

- Flexbox: `flex`, `justify-center`, `items-center`, etc.
- Grid: `grid`, `grid-cols-3`, etc.
- Position: `relative`, `absolute`,
`fixed`, etc.
- Typography: `font-bold`, `text-center`, `underline`, etc.
- And many more!

## Resources
- [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation)
- [Tailwind CSS Utility Classes](https://tailwindcss.com/docs/utility-first)
- [Vite Documentation](https://vitejs.dev/guide/)
