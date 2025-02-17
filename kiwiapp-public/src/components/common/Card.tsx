import { memo, type FC } from "react";
import Image, { type StaticImageData } from "next/image";
import { cn } from "@/utils/common.utils";
import CheckIcon from "@/components/icons/CheckIcon";
import CircleIcon from "@/components/icons/CircleIcon";

interface CardPropsProps {
  image: StaticImageData;
  label: string;
  classNameWrapper?: string;
  classNameContainer?: string;
  isActive: boolean;
  onClick: () => void;
}

const Card: FC<CardPropsProps> = ({
  label,
  image,
  classNameWrapper = "",
  classNameContainer = "",
  isActive,
  onClick,
}) => {
  const baseContainerStyles = "flex flex-col max-w-47 md:min-w-77 relative cursor-pointer";

  const baseWrapperStyles = `relative w-full h-47 md:h-55 flex flex-col rounded-2xl items-center border-2 ${
    isActive ? "border-rem-green-400" : "border-gray-200"
  }`;

  return (
    <div className={cn(baseContainerStyles, classNameContainer)} onClick={onClick}>
      <div className={cn(baseWrapperStyles, classNameWrapper)}>
        <div
          className={`absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full ${ isActive &&
            "bg-rem-green-400" }`}
        >
          {isActive ? <CheckIcon /> : <CircleIcon />}
        </div>
        <Image src={image} alt={label} />
      </div>
      <div className="relative mt-5 flex items-center justify-center bg-white px-0 md:mt-7 md:px-5">
        <span className="text-center font-medium leading-tight md:text-xl">{label}</span>
      </div>
    </div>
  );
};

export default memo(Card);
