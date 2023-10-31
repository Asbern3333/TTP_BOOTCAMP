
Before we start:
- Sign Up for [Postman](https://www.postman.com/). 

Now, let's create a basic server with Node.js and Express.js for our Job Application Tracker.

1. Make and move to directory

```bash
mkdir name && cd name
```

2. Once inside the project directory, initialize a new Node.js project with the following command:

```bash
npm init -y
```

This will create a `package.json` file in your project directory, which will keep track of all your project's dependencies.

3. Now, let's install Express.js, which is the only dependency we need for now. Run the following command to install Express.js:

```bash
npm install express
```

This will install Express.js and add it to the list of dependencies in your `package.json` file.

4. Make file

```bash
touch server.js
```
For windows
```bash
type NUL > terminalreadme.md
```

5. Open `server.js` in your text editor, and add the following code:

```javascript
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Welcome to the Job Application Tracker API!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```


# Explaining The Code Above + Testing
This script does a few things:

1. It imports the Express.js module.
2. It creates an instance of an Express.js application.
3. It defines a route handler for GET requests made to the root of our application (http://localhost:4000/).
4. It starts our application on port 4000.


This script sets up a basic Express.js server that listens for GET requests at the root route ("/") and responds with a welcome message.

6. You can run the server with the following command:

```bash
node server.js
```

You should see this output in your terminal: "Server is running at http://localhost:4000" indicating that your server is running. If you open your web browser and visit http://localhost:4000, you should see the message "Welcome to the Job Application Tracker API!"


## 3. Setting Up and Managing Your Server with Nodemon

currently, you need to manually `restart the server each time` you make changes.  
That's where `Nodemon` comes in.

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.
stop the terminal running `node server.js` by typing 'Ctrl+C' while its terminal window is in focus. Next:

1. Install Nodemon globally: `npm install -g nodemon` (or locally if you have issues `npm install --save-dev nodemon`)
2. Add a start script in your `package.json` file:

   ```json
   "scripts": {
     "start": "nodemon server.js"
   }
   ```

3. Start the server using `npm start`. Any time you save a file, Nodemon will automatically restart your server.
4. To stop the server, you can press `Ctrl+C` in your terminal.
5. If your server isn't stopping properly, you might have a stray server running. You can kill it with the command `npx kill-port 4000`.

---
## 4. Implementing RESTful Routing

RESTful routing and  implemented in Express. You've actually already seen RESTful routing in your applications due to the `json-server` package. When we set up a db.json file to work with `json-server`, we get RESTful routes connected to each resource we add to the file. In our case, they are the `jobs` and `notes` resources.


1. Understand the principles of REST (Representational State Transfer) and how it relates to API design
2. Review the different types of HTTP requests and how they correspond to CRUD operations
3. Implement RESTful routing for the `jobs` resource in your `server.js` file, using placeholder comments for now

Here are the RESTful routes we're going to be building for the Job app tracker.

```javascript
// List all jobs
app.get("/jobs", (req, res) => {
  // This will eventually return a list of all jobs
});

// Get a specific job
app.get("/jobs/:id", (req, res) => {
  // This will eventually return a specific job
});

// Create a new job
app.post("/jobs", (req, res) => {
  // This will eventually create a new job
});

// Update a specific job
app.patch("/jobs/:id", (req, res) => {
  // This will eventually update a specific job
});

// Delete a specific job
app.delete("/jobs/:id", (req, res) => {
  // This will eventually delete a specific job
});
```

---
## 5. Simulating CRUD Operations with RESTful GET, POST, PATCH, & DELETE Requests

Now that you have an understanding of RESTful routing, let's simulate some basic CRUD operations without a database. We'll need to:

- Implement GET, POST, PATCH, and DELETE HTTP requests
- Simulate creating, reading, updating, and deleting jobs data in memory
- Understand how these operations map to database operations
1. Implement the `GET /jobs` and `GET /jobs/:id` routes to return the appropriate jobs data.
2. Implement the `POST /jobs` route to add a new job to the `jobs` array and return it.
3. Implement the `PATCH /jobs/:id` route to update a specific job in the `jobs` array and return it
4. Implement the `DELETE /jobs/:id` route to remove a specific job from the `jobs` array and return a success message.

### 1. Loading the jobs array

Okay, let's move the `jobs.js` file into the same directory as our `server.js` file and then require it from `server.js`.

```javascript
// Jobs data
const jobs = require("./jobs");
```


### 2. Retrieving jobs in a list and individually

Next, we'll want to add the endpoints for retrieving information from our API:

```js
// List all jobs
app.get("/jobs", (req, res) => {
  res.send(jobs);
});
// Get a specific job
app.get("/jobs/:id", (req, res) => {
  const jobId = parseInt(req.params.id, 10);
  const job = jobs.find((job) => job.id === jobId);
  res.send(job);
});
```
#### req&rest
- Each route that we configure here accepts a route handler.
- The route handlers take two parameters, `req` short for "request" and `res`, short for "response"
- [`req`](https://expressjs.com/en/api.html#req) is an object provided by express that helps us to access information about the request that matched this route.
- [`res`](https://expressjs.com/en/api.html#res) in an object provided by express that helps us to generate the response to a request that has matched this route.


### 3. Creating Jobs
  // Create a new job
```js
app.post("/jobs", (req, res) => {
  const newJob = req.body;
  jobs.push(newJob);
  res.send(newJob);
});
```
If we try this request in Postman, we're not getting a response back. We can use a console.log here to check what's going on:

```js
app.post("/jobs", (req, res) => {
  const newJob = req.body
  console.log("newJob", newJob);
  jobs.push(newJob);
  res.send(newJob);
});
```
If we run the request again in Postman, we'll see 

```
Server is running at http://localhost:4000
newJob undefined
```
### Middle ware
This lets us know that our express server isn't able to read the JSON formatted body that we sent in our request from Postman. To solve this problem, we're going to implement our first bit of [middleware](./MIDDLEWARE.md) to our Express application. 

The middleware `express.json()` is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. By adding this line, you are able to access the data sent in a POST request in `req.body`. This is necessary for handling requests that contain a body like `POST` and `PATCH` requests.

Please note: as of Express 4.16.0+, the `express.json()` middleware function has been included in Express. For older versions of Express, you will need to use [body-parser middleware](https://expressjs.com/en/resources/middleware/body-parser.html) to handle JSON payloads.

To implement the middleware, we'll add the following line to our `server.js` right below the request logging middleware and before we start defining route handlers.

```js
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  next();
});
// add this line
app.use(express.json()) // this allows us to send JSON formatted bodies in our requests
// ... route handlers
// app.listen(...
```
We can also adjust our middleware so that it logs the status codes for our responses as well:

```js
app.use((req, res, next) => {
  res.on("finish", () => {
    // the 'finish' event will be emitted when the response is handed over to the OS
    console.log(`Request: ${req.method} ${req.originalUrl} ${res.statusCode}`);
  });
  next();
});
```

You can read more about why this `res.on` code is necessary [here](./MIDDLEWARE.md#Adding-Status-Codes-to-the-logger-middleware) if you like

### 4. Updating jobs

This task is similar to creating a new job in that we need to access the request body, but different in that we also need to update the job inside the `jobs` array.

```js
// Update a specific job
app.patch("/jobs/:id", (req, res) => {
  const jobId = parseInt(req.params.id, 10);
  const jobUpdates = req.body;
  const jobIndex = jobs.findIndex(job => job.id === jobId);
  const updatedJob = { ...jobs[jobIndex], ...jobUpdates };
  jobs[jobIndex] = updatedJob;
  // console.log("updatedJob", updatedJob);
  res.send(updatedJob);
});
```

### 5. Deleting Jobs

This one is also similar to the Update route, but instead of updating the element in the array, we'll splice it out.

```js
// Delete a specific job
app.delete("/jobs/:id", (req, res) => {
  const jobId = parseInt(req.params.id, 10);
  const jobIndex = jobs.findIndex(job => job.id === jobId);
  jobs.splice(jobIndex, 1);
  res.send({ message: "Job deleted successfully" });
});
```
## 6. Understanding and Using HTTP Status Codes

Now that our routes are functioning and interacting with our temporary data, let's enhance our API by using appropriate HTTP status codes.

1. Understand the categories of HTTP status codes and when to use each one
2. Modify the `GET /jobs/:id` route to return a 404 status code if the job doesn't exist
3. Modify the `POST /jobs` route to return a 201 status code to indicate successful creation
4. Modify the `PUT /jobs/:id` route to return appropriate status codes based on whether the update was successful
5. Modify the `DELETE /jobs/:id` route to return a 204 status code on successful deletion


# Error Messages(status codes)
### 1. Understanding Status Codes

HTTP status codes are divided into five classes or categories. The first digit of the status code defines the class of response, while the last two digits do not have any classification role. Here are the five classes:

- 1xx (Informational): The request was received, and the process is continuing.
- 2xx (Successful): The request was successfully received, understood, and accepted.
- 3xx (Redirection): Further action must be taken in order to complete the request.
- 4xx (Client Error): The request contains bad syntax or cannot be fulfilled.
- 5xx (Server Error): The server failed to fulfill an apparently valid request.

Here's a table with some of the most commonly used HTTP status codes:

| Status Code | Status Text | Description |
| ----------- | ----------- | ----------- |
| 200 | OK | The request has succeeded. The information returned with the response is dependent on the method used in the request. |
| 201 | Created | The request has been fulfilled, and a new resource was created as a result. |
| 204 | No Content | The server has fulfilled the request but does not need to return a response body. |
| 301 | Moved Permanently | The requested resource has been assigned a new permanent URI and any future references to this resource should use one of the returned URIs. |
| 400 | Bad Request | The server could not understand the request due to invalid syntax. |
| 401 | Unauthorized | The request requires user authentication. |
| 403 | Forbidden | The server understood the request, but it refuses to authorize it. |
| 404 | Not Found | The server can't find the requested resource. |
| 422 | Unprocessable Entity | The request could not be processed due to invalid data provided. When we implement validations later on, we'll use this status code to indicate that the user submitted invalid ata through a form. |
| 500 | Internal Server Error | The server encountered an unexpected condition which prevented it from fulfilling the request. |

For more information [MDN's HTTP status codes documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).


### 2. Adding a 404 status to GET /jobs/:id if appropriate
```js
if (job) {
    res.send(job);
  } else {
    res.status(404).send({ message: "Job not found" });
  }
  ```
  ### 3. Adding a 201 staus to POST /jobs
  `res.status(201).send(newJob);`
  
  ### 4. Adding a 404 status to PATCH /jobs/:id if appropriate
  ```js
   if (jobIndex !== -1) {
    jobs[jobIndex] = updatedJob;
    res.send(updatedJob);
  } else {
    res.status(404).send({ message: "Job not found" });
  }
  ```

  ### 5. Adding a 204 status to DELETE /jobs/:id or 404 if appropriate


  ```js
  if (jobIndex !== -1) {
    jobs.splice(jobIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send({ message: "Job not found" });
  }
  ```

  Note that if you take the `204` status code approach for successful deletion, you won't be able to `send()` a body in the response. A `204` status code indicates "No Content" (this means no body). If you do want to send a message in the body, it's fine to stick with a `200` status code for this response and just do `res.send()`


  
## Key Takeaways

| Concept | Description | Example |
| ------- | ----------- | ------- |
| Node.js | A JavaScript runtime environment that allows you to run JavaScript on your server instead of a browser. | `const express = require('express'); const app = express();` |
| Express.js | A web application framework for Node.js that simplifies web application development. | `const app = express();` |
| Nodemon | A utility that monitors any changes in your source and automatically restarts your server. | `nodemon server.js` |
| RESTful Routing | A standardized way of structuring the API endpoints/routes for performing CRUD actions on a resource | **C**reate (`POST '/jobs'`) **R**ead (`GET /jobs` , `GET /jobs/:id`)  **U**pdate (`PUT/PATCH /jobs/:id`) and **D**elete (`DELETE /jobs/:id`) |
| CRUD Operations | The four basic operations that can be performed on any data. Represented by Create (POST), Read (GET), Update (PUT), and Delete (DELETE). | `app.get('/jobs', (req, res) => { res.send(jobs); });` |
| HTTP Status Codes | Codes that indicate the result of the HTTP request. They inform the client whether a specific HTTP request has been successfully completed, and if not, where the error lies. | `res.status(404).send({ message: 'Job not found' });` |

---

## Resources

- [Node.js Official Documentation](https://nodejs.org/en/docs/)
- [Express.js Official Documentation](https://expressjs.com/)
- [Express Routing](https://expressjs.com/en/guide/routing.html)
- [Express API Reference](https://expressjs.com/en/4x/api.html)
- [Express `request` object - official docs](https://expressjs.com/en/api.html#req)
- [Express `response` object - official docs](https://expressjs.com/en/api.html#res)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [HTTP Request Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [RESTful API Design](https://restfulapi.net/)
- [Understanding CRUD Operations](https://developer.mozilla.org/en-US/docs/Glossary/CRUD)
