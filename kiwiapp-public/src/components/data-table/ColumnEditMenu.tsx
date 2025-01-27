import { Table } from "@tanstack/react-table";
import ColumnEditMenuTrigger from "./ColumnEditMenuTrigger";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/common/DropdownMenu";
import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/common/Button";
import ColumnEditMenuCheckboxItem from "@/components/data-table/ColumnEditMenuCheckboxItem";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

interface ColumnEditMenuProps<A> {
  table: Table<A>;
  onColumnVisibilityChange: (columns: Set<string>) => void;
  setColumnOrder:  Dispatch<SetStateAction<string[]>>;
  columnOrder: string[];
}

function ColumnEditMenu<A>({
  table,
  onColumnVisibilityChange,
  setColumnOrder,
  columnOrder,
}: ColumnEditMenuProps<A>) {
  const [isOpen, setIsOpen] = useState(false);

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
      setColumnOrder((prev) => {
        const oldIndex = prev.indexOf(active.id as string);
        const newIndex = prev.indexOf(over.id as string);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  const toggleableColumns = useMemo(
    () => table.getAllLeafColumns().filter((column) => column.getCanHide()),
    [table]
  );

  const [visibleColumnIds, setVisibleColumnIds] = useState(
    new Set(toggleableColumns.map(({ id }) => id))
  );

  useEffect(() => {
    onColumnVisibilityChange(visibleColumnIds);
  }, [visibleColumnIds]);

  const toggleMenuHandler = useCallback(
    (value: boolean) => setIsOpen(!value),
    [setIsOpen]
  );

  const openMenuHandler = useCallback(() => setIsOpen(true), [setIsOpen]);

  const closeMenuHandler = useCallback(() => setIsOpen(false), [setIsOpen]);

  const resetHandler = useCallback(() => {
    setVisibleColumnIds(
      new Set(
        toggleableColumns.map((column) => {
          column.toggleVisibility(true);

          return column.id;
        })
      )
    );
  }, [setVisibleColumnIds, toggleableColumns]);

  const cancelHandler = useCallback(() => {
    resetHandler();
    closeMenuHandler();
  }, [resetHandler, closeMenuHandler]);

  const interactOutsideHandler = useCallback(
    (event: Event) => {
      event.preventDefault();
      cancelHandler();
    },
    [cancelHandler]
  );

  const saveHandler = useCallback(() => {
    toggleableColumns.forEach((column) => {
      const isVisible = visibleColumnIds.has(column.id);

      column.toggleVisibility(isVisible);
    });

    closeMenuHandler();
  }, [visibleColumnIds, closeMenuHandler, toggleableColumns]);

  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={handleDragEnd}
      sensors={sensors}>
      <DropdownMenu open={isOpen} onOpenChange={toggleMenuHandler}>
        <ColumnEditMenuTrigger
          table={table}
          onClick={openMenuHandler}
          isOpen={isOpen}
        />
        <DropdownMenuContent
          className='flex-colso px-5 py-4'
          align='end'
          onInteractOutside={interactOutsideHandler}>
          <SortableContext
            items={columnOrder}
            strategy={verticalListSortingStrategy}>
            {table.getAllLeafColumns().map((column, i) => (
              <div key={i}>
                <ColumnEditMenuCheckboxItem
                  key={i}
                  column={column}
                  visibleColumnIds={visibleColumnIds}
                  setVisibleColumnIds={setVisibleColumnIds}
                />
              </div>
            ))}
          </SortableContext>
          <DropdownMenuSeparator className='mt-4 mb-2' />
          <div className='flex flex-row justify-between flex-nowrap gap-x-2'>
            <Button
              variant='ghost'
              className='font-medium p-0 m-0'
              onClick={resetHandler}>
              Reset Columns
            </Button>
            <div className='flex flex-row gap-x-1'>
              <Button
                variant='outline'
                className='border-everegreen-800 drop-shadow-none'
                onClick={cancelHandler}>
                Cancel
              </Button>
              <Button
                variant='default'
                className='bg-green-400 drop-shadow-none'
                onClick={saveHandler}>
                Save
              </Button>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </DndContext>
  );
}

export default ColumnEditMenu;
