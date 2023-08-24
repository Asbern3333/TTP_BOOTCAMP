# Side Effects & Data Fetching


- Install and use `json-server`

## Project Setup

### Task 1: Install `json-server`

Json-server allows us to create a fake API for development and prototyping. To install `json-server`, we will use the following command:

```bash
npm install -g json-server
```

The `-g` flag installs the package globally, meaning it can be accessed from anywhere on your machine.

We can use the `json-server` in the terminal to start an mock API backend server that will accept and return JSON data.

### Task 2: Add a `db.json` file

In the root of your project, create a new file called `db.json`. This will serve as our database for the mock API.

In `db.json`, add the jobs array from your application state. It should look something like this:

```json
{
  "jobs": [
    {
      "title": "Job Title 1",
      "company": "Company 1",
      "location": "Location 1",
      // other job details
    },
    // more jobs
  ]
}
```

When we run `json-server` the API server will be running on http://localhost:3000. So, there will be jobs available in the browser at http://localhost:3000/jobs.



### Task 3: Implement `fetch` functions
- fetch data from our API

```jsx
async function fetchJobs() {
  const response = await fetch('http://localhost:3000/jobs');
  const jobs = await response.json();
  return jobs;
}
```


### Task 4: Implement the `useEffect` hook to fetch jobs
React's `useEffect` hook allows us to perform side effects in function components. Side effects are anything that interacts with the world outside of the component (like data fetching, timers, logging, etc.).

Here's how we can use `useEffect` to fetch our jobs when the component mounts:

```jsx
import { useEffect, useState } from 'react';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchJobs() {
      const response = await fetch('http://localhost:3000/jobs');
      const jobs = await response.json();
      if(!ignore) {
        setJobs(jobs);
      }
      return jobs;
    }
    
    fetchJobs();

    return () => {
      ignore = true;
    }
  }, []);
  
  // ...
}
```

### Task 5: Implement the `useEffect` hook to add a keyboard event listener

We can use the `useEffect` hook to add a keyboard event listener that will close our modal when the Escape key is pressed. The `useEffect` hook can also return a function that will be called when the component unmounts, which we can use to remove our event listener:

```jsx
import { useEffect } from 'react';

function Modal({ isVisible, hideModal }) {


  // ...

  useEffect(() => {
    const handleEscape = (event) => {
      if(event.key === 'Escape') {
        hideModal();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, [hideModal]);
  
  // ...
}
```

```jsx
Example
1. No dependency passed:

useEffect(() => {
  //Runs on every render
});
Example
2. An empty array:

useEffect(() => {
  //Runs only on the first render
}, []);
Example
3. Props or state values:

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

### Task 6: Add persistence to the job posting form

Finally, we'll modify our form so that when a new job posting is submitted, it's saved to our database. We'll do this by making a POST request with the new job data:

```jsx
const handleAddJobFormSubmit = async (e) => {
  e.preventDefault();

  // new job should be added to the DOM
  const preparedJob = {
    ...jobFormState,
    minSalary: parseInt(jobFormState.minSalary),
    maxSalary: parseInt(jobFormState.maxSalary),
    status: 1,
  };
  const response = await fetch("/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preparedJob),
  });
  const newJob = await response.json();
  // parent component should be notified of created job
  onAddJob(newJob);
  // form should clear
  setJobFormState(initialJobFormState);
};
```

```jsx
import { Form, useLoaderData, redirect } from "react-router-dom";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const preparedJob = {
    ...updates,
    minSalary: parseInt(updates.minSalary),
    maxSalary: parseInt(updates.maxSalary)
  }
  const response = await fetch(`http://localhost:3000/jobs/${params.jobId}`, { 
    method: "PATCH", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(preparedJob)
  })
  
  return redirect(`/jobs/${params.jobId}`)
}
```

```jsx
// src/routes/destroyNote.jsx
import { redirect } from "react-router-dom";

export async function action({ params }) {
  const response = await fetch(`http://localhost:3000/notes/${params.noteId}`, {
    method: "DELETE"
  })
  const jobId = new URL(request.url).searchParams.get("jobId");
  return redirect(`/jobs/${jobId}`)
}

```
## Additional Resources

- [MDN Web Docs: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN Web Docs: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN Web Docs: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [React Docs: Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [json-server](https://github.com/typicode/json-server)