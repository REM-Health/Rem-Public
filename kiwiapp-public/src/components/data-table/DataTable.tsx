import React, { Dispatch, SetStateAction, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import { flexRender, Table as TableType } from "@tanstack/react-table";
import {
  DraggableTableHead,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/common/Table";
import { Virtualizer } from "@tanstack/react-virtual";

interface DataTableProps<A> {
  table: TableType<A>;
  setColumnOrder: Dispatch<SetStateAction<string[]>>;
  columnOrder: string[];
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
  isFetching: boolean;
}

export default function DataTable<A>({
  table,
  setColumnOrder,
  columnOrder,
  rowVirtualizer,
  isFetching,
}: DataTableProps<A>) {
  useEffect(() => {
    const newColumns = table.getAllColumns().map((col) => col.id);
    if (
      columnOrder.length === 0 ||
      JSON.stringify(columnOrder) !== JSON.stringify(newColumns)
    ) {
      setColumnOrder(newColumns);
    }
  }, [table.getAllColumns()]);

  useEffect(() => {
    if (columnOrder.length > 0) {
      table.setColumnOrder(columnOrder);
    }
  }, [columnOrder, table]);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setColumnOrder((prev: string[]) => {
        const oldIndex = prev.indexOf(active.id as string);
        const newIndex = prev.indexOf(over.id as string);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToHorizontalAxis]}
      onDragEnd={handleDragEnd}
      sensors={sensors}>
      <Table className='table-fixed w-full'>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className='bg-white hover:bg-white border border-y-neutral-200 border-x-0'>
              <SortableContext
                items={columnOrder}
                strategy={horizontalListSortingStrategy}>
                {headerGroup.headers.map((header) => (
                  <DraggableTableHead key={header.id} header={header} />
                ))}
              </SortableContext>
            </TableRow>
          ))}
        </TableHeader>
        <TableBody
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`, //tells scrollbar how big the table is
            // position: "relative", //needed for absolute positioning of rows
          }}>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className='odd:bg-neutral-50 even:bg-white'>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className='px-8'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isFetching && <div>Fetching More...</div>}
    </DndContext>
  );
}
