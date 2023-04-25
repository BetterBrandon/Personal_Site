// Instantiate chart class
const MyChart = require("./MyChart.js");
const c = new MyChart();

// Get the chart buttons from index.ejs
const language_button = document.getElementById("languages");
const frame_button = document.getElementById("frame");
const skills_area = document.getElementById("skills-area");

// Langauge Button
language_button.addEventListener("click", function () {
  c.createLanguageChart();
  skills_area.innerText = "Java, CSS";
});

// Frame Button
frame_button.addEventListener("click", function () {
  c.createFrameChart();
  skills_area.innerText = "Node.JS, Tailwind, MongoDB, Axios";
});

console.log("Script is working");

// When window is loaded, by default have the pragramming langauges chart show
window.onload = () => {
  c.createLanguageChart();
};
