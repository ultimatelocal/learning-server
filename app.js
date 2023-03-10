var express = require("express");
var app = express();
var cors = require("cors");
var statuses = require("./__dummyData__/statuses.json");
var tasks = require("./__dummyData__/tasks.json");

app.use(cors());
app.get("/statuses", (req, res, next) => {
  res.json(statuses);
});
app.get("/tasks", (req, res, next) => {
  res.json(tasks);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});
