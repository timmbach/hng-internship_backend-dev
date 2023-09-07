const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 5000;

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
  return res.status(200).json({
    slack_name: req.query.slack_name,
    current_day: currentDay,
    utc_time: currentDate.toISOString().replace(/\.\d+/, ""),
    track: req.query.track,
    github_file_url:
      "https://github.com/timmbach/hng_internship/blob/master/stage_1/app.js",
    github_repo_url: "https://github.com/timmbach/hng_internship/",
    status_code: 200,
  });
});

app.listen(PORT, () => {
  // console.log(`Server is listening on port ${PORT}`);
  console.log(currentDate.toISOString().replace(/\.\d+/, ""));
});
