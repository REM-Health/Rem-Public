const generateRandomColors = (numColors: number) => {
  return Array.from(
    { length: numColors },
    () =>
      `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`,
  );
};

const colorPalette: Record<string, string> = {
  Humana: "#7E90ED",
  Aetna: "#F1AE71",
  "Blue Shield Blue Cross": "#D090EF",
  Molina: "#18F1A1",
  Kaiser: "#7FCBEB",
  Cigna: "#F1E471",
  Default: "#7FCBEB",
};

export const getChartColor = (key: string) =>
  colorPalette[key] || generateRandomColors(1)[0];

export type IChart = { [key: string]: { total: number; price: number } };

export const chartData: IChart = {
  Humana: { total: 1102, price: 710000 },
  Aetna: { total: 873, price: 234000 },
  "Blue Shield Blue Cross": { total: 342, price: 152000 },
  Molina: { total: 220, price: 81000 },
  Kaiser: { total: 51, price: 55000 },
  Cigna: { total: 48, price: 42000 },
};
