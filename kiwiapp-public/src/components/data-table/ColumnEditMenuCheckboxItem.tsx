import { DropdownMenuCheckboxItem } from "@/components/common/DropdownMenu";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
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
  
  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useSortable({
      id: columnId,
    });
  const style: React.CSSProperties = {
    opacity: isDragging ? 0.8 : 1,
    position: "relative",
    transform: CSS.Translate.toString(transform), 
    transition: "width transform 0.2s ease-in-out",
    zIndex: isDragging ? 1 : 0,
  };

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
    [visibleColumnIds, setVisibleColumnIds, columnId]
  );

  const selectHandler = useCallback(
    (event: Event) => event.preventDefault(),
    []
  );

  return (
    <div className='flex' draggable='true' style={style} ref={setNodeRef}>
      <button className='px-2' {...attributes} {...listeners}>
        🟰
      </button>
      <DropdownMenuCheckboxItem
        key={column.id}
        className='capitalize'
        checked={isChecked}
        onCheckedChange={checkedChangeHandler}
        // Keep the menu open on select [Issue](https://github.com/radix-ui/primitives/discussions/1632#discussioncomment-3507745)
        onSelect={selectHandler}>
        {column.id}
      </DropdownMenuCheckboxItem>
    </div>
  );
}
