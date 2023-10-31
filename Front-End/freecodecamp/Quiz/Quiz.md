# Meta
`meta` it is used to specify information about the page, such as the title, description, keywords, and author When the code is `<meta charset="UTF-8" />`
Continuing with the `meta` elements, a `viewport` definition tells the browser how to render the page. Including one betters visual accessibility on mobile, and improves SEO (search engine optimization) When the code is `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
# Header
The header:`<header>` element will be used to introduce the page, as well as provide a navigation menu.
# Main
The main `<main>`element will contain the core content of your page.

# CSS max
```css 
img {
  width: max(250px, 25vw);
}
```
In this example, img elements will have a minimum width of 250px. And as the viewport grows, the image will grow accordingly to be 25 percent of the viewport width.


# aspect-ration
allows you to define the ratio between width and height of an element

# ranotail
Use `the > selector` to target the unordered list elements within the nav elements

# Scetion
As this is a quiz, you will need a form for users to submit answers.

# role 
To increase the page accessibility, the `role` attribute inside `section` can be used to indicate the purpose behind an element on the page to assistive technologies.

# Step 16
Every `region` role requires a `label`, which helps screen reader users understand the purpose of the region. One method for adding a label is to add a heading element inside the region and then reference it with the `aria-labelledby` attribute.

Add the following `aria-labelledby` attributes to the section elements:

```
student-info
html-questions
css-questions
```
Then, within each section element, nest one `h2` element with an id matching the corresponding `aria-labelledby` attribute. Give each `h2` suitable text content.


# Connect inside the page
I can give an element an id and I can do a link for that id by doing <a href="#">

# mutliple selector
`nav li or nav > ul > li`


# remove the underline of the link
`text-decoration: "none";`

# Keep header up top
`position:fixed ` can make the header move with it
`top:0;` to do the poistion for the header

# stop over flow
`flex-wrap:wrap;`
On small screens, the unordered list in the navigation bar overflows the right side of the screen.


