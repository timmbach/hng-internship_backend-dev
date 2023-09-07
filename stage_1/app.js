const express = require("express");

const app = express();

const PORT = 5000;

// current date
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getDay()];

app.get("/api", (req, res) => {
  console.log(req.query);
  return res.json({
    slack_name: req.query.slack_name,
    current_day: currentDay,
    utc_time: currentDate.toISOString(),
    track: req.query.track,
    github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
    github_repo_url: "https://github.com/username/repo",
    status_code: 200,
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
