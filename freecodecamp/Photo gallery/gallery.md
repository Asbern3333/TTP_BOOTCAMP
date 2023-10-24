The `box-sizing` property is used to set this behavior. By default, the `content-box` model is used. With this model, when an element has a specific width, that width is calculated based only on the element's content. Padding and border values get added to the total width, so the element grows to accommodate these values.

Try setting `box-sizing` to `content-box` explicitly, with the global `*` selector. At this point, you will not see any changes, because you are using the default value.

# Global  selector
`*`


The `border-box `sizing model does the opposite of `content-box`. The total width of the element, including padding and border, will be the explicit width set. The content of the element will shrink to make room for the padding and border.

# Change the text to uppercase
Make the text uppercase using the `text-transform` property with `uppercase` as the value.


# Flexbox
Flexbox is a one-dimensional CSS layout that can control the way items are spaced out and aligned within a container.

To use it, give an element a `display` property of `flex`. This will make the element a flex container. Any direct children of a flex container are called flex items.
## flexdirection
Has 4 dirctions:
`row` (default): horizontal axis with flex items from left to right
`row-reverse`: horizontal axis with flex items from right to left
`column`: vertical axis with flex items from top to bottom
`column-reverse`: vertical axis with flex items from bottom to top

## flexwarp
The `flex-wrap` property determines how your `flex` items behave when the flex container is too small. Setting it to `wrap` will allow the items to wrap to the next row or column. `nowrap` (default) will prevent your items from wrapping and shrink them if needed.


## justify-content works with flex
The `justify-content` property determines how the items inside a flex container are positioned along the main axis, affecting their position and the space around them

`justify-content= center` as the value.
to make things in the center from left to right

## Align-items
The `align-items` property positions the flex content along the cross axis. In this case, with your flex-direction set to row, your cross axis would be vertical.

## object-fit
Notice how some of your images have become distorted. This is because the images have different aspect ratios. Rather than setting each aspect ratio individually, you can use the object-fit property to determine how images should behave.

Give your `.gallery img `selector the `object-fit` property and set it to `cover`. This will tell the image to fill the `img` container while maintaining aspect ratio, resulting in cropping to fit.


## gap
it do space between images or anything you want
```css
gap:16px;
```

## border-radius:10px;
to make the image conrner out(circle)

# After
The `::after` pseudo-element creates an element that is the last child of the selected element. You can use it to add an empty element after the last image. If you give it the same width as the images it will push the last image to the left when the gallery is in a two-column layout. Right now, it is in the center because you set `justify-content: center` on the flex container.