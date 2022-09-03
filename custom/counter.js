// for counter up
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});

// for line chart
let date = [
  "july 10",
  "july 11",
  "july 12",
  "july 13",
  "july 14",
  "july 15",
  "july 16",
  "july 17",
];

let order = [20, 40, 30, 60, 50, 70, 72, 75];
let viewer = [40, 60, 80, 100, 120, 80, 40, 70];
const ctx = document.getElementById("ov");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: date,
    datasets: [
      {
        label: "Orders",
        data: order,
        backgroundColor: ["#f4433650"],
        borderColor: ["#ff3d37"],
        fill: true,
        tension: 0.3,
        borderWidth: 1,
      },
      {
        label: "Viewers",
        data: viewer,
        backgroundColor: ["#05ffa120"],
        borderColor: ["#74d600"],
        fill: true,
        tension: 0.3,
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// for donut chart
// doughnut
const ctx1 = document.getElementById("sp");
const myChart1 = new Chart(ctx1, {
  type: "doughnut",
  data: {
    labels: ["YGN", "MDY", "MG", "SK", "NPT"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "#03b96550",
          "#e500bc50",
          "#ff3d3750",
          "#01cdfe50",
          "#9600ff50",
        ],
        borderColor: ["#03b965", "#e500bc", "#ff3d37", "#01cdfe", "#9600ff"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
      },
    },
  },
});
