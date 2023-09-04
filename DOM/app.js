
console.log(document);
console.log(document.body);
console.log(document.getElementById('jobs'));

console.log(document.getElementById('jobs').id);
console.log(document.getElementById('jobs').textContent);

console.log(document.querySelectorAll("h2"));



const firstJob = document.getElementsByClassName("j-desc")[0];
// we could also do document.querySelector(".j-desc") to get the same element as by default it will retrieve the first match to the CSS selector
console.log(firstJob);

