import { getChartColor, IChart } from "@/utils/chartUtils";

export const geEnrollmentsByCarrierDoughnut = (data: IChart) => {
  return {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.keys(data).map((carrier) => data[carrier].total),
        backgroundColor: Object.keys(data).map((carrier) =>
          getChartColor(carrier),
        ),
        borderWidth: 0,
      },
    ],
  };
};
export const getCommissionsByCarrierDoughnut = (data: IChart) => {
  return {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.keys(data).map((carrier) => data[carrier].price),
        backgroundColor: Object.keys(data).map((carrier) =>
          getChartColor(carrier),
        ),
        borderWidth: 0,
      },
    ],
  };
};

export const getEnrollmentsByAgencyBar = (data: IChart) => {
  return {
    labels: [""],
    datasets: Object.keys(data).map((carrier) => {
      return {
        label: carrier,
        data: [data[carrier].total],
        backgroundColor: getChartColor(carrier),
        barPercentage: 0.8,
        categoryPercentage: 1,
      };
    }),
  };
};

export const getCommissionsByAgencyBar = (data: IChart) => {
  return {
    labels: [""],
    datasets: Object.keys(data).map((carrier) => {
      return {
        label: carrier,
        data: [data[carrier].price],
        backgroundColor: getChartColor(carrier),
        barPercentage: 0.8,
        categoryPercentage: 1,
      };
    }),
  };
};
