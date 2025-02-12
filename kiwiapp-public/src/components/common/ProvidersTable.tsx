"use client";
import { memo, useCallback, useState } from "react";
import { cn } from "@/utils/common.utils";
import { ColumnDef, flexRender, useReactTable, getCoreRowModel } from "@tanstack/react-table";
import Button from "@/components/common/Button";
import { DEFAULT_PROVIDERS_DATA } from "@/constants/providers.constants";
import type { Providers } from "@/types/providers-data.types";
import DeleteIcon from "@/components/icons/DeleteIcon";

const ProvidersTable = () => {
  const [data, setData] = useState(DEFAULT_PROVIDERS_DATA);

  const handleDelete = useCallback(
    (index: number) => () => {
      setData((prev) => prev.filter((_, i) => i !== index));
    },
    [],
  );

  const columns: ColumnDef<Providers>[] = [
    {
      accessorKey: "name",
      header: () => "Name",
      meta: {
        cellClassName: "col-span-3 md:col-span-3 text-left",
        headerClassName: "col-span-3 md:col-span-3 text-left",
      },
    },
    {
      accessorKey: "address",
      header: () => "Practice Address",
      meta: {
        cellClassName: "col-span-6 md:col-span-3 text-left",
        headerClassName: "col-span-6 md:col-span-3 text-left",
      },
    },
    {
      id: "actions",
      header: () => "",
      cell: ({ row }) => (
        <Button
          className="h-10 w-10 min-w-10 rounded-full bg-red-500 p-0 text-white hover:bg-red-700"
          onClick={handleDelete(row.index)}
        >
          <DeleteIcon />
        </Button>
      ),
      meta: {
        cellClassName: "col-span-1 md:col-span-3 flex justify-end",
        headerClassName: "col-span-1 md:col-span-3",
      },
    },
  ];

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
            <tr key={headerGroup.id} className="grid grid-cols-10 pb-5 md:grid-cols-9 md:pb-7">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={cn(
                    "text-left font-sans text-sm font-semibold md:text-xl",
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
            <tr key={row.id} className="mt-5 grid h-15 grid-cols-10 border-b md:mt-4 md:grid-cols-9">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={cn(
                    "flex items-center pb-2 font-sans text-sm font-medium md:pb-5 md:text-xl",
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

export default memo(ProvidersTable);
