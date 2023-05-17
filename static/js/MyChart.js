const Chart = require("chart.js/auto");
Chart.defaults.font.size = 18;
Chart.defaults.backgroundColor = "#fca311";
// Chart.defaults.color = "#fca311";

class MyChart {
  #is_language_chart = true;
  #data;

  #data_languages = [
    { skill: "Java", value: 55 },
    { skill: "CSS", value: 72 },
    { skill: "JavaScript", value: 58 },
    { skill: "HTML", value: 70 },
    { skill: "Python", value: 22 },
    { skill: "SQL", value: 34 },
  ];

  #data_frame = [
    { skill: "Node.JS", value: 55 },
    { skill: "Axios", value: 35 },
    { skill: "Tailwind", value: 72 },
    { skill: "Bootstrap", value: 63 },
    { skill: "Express", value: 48 },
    { skill: "MongoDB", value: 40 },
    { skill: "MapBox", value: 32 },
    { skill: "Chart.js", value: 46 },
    { skill: "Git", value: 35 },
  ];

  #data_language_data = {
    labels: this.#data_languages.map((row) => row.skill),
    datasets: [
      {
        label: "Programming Languages",
        data: this.#data_languages.map((row) => row.value),
        backgroundColor: "#fca311",
      },
    ],
  };

  #data_frame_data = {
    labels: this.#data_frame.map((row) => row.skill),
    datasets: [
      {
        label: "Frameworks / Libraries",
        data: this.#data_frame.map((row) => row.value),
        backgroundColor: "#fca311",
      },
    ],
  };

  #current_chart;

  options() {
    return {
      type: "bar",
      data: this.#is_language_chart
        ? this.#data_language_data
        : this.#data_frame_data,
      options: {
        // maintainAspectRatio: false,
        indexAxis: "y",
        responsive: true,

        plugins: {
          title: {
            // I can remove title since I can just add it myself as a h1
            display: false,
          },
          legend: {
            labels: {
              font: {
                size: 28,
                family: "'Raleway', 'sans-serif'",
                weight: "900",
              },
            },
          },

          tooltip: {
            enabled: false,
          },
        },
        scales: {
          x: {
            title: {
              display: false,
              //   text: "Skill Level",
              //   padding: 20,
              //   color: "#fca311",
              //   font: {
              //     size: 24,
              //   },
            },
            max: 100,
            ticks: {
              stepSize: 25,
              callback: function (index) {
                if (index === 0) {
                  return "";
                } else if (index === 25) {
                  return "The basics";
                } else if (index === 50) {
                  return "Proficient";
                } else if (index === 75) {
                  return "Advanced";
                } else {
                  return "Virtuoso";
                }
              },
            },
          },
          y: {
            grid: {
              display: false,
            },
            title: {
              display: false,
            },
          },
        },
      },
    };
  }

  createLanguageChart() {
    if (
      typeof this.#current_chart === "object" &&
      this.#current_chart !== null
    ) {
      this.#current_chart.destroy();
    }

    this.#is_language_chart = true;

    this.#current_chart = new Chart(
      document.getElementById("chart"),
      this.options()
    );
  }

  createFrameChart() {
    if (
      typeof this.#current_chart === "object" &&
      this.#current_chart !== null
    ) {
      this.#current_chart.destroy();
    }

    this.#is_language_chart = false;

    console.log(this.#is_language_chart);
    this.#current_chart = new Chart(
      document.getElementById("chart"),
      this.options()
    );
  }
}
module.exports = MyChart;
