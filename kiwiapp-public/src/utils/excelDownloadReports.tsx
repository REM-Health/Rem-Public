import { CommissionDatum } from "@/types";
import ExcelJS from "exceljs";

const downloadExcel = (
  data: CommissionDatum[] ,
  visibleColumnIds: Set<string> | undefined,
 
) => {
  if (!visibleColumnIds) return;

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Commission Data");
  const columnsToInclude = [...visibleColumnIds];
  const headers = columnsToInclude.filter((column) => column in data[0]);

  worksheet.columns = headers.map((header) => ({
    header,
    key: header,
    width: 40,
  }));

  data.forEach((item) => {
    const filteredItem = headers.reduce((acc, header) => {
      if (header in item) {
        acc[header] = item[header];
      }
      return acc;
    }, {} as Record<string, unknown>);
    worksheet.addRow(filteredItem);
  });

  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `CommissionData.xlsx`;
    anchor.click();
    window.URL.revokeObjectURL(url);
  });
};

export default downloadExcel;
