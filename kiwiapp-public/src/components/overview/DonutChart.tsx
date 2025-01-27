import { FC } from "react";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export const doughnutOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  cutout: "70%",
  layout: {
    padding: {
      top: 40,
      right: 40,
      bottom: 20,
      left: 40,
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
};

interface DoughnutChartProps {
  data: ChartData<"doughnut">;
}
export const DonutChart: FC<DoughnutChartProps> = ({ data }) => {
  return <Doughnut data={data} options={doughnutOptions} />;
};
