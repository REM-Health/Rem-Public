interface DollarFigureProps {
  value: number;
}

export default function DollarFigure({ value }: DollarFigureProps) {
  const localeValue = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

  return value >= 0 ? (
    localeValue
  ) : (
    <span className={"rounded-full bg-red-200 text-red-500 px-2 py-1.5"}>
      {localeValue}
    </span>
  );
}
