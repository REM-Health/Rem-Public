import { FC } from "react";

interface SelectedBarProps {
  name: string;
  value: string;
}
export const SelectedBar: FC<SelectedBarProps> = ({ name, value }) => {
  return (
    <p className="flex items-center gap-2 text-base text-neutral-300">
      {name}
      <span className="font-medium text-evergreen-500">{value}</span>
    </p>
  );
};
