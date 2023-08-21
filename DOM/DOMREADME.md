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

