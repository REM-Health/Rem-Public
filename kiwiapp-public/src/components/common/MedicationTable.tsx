"use client";
import { memo, useMemo, useCallback, useState } from "react";
import { cn } from "@/utils/common.utils";
import { ColumnDef, flexRender, useReactTable, getCoreRowModel } from "@tanstack/react-table";
import Button from "@/components/common/Button";
import DeleteIcon from "@/components/icons/DeleteIcon";
import { DEFAULT_MEDICATION_DATA } from "@/constants/medication.constants";
import type { Medication } from "@/types/medication.types";

const MedicationTable = () => {
  const [data, setData] = useState(DEFAULT_MEDICATION_DATA);

  const handleDelete = useCallback(
    (index: number) => () => {
      setData((prev) => prev.filter((_, i) => i !== index));
    },
    [],
  );

  const columns: ColumnDef<Medication>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: () => "Medication Name",
        meta: {
          cellClassName: "col-span-3 text-left",
          headerClassName: "col-span-3 text-left",
        },
      },
      {
        accessorKey: "dosage",
        header: () => "Dosage",
        cell: ({ getValue }) => <span className="text-center">{getValue<string>()}</span>,
        meta: {
          cellClassName: "col-span-3",
          headerClassName: "col-span-3",
        },
      },
      {
        accessorKey: "quantity",
        header: () => "Quantity",
        meta: {
          cellClassName: "col-span-2",
          headerClassName: "col-span-2",
        },
      },
      {
        accessorKey: "daysSupply",
        header: () => "Days Supply",
        meta: {
          cellClassName: "col-span-3",
          headerClassName: "col-span-3",
        },
      },
      {
        id: "actions",
        header: () => "",
        cell: ({ row }) => (
          <Button
            className="min-h-10 min-w-10 rounded-full bg-red-500 p-0 text-white hover:bg-red-700"
            onClick={handleDelete(row.index)}
          >
            <DeleteIcon />
          </Button>
        ),
        meta: {
          cellClassName: "col-span-1 flex justify-end",
          headerClassName: "col-span-1",
        },
      },
    ],
    [handleDelete],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="grid grid-cols-12">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={cn(
                    "font-sans text-sm font-semibold md:text-xl",
                    header.column.columnDef.meta?.headerClassName,
                  )}
                >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="mt-2 grid h-17 grid-cols-12 items-center border-b">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={cn(
                    "text-center font-sans text-sm font-medium md:text-xl",
                    cell.column.columnDef.meta?.cellClassName,
                  )}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(MedicationTable);
