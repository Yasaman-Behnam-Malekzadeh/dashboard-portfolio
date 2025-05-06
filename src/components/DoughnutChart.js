import { Chart } from "react-chartjs-2";
import "chart.js/auto";
import rawData from "../data/data.json";

function DoughnutChart() {
  const countsByDate = rawData.reduce((acc, item) => {
    acc[item.date] = (acc[item.date] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(countsByDate)
    .sort(
      (a, b) =>
        new Date(b.split("/").reverse().join("/")) -
        new Date(a.split("/").reverse().join("/"))
    )
    .reverse();
  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#00A36C",
    "#F67280",
    "#6C5B7B",
    "#355C7D",
    "#C06C84",
    "#3E8E7E",
    "#F8B195",
    "#F06292",
    "#BA68C8",
    "#4DB6AC",
    "#81C784",
    "#FFD54F",
    "#90A4AE",
    "#B0BEC5",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Entries per Date",
        data: labels.map((date) => countsByDate[date]),
        fill: false,
        backgroundColor: colors.slice(0, labels.length),
        borderColor: "black",
        tension: 0.7,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 0,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <Chart
      type="doughnut"
      data={data}
      height={"50px"}
      width={"50px"}
      options={options}
    />
  );
}

export default DoughnutChart;
