// Instantiate chart class
const MyChart = require("./MyChart.js");
const c = new MyChart();

// Get the chart buttons from index.ejs
const language_button = document.getElementById("languages");
const frame_button = document.getElementById("frame");
// Get the skills are <p> where on mobile the skills will be a string, not graph
const skills_area = document.getElementById("skills-area");

// Animation for elements to appear and move up as being scrolled down
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

function language_skills_area() {
  skills_area.innerHTML = "";
  const language_skills = ["Java", "CSS", "JavaScript", "HTML", "Python"];
  for (let skill of language_skills) {
    let new_li = document.createElement("li");
    new_li.innerText = skill;
    skills_area.appendChild(new_li);
  }
}

function frame_skills_area() {
  skills_area.innerHTML = "";
  const frame_skills = [
    "Node.js",
    "Axios",
    "Tailwind",
    "Bootstrap",
    "Express",
    "MongoDB",
    "MapBox",
    "Chart.js",
    "Git",
  ];
  for (let skill of frame_skills) {
    let new_li = document.createElement("li");
    new_li.innerText = skill;
    skills_area.appendChild(new_li);
  }
}

// Langauge Button
language_button.addEventListener("click", function () {
  c.createLanguageChart();
  language_skills_area();
});

// Frame Button
frame_button.addEventListener("click", function () {
  c.createFrameChart();
  frame_skills_area();
});

// When window is loaded, by default have the pragramming langauges chart show
// On mobile, will just display text showing programming languages
window.onload = () => {
  c.createLanguageChart();
  language_skills_area();
  // Have to run the reveal function at load to get all the elements intiali distances from
  // the top of the page
  reveal();
};
