import { Table } from "@tanstack/react-table";
import ColumnEditMenuTrigger from "./ColumnEditMenuTrigger";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/common/DropdownMenu";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/common/Button";
import ColumnEditMenuCheckboxItem from "@/components/data-table/ColumnEditMenuCheckboxItem";

interface ColumnEditMenuProps<A> {
  table: Table<A>;
}

function ColumnEditMenu<A>({ table }: ColumnEditMenuProps<A>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleableColumns = useMemo(
    () => table.getAllColumns().filter((column) => column.getCanHide()),
    [table]
  );

  const [visibleColumnIds, setVisibleColumnIds] = useState(
    new Set(toggleableColumns.map(({ id }) => id))
  );

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
  }, [visibleColumnIds, closeMenuHandler]);

  useEffect(() => {
    return resetHandler;
  }, []);

  return (
    <DropdownMenu open={isOpen} onOpenChange={toggleMenuHandler}>
      <ColumnEditMenuTrigger
        table={table}
        onClick={openMenuHandler}
        isOpen={isOpen}
      />
      <DropdownMenuContent
        className="flex-col px-5 py-4"
        align="end"
        onInteractOutside={interactOutsideHandler}
      >
        {toggleableColumns.map((column) => (
          <ColumnEditMenuCheckboxItem
            key={column.id}
            column={column}
            visibleColumnIds={visibleColumnIds}
            setVisibleColumnIds={setVisibleColumnIds}
          />
        ))}
        <DropdownMenuSeparator className="mt-4 mb-2" />
        <div className="flex flex-row justify-between flex-nowrap gap-x-2">
          <Button
            variant="ghost"
            className="font-medium p-0 m-0"
            onClick={resetHandler}
          >
            Reset Columns
          </Button>
          <div className="flex flex-row gap-x-1">
            <Button
              variant="outline"
              className="border-everegreen-800 drop-shadow-none"
              onClick={cancelHandler}
            >
              Cancel
            </Button>
            <Button
              variant="default"
              className="bg-green-400 drop-shadow-none"
              onClick={saveHandler}
            >
              Save
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ColumnEditMenu;
