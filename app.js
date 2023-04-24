const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (request, response) => {
  response.render("index");
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
