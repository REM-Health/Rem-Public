import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import DollarFigure from "@/components/data-table/DollarFigure";
import { CommissionDatum } from "@/pages/api/commission/types";

const columnHelper = createColumnHelper<CommissionDatum>();
export default function getColumns(section: string) {
  const initialColumns: ColumnDef<CommissionDatum, any>[] = [
    columnHelper.accessor("Member Name", {
      cell: (info) => info.getValue(),
    }),
  ];

  switch (section) {
    case "members": {
      return [
        ...initialColumns,
        columnHelper.accessor("Agent Name", {
          cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("Plan Name", { cell: (info) => info.getValue() }),
        columnHelper.accessor("Plan ID", { cell: (info) => info.getValue() }),
        /* Add additional columns here */
      ];
    }
    case "enrollments": {
      return [
        ...initialColumns,
        /* Add additional columns here */
      ];
    }
    case "commissions": {
      return [
        ...initialColumns,
        columnHelper.accessor("Commission Amount Total", {
          cell: (info) => {
            return <DollarFigure value={Number(info.getValue())} />;
          },
        }),
        columnHelper.accessor("Agent Name", {
          cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("Plan ID", { cell: (info) => info.getValue() }),
        columnHelper.accessor("Disenrollment Date", {
          cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("Enrollment Type", {
          cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("Commission Period", {
          cell: (info) => info.getValue(),
        }),
        /* Add additional columns here */
      ];
    }
    default: {
      throw new Error(`Section ${section} not found.`);
    }
  }
}
