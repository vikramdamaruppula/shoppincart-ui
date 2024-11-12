// AnalyticsChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const data = {
    labels: [
      "07 Jun",
      "08 Jun",
      "09 Jun",
      "10 Jun",
      "11 Jun",
      "12 Jun",
      "13 Jun",
    ],
    datasets: [
      {
        label: "Direct",
        data: [2, 3, 1, 4, 2, 3, 4],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Organic Search",
        data: [3, 5, 2, 3, 3, 2, 4],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Social",
        data: [6, 12, 14, 5, 3, 5, 6],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },

      {
        label: "Other",
        data: [1, 1, 1, 2, 1, 1, 2],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Traffic Channel",
        position: "bottom",
      },
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Analytics;
