- [H1](#h1)
- [h6=>h1](#h6)
- [P-for-text](#p-for-text)
- [Comments](#comments)
- [Main](#main)
- [Nested](#nested)
- [Img](#img)
- [Alt](#alt)
- [Link](#link)
- [Link open in new tap](#link-open-in-new-tap)
- [ImageLink](#imagelink)
- [Section](#section)
- [UL||OL](#ulol)
- [Figure&&Figcaption](#figurefigcaption)
- [Font](#font)
- [Input&form](#inputform)
- [Button form](#button-form)
- [Label](#label)
- [Id](#id)
- [Value](#value)
- [Fieldset&Legend](#fieldsetlegend)
- [For](#for)
- [Checked](#checked)
- [Footer](#footer)
- [Header](#header)
- [HTML](#html)
- [DOCTYPE HTML](#doctype-html)
- [Meta](#meta)
- [Article](#article)
- [hr,br](#hrbr)
# h1
`<h1>`opening tag
`</h1>`closing tab
An element is an openning and closing tag 
here `h1 `is an element
# h6

The `h1 `through `h6` heading elements are used to signify the importance of content below them. 
h1=biggest texting => h6 smallest texting element
# P for text
The `p` element is used to create a paragraph of text on websites.
# Comments
For comments  we use `<!----->`
`<!--TODO: Add link to cat photos-->`
# Main
HTML5 has some elements that identify different content areas. These elements make your HTML easier to read and help with Search Engine Optimization (SEO) and accessibility.
`<main>`
# Nested
Nested elements should be placed two spaces further to the right of the element they are nested in. This spacing is called indentation and it is used to make HTML easier to read.
```
<main>
    <h1>asds</h1>
</main>
```
The h1  are indented two spaces more than the main element in the code below.
# Img
- `img` elements have an opening tag without a closing tag. 
- `self-closing tag: A tag for an element without a closing tag is known `

HTML attributes are special words used inside the opening tag of an element to control the element's behavior. The src attribute in an img element specifies the image's URL 
`<img src="URL">`
# Alt
`Alt ` is used for screen readers to improve accessibility and is displayed if the image fails to load
# Link
- <a href="https://freecatphotoapp.com">link to cat pictures</a>
- <p>I think <a href="https://www.freecodecamp.org/">freeCodeCamp</a> is great.</p>
# Link open in new tap
Add a `target` attribute with the value `_blank` to the anchor (a) element's opening tag, so that the link opens in a new tab.
# ImageLink
Adding tag <a> link or anything else before and after the image or the button can turrn these image or button to link
# Section
Before adding any new content, you should make use of a `section` element to separate the cat photos content from the future content.

Take your h2, comment, p, and anchor (a) elements and nest them in a section element.

It is time to add a new section. Add a second section element below the existing section element.
```html
<body>
  <main>
    <section>
    </section>
  </main>

```
# UL||OL
- unordered list` (ul)`
- list item `(li)`
ordered list `(ol)`
```
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>

<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
```
# Figure&&Figcaption
The figure element represents self-contained content and will allow you to associate an image with a caption.

Nest the image you just added within a figure element.

`<figcaption>A cute cat</figcaption>`
```
<figure>
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
 <figcaption>Cats love lasagna.</figcaption>
</figure>
```
# Font
`em` element is for emphasis 
The` strong` for text is of strong importance or urgent.
# Form
Now you will add a web `form` to collect information from users.

The `action` attribute indicates where form data should be sent. For example,` <form action="/submit-url"></form>` tells the browser that the form data should be sent to the path `/submit-url.`
# Input&form
- `<form>`
- `<input type="text">`
- `<input type="text" name="catphotourl"> to what for what`
-  `<input placeholder="Email address"> for write a text in the empty`
- `<input type="text" required> to not leave it  empty he should write something`
- `</form>`
- `<input type="radio"> text only one answer`
- `<input type="checkbox">  have more than one answer.`
- `best way to type input is:`
- ` <input id="loving" type="checkbox" name="personality" value="loving">`
# Button form
 `<button type="submit">Submit</button>`
# Label
`label` elements are used to help associate the text for an input 
 `<label><input type="radio"> cat</label>` clicking the word cat also selects the button.
# Id
The `id` attribute is used to identify specific HTML elements. id have unique value.
# Value
  Add a `value` attribute to radio buttons. set the button's `value `attribute to the same value as its id attribute.
# fieldset&Legend
The `fieldset` element is used to group related inputs and labels together in a web form.
The `legend` element acts as a caption for the content in the fieldset element. 
# For
using for we can connect things together
`for` attribute with the same value as the  `id`
# Checked 
defult cheing it for `checkbox || radio`type
# Footer
Using for the links and about me etc..
# Header
inside it there is `title`
# HTMl
Add the `lang` attribute with the value `en` to the opening html tag to specify that the language of the page is English.
# DOCTYPE html
All pages should begin with` <!DOCTYPE html>`. This special string is known as a declaration and ensures the browser tries to meet industry-wide specifications.
# Meta
`<meta charset="UTF-8">`
Tell the browser to parse the markup into multiple languages by creating a `meta` element as a child of the head element. Set its `charset` attribute to `UTF-8`.
# Div
The `div` element is used mainly for design layout purposes unlike the other content elements you have used so far. Add a `div` element inside the body element and then move all the other elements inside the new `div`.

`/* comment here */`
# Article
It’s looking good. Time to start adding some menu items. Add an empty `article` element under the Coffee heading. It will contain a flavor and price of each coffee you currently offer.
`article` elements commonly contain multiple elements that have related information. In this case, it will contain a coffee flavor and a price for that flavor. Nest two `p` elements inside your `article` element. The first one's text should be `French Vanilla`, and the second's text` 3.00.`
```HTML
  <article>
 <p>French Vanilla</p>
 <p>3.00</p>
</article>
<article>
 <p>Caramel Macchiato</p>
<p>3.75</p>
 </article>
 <article>
  <p>Pumpkin Spice</p>
  <p>3.50</p>
</article>
 <article>
 <p>Hazelnut </p>
<p>4.00</p>
</article>
 <article>
 <p>Mocha</p>
 <p>4.50</p>
 </article>
```
# hr&br
You can use an `hr` element to display a divider between sections of different content.
`br` for a new line