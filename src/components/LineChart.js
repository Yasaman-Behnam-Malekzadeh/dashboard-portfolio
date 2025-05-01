import rawData from "../data/data.json";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

function LineChart() {
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

  const data = {
    labels,
    datasets: [
      {
        label: "Entries per Date",
        data: labels.map((date) => countsByDate[date]),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return <Chart type="line" data={data} height={"200px"} width={"200px"} />;
}

export default LineChart;
