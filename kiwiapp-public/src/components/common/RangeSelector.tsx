import { memo, useState, useCallback } from "react";

const OPTIONS = [0, 1, 2, 3, 4, 5, "6+"];

const RangeSelector = () => {
  const [selected, setSelected] = useState<number | string>(0);

  const getProgressWidth = useCallback(
    (option: number | string) => `${(OPTIONS.indexOf(option) / (OPTIONS.length - 1)) * 100}%`,
    [],
  );

  const handleSelect = useCallback(
    (option: number | string) => () => {
      setSelected(option);
    },
    [],
  );

  return (
    <div className="flex w-full flex-col items-start gap-y-5 md:gap-y-7">
      <div className="flex w-full flex-col justify-between gap-y-5 md:flex-row md:gap-y-7">
        <div className="flex">
          {OPTIONS.map((option, index) => (
            <div key={index}>
              <button
                key={index}
                className={`w-10 ${index !== 0 && "ml-5"} flex h-10 items-center justify-center rounded-full text-sm font-medium transition-all
                md:h-15 md:w-15 ${selected === option ? "bg-plum text-white" : "bg-neutral-100 text-gray-700"}`}
                onClick={handleSelect(option)}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
        <span className="text-sm font-semibold leading-5 text-black md:text-xl">{selected} Times</span>
      </div>

      <div className="relative mt-2 h-2 w-full rounded-full bg-neutral-100">
        <div
          className="absolute left-0 h-2 rounded-full bg-plum transition-all duration-300"
          style={{ width: getProgressWidth(selected) }}
        />
      </div>
    </div>
  );
};

export default memo(RangeSelector);
