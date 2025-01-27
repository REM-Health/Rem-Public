import { Button } from "@/components/common/Button";
import { Table } from "@tanstack/react-table";
import { Edit02 } from "@untitled-ui/icons-react";
import { ComponentProps } from "react";
import { DropdownMenuTrigger } from "@/components/common/DropdownMenu";

interface TriggerButtonProps<A> extends ComponentProps<typeof Button> {
  table: Table<A>;
  isOpen?: boolean;
}

export default function ColumnEditMenuTrigger<A>({
  table,
  // isOpen = false,
  ...props
}: TriggerButtonProps<A>) {
  const count = table
    .getAllColumns()
    .filter((column) => column.getIsVisible()).length;

  return (
    <DropdownMenuTrigger
      {...props}
      asChild
      className="data-[state=open]:bg-evergreen-100 data-[state=open]:text-green-400 data-[state=closed]:bg-white"
    >
      <Button className="focus-visible:ring-0">
        <Edit02 />
        Edit Columns
        <span className="text-green-400 font-semibold">{count}</span>
      </Button>
    </DropdownMenuTrigger>
  );
}
