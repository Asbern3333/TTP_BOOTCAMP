


 Why React?

-   React was developed to handle the complexity of building user interfaces in JavaScript for modern, fast-paced web applications.
$\color {GREEN}{JSX is JavaScript Syntax Extension, while React is a JavaScript library.}$
#### What is React?

-   React is a JavaScript $\color{green}{library}$ for building user interfaces. It is particularly useful for developing single-page applications.

The Web has been built on HTML, CSS, and JavaScript. For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript—often in separate files! Content was marked up inside HTML while the page’s logic lived separately in JavaScript:

#### What are Components?
-   Components are the fundamental building blocks of a React application's user interface.
-   In React, a component is a reusable piece of code that dictates a portion of the UI.

$\color{green}{test}$






vanilla JS:
```
const h1 = document.createElement("h1");
h1.id = "main";
h1.className = "blue";
h1.textContent = "Hello!";
```

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file


Let's read through the docs for:
- [Converting HTML to JSX](https://react.dev/learn/writing-markup-with-jsx#converting-html-to-jsx) There is a work there try it
- [Embedding JS in JSX](https://react.dev/learn/javascript-in-jsx-with-curly-braces) 
you can use curly braces in your JSX to open a window to JavaScript.

Therefore, to pass a JS object in JSX, you must wrap the object in another pair of curly braces: `person={{ name: "Hedy Lamarr", inventions: 5 }}.`

you can use curly braces in your JSX to open a window to JavaScript.`{console.log("Hi")}`


For css :
`style = {{}}`
for javascripte function 

```
<ul style={
  {
    backgroundColor: 'black',
    color: 'pink'
  }
}>
```
```
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};
```







```diff
RECAP
Now you know almost everything about JSX:
+javascipt in jsx
+JSX attributes inside quotes are passed as strings.
+Curly braces let you bring JavaScript logic and variables into your markup.
+They work inside the JSX tag content or immediately after = in attributes.
+s{{ and }} is not special syntax: it’s a JavaScript object tucked inside JSX curly braces.
+**************HTML WITH JSX***********
+React components group rendering logic together with markup because they are related.
+JSX is similar to HTML, with a few differences. You can use a converter if you need to.
+Error messages will often point you in the right direction to fixing your markup.

```

## 3. **Creating a React Component**

Let's read through the docs and follow along with:

- [Creating a React Component](https://react.dev/learn/your-first-component#defining-a-component) 
```diff
+ React lets you combine your markup, CSS, and JavaScript into custom “components”,

+ Markup like this, combined with CSS for style, and JavaScript for interactivity, lies behind every sidebar, avatar, modal, dropdown—every piece of UI you see on the Web.
+ <Profile />s
```
- [Importing and Exporting Components](https://react.dev/learn/importing-and-exporting-components)
```diff
First, export Profile from Gallery.js using a named export (no default keyword):

export function Profile() {
}
Then, import Profile from Gallery.js to App.js using a named import (with the curly braces):

+export function Profile()
-import { Profile } from './Gallery.js';
+export default function Gallery()
-import Gallery from './Gallery.js';
export default function App() {
  return <Profile />;
}
```

|  |  |
|--|---|
|+export function Profile()|-import { Profile } from './Gallery.js';|
|+export default function Gallery()|-import Gallery from './Gallery.js';|
--------
**When you write a default import, you can put any name you want after import. For example, you could write import Banana from './Button.js' instead and it would still provide you with the same default export. In contrast, with named imports, the name has to match on both sides. That’s why they are called named imports!**
also we can named the named imports for exxample:
`import {loader as load}`

```diff
+What a root component file is
+How to import and export a component
+When and how to use default and named imports and exports
+How to export multiple components from the same file
```
 [Create React App](https://create-react-app.dev/) 

 - Vercel released [Next.js](https://nextjs.org/)

 - [Gatsby.js](https://www.gatsbyjs.com/) 
 - [Remix.run](https://remix.run/) 
 - [Vite](https://vitejs.dev/)

 
```bash
npm create vite@latest
```
```bash
cd job-app-tracker
npm install
npm run dev
```
- for app  `npx create-react-app my-app`
- for latest version `npm install react-scripts@latest`


- [React: Quick Start](https://react.dev/learn)
- [React: Developer Tools](https://react.dev/learn/react-developer-tools)
- [React: Describing the UI](https://react.dev/learn/describing-the-ui)
- [React: Your First Component](https://react.dev/learn/your-first-component)
- [React: Importing and Exporting Components](https://react.dev/learn/importing-and-exporting-components)
- [React: Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [The Beginner's Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-react)


$\color {lightblue}{Functions starting with use are called Hooks}$

```
React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components.
```
