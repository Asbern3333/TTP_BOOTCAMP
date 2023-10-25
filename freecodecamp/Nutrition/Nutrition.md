# Link
```html
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800" rel="stylesheet">
```
This will import the Open Sans font family, with the font weight values 400, 700, and 800.


# font family 
`font-family: "Open Sans", sans-serif;`

# important for width (step 11)
If you inspect your `.label` element with your browser's developer tools, you may notice that it's actually 288 pixels wide instead of 270. This is because, by default, the browser includes the border and padding when determining an element's size.

To solve this, reset the box model by creating a `*` selector and giving it a `box-sizing` property of `border-box.`




# control the visual flow
However, you can adjust the CSS of these elements to control the visual flow and hierarchy
set the `font-weight` property to `800` for bold text

# Nigative number
 We can do `margin:-4px;`
## remove margin
`Margin=0` or `nigative`

 # letter-spacing
 The `letter-spacing `property can be used to adjust the space between each character of text in an element

# Rem
The `rem` unit stands for `root em`, and is relative to the font size of the `html` element.

# Info
Create a `.daily-value p` selector to target all of your `p` elements in the `daily-value` section. 


# :NOT
    The `:not` pseudo-selector can be used to select all elements that do not match the given CSS rule.

```css
div:not(#example) {
  color: red;
}
```
The above selects all div elements without an id of example.

Modify your .daily-value p selector to exclude the .no-divider elements.