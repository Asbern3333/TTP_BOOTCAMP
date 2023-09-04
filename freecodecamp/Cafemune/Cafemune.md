# Style in HTML
`Style` elements it should go to header file
inside it 
element is  type selector(h1)
```css
element {
 property: value;
}
```
for example

```html
<style>
h1{
        text-align:center;
}
</style>
```
`align `is for  left and right
# Link css to html
`<link href="styles.css" rel="stylesheet"/>`
# Desktop&Loptob
For the styling of the page to look similar on mobile as it does on a desktop or laptop, you need to add a meta element with a special content attribute.

Add the following within the head element:

`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
# Background color
`background-color:brown;`
# Width;
 `width: 300px;`
# Space Right|Left
 `margin-left and margin-right`
```css
margin-left:auto;
margin-right:auto;
```

# Class Selector
So far you have been using type selectors to style elements. A class selector is defined by a name with a dot directly in front of it, like this:

```css
.class-name {
  styles
}
```
Change the existing div selector into a class selector by replacing div with a class named menu.
```css
.menu {
  width: 80%;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
}
```
# Class HTML
To apply the class's styling to the `div` element, add a `class` attribute to the `div` element's opening tag and set its `value `to menu
# background-image:
`background-image:url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg)`
# Left or right text
 `text-align:left;`
# Putting 2 p's in the same line
You can style all the p elements nested anywhere in elements with a class named item like this:

.item p { }
Using the above selector, add a display property with value inline-block so the p elements behave more like inline elements.


# making the web alittle bigger not the div but only the css
```css
padding-left:20px;
padding-left:20px;
padding-top: 20px;
padding-bottom: 20px;
```
or 
`padding:20px`
# Max Width
Add a `max-width `property to the menu class with a value of 500px to prevent it from growing too wide.
# Font 
font-family:sans-serif;
# fallback
You can add a fallback value for the font-family by adding another font name separated by a comma. Fallbacks are used in instances where the initial is not found/available.

Add the fallback font serif after the Impact font.
# italicline
`font-style:italic;`
# Font-Size
`font-size:40px;`
# hight
 You can change the height of the line by specifying a value for the height property
 ```css
 hr{
  height:3px;
}
 ```
# border-color
Make all the edges of the `hr` element the same color as the background of it using the `border-color` property.
 The default value of a property named `border-width` is`1px`
 ` the top and bottom border width of 1px`.
# top - down spaces
```css
margin-top:5px;
margin-bottom:5px;
```
# Footer
`/*FOOTER*/`

## links 
not visited links
a{
  color:black;
}
visited link to change the links that already visited
```css
a:visited{
  prpertyName: propertyValue;
  color:grey
}
s```
hover the mouse over the link
```css
a:hover { 
  propertyName: propertyValue; 
  }
```
Clicking the link 
```css
a:active { propertyName: propertyValue; }.
```
#  display
```css
display:block;
margin-left:auto;
margin-right:auto;
```
This is because the default `display` property for div elements is `block`. So when **two block elements are next to each other**, they stack like actual `blocks`. For example, your marker elements are all stacked on top of each other.

To position two div elements on the same line, set their display properties to `inline-block`.
