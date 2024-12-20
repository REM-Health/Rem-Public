import { DropdownMenuCheckboxItem } from "@/components/common/DropdownMenu";
import { Column } from "@tanstack/react-table";
import { useCallback } from "react";

interface ColumnEditMenuCheckboxItemProps<A> {
  column: Column<A>;
  visibleColumnIds: Set<string>;
  setVisibleColumnIds: (visibleColumnIds: Set<string>) => void;
}

export default function ColumnEditMenuCheckboxItem<A>({
  column,
  visibleColumnIds,
  setVisibleColumnIds,
}: ColumnEditMenuCheckboxItemProps<A>) {
  const columnId = column.id;
  const isChecked = visibleColumnIds.has(column.id);

  const checkedChangeHandler = useCallback(
    (value: boolean) => {
      const newVisibleColumnIds = new Set(visibleColumnIds);

      if (value === true) {
        newVisibleColumnIds.add(columnId);
      } else {
        newVisibleColumnIds.delete(columnId);
      }

      setVisibleColumnIds(newVisibleColumnIds);
    },
    [visibleColumnIds, setVisibleColumnIds]
  );

  const selectHandler = useCallback(
    (event: Event) => event.preventDefault(),
    []
  );

  return (
    <DropdownMenuCheckboxItem
      key={column.id}
      className="capitalize"
      checked={isChecked}
      onCheckedChange={checkedChangeHandler}
      // Keep the menu open on select [Issue](https://github.com/radix-ui/primitives/discussions/1632#discussioncomment-3507745)
      onSelect={selectHandler}
    >
      {column.id}
    </DropdownMenuCheckboxItem>
  );
}
