// const { Test } = require("./test");
// Test.print();
// Chart.defaults.font.size = 16;

const Test = require("./test.js");
const t = new Test();
t.print();

const MyChart = require("./MyChart.js");
const c = new MyChart();

const language_button = document.getElementById("languages");
const frame_button = document.getElementById("frame");

language_button.addEventListener("click", function () {
  console.log("Clicked the language button");

  t.print();
  c.createLanguageChart();
});

frame_button.addEventListener("click", function () {
  c.createFrameChart();
});

console.log("Script is working");

window.onload = () => {
  c.createLanguageChart();
};
