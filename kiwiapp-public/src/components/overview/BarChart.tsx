import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const berOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 40,
      right: 20,
      bottom: 20,
      left: 0,
    },
  },
  plugins: {
    legend: {
      position: "right",
      labels: {
        usePointStyle: true,
        padding: 30,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

export const BarChart = ({ data }) => {
  return <Bar data={data} options={berOptions} />;
};
