const express = require("express");
const app = express();
const port = 4000;
const jobs = require("./jobs");//The data which is gonna replace with .env
app.get("/", (req, res) => {
  res.send("Basic Node + Express");
});
app.get("/jobs", (req, res) => {
  res.send(jobs);
});
// Get a specific job
app.get("/jobs/:id", (req, res) => {
  const jobId = parseInt(req.params.id, 10);
  const job = jobs.find((job) => job.id === jobId);
  res.send(job);
});

app.use((req, res, next) => {
  res.on("finish", () => {
    // the 'finish' event will be emitted when the response is handed over to the OS
    console.log(`Request: ${req.method} ${req.originalUrl} ${res.statusCode}`);
  });
  next();
});
// add this line
app.use(express.json())
// Create a new job
app.post("/jobs", (req, res) => {
  const newJob = req.body
  console.log("newJob", newJob);
  jobs.push(newJob);
  res.send(newJob);
});

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

app.delete("/jobs/:id", (req, res) => {
  const jobId = parseInt(req.params.id, 10);
  const jobIndex = jobs.findIndex(job => job.id === jobId);
  jobs.splice(jobIndex, 1);
  res.send({ message: "Job deleted successfully" });
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
