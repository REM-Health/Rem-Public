import { memo, useRef, useCallback, useState, Fragment, type FC } from "react";
import { useOnClickOutside } from "@/hooks/use-outside-click";
import Card from "@/components/common/Card";
import Image from "next/image";
import Button from "@/components/common/Button";
import { H2 } from "@/components/common/Headers";
import { MODAL_CARDS } from "@/constants/cards.constants";
import CloseIcon from "public/assets/icons/close-icon.svg";
import LargeCloseIcon from "public/assets/icons/large-close-icon.svg";

interface ModalProps {
  onClose: () => void;
  onSave: () => void;
}

const Modal: FC<ModalProps> = ({ onSave, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useOnClickOutside(ref, onClose);

  const handleSelectOption = useCallback(
    (index: number) => () => {
      setSelectedOption(index);
    },
    [],
  );

  return (
    <div className="inset-0 flex w-full items-center justify-center px-5 py-5">
      <div
        ref={ref}
        className="relative max-h-[90vh] w-full max-w-[1220px] overflow-auto rounded-2xl bg-white py-5 shadow-lg
          md:max-h-[calc(100vh-40px)] md:py-15"
      >
        <button
          className="absolute right-5 top-5 h-10 w-10 rounded-full bg-neutral-100 md:right-10 md:top-13 md:h-15 md:w-15"
          onClick={onClose}
        >
          <div className="md:hidden">
            <Image src={CloseIcon} alt="close" />
          </div>
          <div className="hidden md:block">
            <Image src={LargeCloseIcon} alt="close-icon" />
          </div>
        </button>

        <div className="mt-15 w-full border-b md:mt-0">
          <H2 className="mb-15 text-center">Other Benefits</H2>
        </div>

        <div className="mt-11 flex flex-wrap justify-center gap-x-2 gap-y-5 px-5 md:mt-19 md:gap-x-5">
          {MODAL_CARDS.map((item, index) => (
            <Fragment key={item.id}>
              <Card
                label={item.label}
                image={item.img}
                isActive={selectedOption === index}
                onClick={handleSelectOption(index)}
                classNameContainer="max-w-[170px] md:min-w-[270px]"
                classNameWrapper="h-[170px]"
              />
            </Fragment>
          ))}
        </div>
        <div className="mt-15 flex w-full items-center justify-center px-5">
          <Button type="fill" className="w-full rounded-full text-base leading-tight md:w-[310px]" onClick={onSave}>
            Save & Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
