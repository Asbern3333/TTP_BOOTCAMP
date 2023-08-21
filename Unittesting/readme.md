# DOM-INFO and Unit testing
[Link to download nodejs and npm js(https://nodejs.org/en/download)]

we'll walk through setting up Jest in a simple JavaScript project, and then write a few basic tests.

Introduction to Jest
Jest is a delightful JavaScript testing framework 
```
# Initialize a new Node.js project
npm init -y

# Install Jest
npm install --save-dev jest
```
In the package.json file, replace the following:

`"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},`

with:

`
"scripts": {
  "test": "jest"
},`
To run the tests we use `npm test`

 I like to use the Jest VS Code extension to have a nice visual interface for my test suite and more easily run individual tests or groups of tests.

Now make 2 files 
first one is the code file. called `fileName.js`
```
function sum(a,b){
return a+b;
}
module.exports = sum;
```
and second one is the test file.This will contain our actual test:called 
`fileName.test.js`
formula is that :
```
const exportsfunction = require('./fileName');

describe(('name of the function returns what it does'), () => {
  test("exportsfunction([]) => null", () => {
    expect(exportsfunction([])).toEqual(null);
  })
})
```
- Why we should make the test file first
  - It's important to always watch our tests fail before we watch them pass.
  - It's possible to make a mistake in a test such that it always passes. But, our tests are only doing their job if they can fail when something is wrong.
  - So, we need to make sure that we watch our test fail before we write the code that makes it pass.

# How to install jest
[DownloadJest](https://jestjs.io/docs/getting-started`) |||
[Unittest](https://www.guru99.com/unit-testing-guide.html)


steps how to do the test and the file :
1. **Write a test**
2. **Run the test**(which should fail since the function isn't developed yet)
3. **Write the function** and make it pass the test
4. **Refactor the code** to meet standards and run the test again 

```npm install axios --save```

Lastly If you want to run it once do 
```
"scripts": {
"test": "jest"},
```
but if we want it to run per move

```
"scripts": {
    "test": "jest --watch"
  },
```