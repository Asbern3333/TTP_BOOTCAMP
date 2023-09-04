# UTF-8
`utf-8` is a universal character set that includes almost every character from all human languages
# All divce same view
- content attribute set to `content="width=device-width, initial-scale=1"`.0 so your page looks the same on all devices.
 - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`



# CSS
```css
text-align:center;
background-color:red
```
# HTML 2 class
Multiple classes can be added to an element by listing them in the `class` attribute and separating them with a space.
```html
<div class="marker one">
</div>
```
*There are two main color models: the additive **RGB (red, green, blue)** model used in electronic devices, and the subtractive **CMYK (cyan, magenta, yellow, black)** model used in print.*
# color RGB

RGB (red, green, blue)
- 0 mean 0%
- 255 mean 100%
- $\color{green}{green rgb(0,255,0)}$
- $\color{blue}{blue rgb(0,0,255)}$
- $\color{red}{red rgb(255,0,0)}$
- $\color{black}{black rgb(0,0,0)}$
- $\color{white}{white rgb(255,255,255)}$
- $\color{yellow}{yellow rgb(255,255,0)}$
- $\color{cyan}{cyan rgb(0, 255, 255)}$
- $\color{magenta}{magenta rgb(255,0,255)}$
- $\color{orange}{orange rgb(255,127,0)}$
- $\color{springgreen}{spring green rgb(0, 255, 127)}$
- $\color{violet}{violet rgb(127,0,255)}$
- $\color{chartreusegreen}{chartreuse green rgb(127,255,0)}$
- $\color{azure}{azure rgb(0,127,255)}$
- $\color{rose}{rose rgb(255, 0, 127);}$

$\color{green}{test}$
# Padding
`padding:10px 0;`

# Color wheel
A color wheel is a `circle where similar colors, or hues,` are near each other, and different ones are further apart. For example, pure red is between the hues rose and orange.

# complementary
Two colors that are opposite from each other on the color wheel are called complementary colors. If two complementary colors are combined, they produce gray. But when they are placed side-by-side, these colors produce strong visual contrast and appear brighter.
# additive color
`additive color` model, **where colors start as black and change as the values of red, green, and blue increase.**

# distracting 
Notice that the red and cyan colors are very bright right next to each other. This contrast can be distracting if it's overused on a website, and can make text hard to read if it's placed on a complementary-colored background.

It's better practice to choose one color as the dominant color, and use its complementary color as an accent to bring attention to certain content on the page.

# Attention
Notice how your eyes are naturally drawn to the red color in the center? When designing a site, you can use this effect to draw attention to important headings, buttons, or links.
# Color in another form
 #4B5320
 r=4b  g=53 b=20
# New form
#00ff00 $\color{green}{ green}$
00 = 0%
ff= 100%

# HSL new form
The HSL color model, or `hue, saturation, and lightness,` is another way to represent colors.

values for the prameter 
- `0 to 360 `for hue,
-  a percentage from `0 to 100` for saturation,
- and a percentage from `0 to 100 `for lightness.

If you imagine a color wheel, `the hue red is at 0 degrees, green is at 120 degrees, and blue is at 240 degrees`.

Saturation is the intensity of a color `from 0%, or gray, to 100% for pure color`.**You must add the percent sign %** to the saturation and lightness values.

Lightness is how bright a color appears, from `0%, or complete black, to 100%`, complete white, with 50% being neutral.

# HSL color
hsl(240, 100%, 50%); $\color{blue}{blue}$
hsl(0, 100%, 50%) $\color{red}{red}$
# gradient 
A gradient is when one color transitions into another. The CSS `linear-gradient` function lets you control the direction of the transition along a line, and which colors are used.
One thing to remember is that the `linear-gradient` function actually creates an `image` element, and is usually paired with the` background` property which can accept an image as a value.

# linear gradient code 
- `linear-gradient(gradientDirection, color1, color2, ...);`

- `gradientDirection` is the direction of the line used for the transition.
- `color1` and `color2 `are color arguments, which are the colors that will be used in the transition itself. These can be any type of color, including color keywords, hex, rgb, or hsl.
