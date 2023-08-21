Accessing the root node (`document`) and other HTML elements (`document.body`,` document.getElementById()`, etc.)

**it's important to recognize the DOM as a tree data structure.**
![HTML vs DOM Tree](https://res.cloudinary.com/dlzuobe8h/image/upload/v1687215720/CSI%20TTP/07-dom-html-vs-dom-tree_x7z6lg.png)

In short the DOM (Document Object Model) is a data structure **used to model the HTML document as a JavaScript object.**

If the element in question has an `id` attribute, we can use `document.getElementById()` to retrieve(get) it.

Notice that when we do that, we see what looks like HTML in the console. In this case, we're actually looking at a JavaScript object that represents the html tag with an id of `jobs`. To demonstrate this, try adding the following:

```js
console.log(document.getElementById('jobs').id);
console.log(document.getElementById('jobs').textContent);
```

Now, you can see that the `<section>` element we get from `document.getElementById('jobs')` has properties like `id` and `textContent` that we can access. Here's a list of some commonly used methods for querying the DOM (searching for element(s) that match):


- [`querySelector(<tagename> tagename)`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [`querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [`getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [`getElementsByClassName(classname)`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
- [`getElementsByTagName()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)

const firstJob = document.getElementsByClassName("j-desc")[0];
// we could also do document.querySelector(".j-desc") to get the same element as by default it will retrieve the first match to the CSS selector
```js
console.log(firstJob.parentElement) // section#jobs
console.log(firstJob.children) // HTMLCollection(2) [img.j-desc__company-image, div.j-desc__details]
const secondJob = firstJob.nextElementSibling;
console.log(secondJob) // <div class="j-desc">...</div>
console.log(firstJob === secondJob.previousElementSibling)

console.log(firstJob.lastElementChild.textContent);
console.log(secondJob.lastElementChild.textContent);
```

[github ttp DOM](https://github.com/Asbern3333/Summer-2023-preinternship/blob/main/day07-dom-manipulation/README.md?plain=1)

