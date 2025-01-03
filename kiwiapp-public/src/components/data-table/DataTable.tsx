import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/common/Table";
import { flexRender, Table as TableType } from "@tanstack/react-table";
import clsx from "clsx";

interface DataTableProps<A> {
  table: TableType<A>;
}

export default function DataTable<A>({ table }: DataTableProps<A>) {
  const rows = table.getRowModel().rows;

  return (
    <Table className="table-fixed w-full">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow
            key={headerGroup.id}
            className="bg-white hover:bg-white border border-y-neutral-200 border-x-0"
          >
            {headerGroup.headers.map((header, i) => (
              <TableHead
                key={header.id}
                style={{ width: `${header.getSize()}px` }}
                className={clsx(
                  "text-neutral-400 font-medium px-8",
                  i === 0 && "sticky left-0"
                )}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {rows?.length ? (
          rows.map((row) => (
            <TableRow
              key={row.id}
              className="odd:bg-neutral-50 even:bg-white border-0"
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <TableCell key={cell.id} className="px-8 truncate">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                );
              })}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={table.getAllColumns().length}
              className="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
