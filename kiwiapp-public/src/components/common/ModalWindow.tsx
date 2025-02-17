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

  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  useOnClickOutside(ref, onClose);

  const handleSelect = useCallback(
    (id: number) => () => {
      if (selectedCards.includes(id)) {
        setSelectedCards((prev) => prev.filter((cardId) => cardId !== id));
      } else {
        setSelectedCards((prev) => [...prev, id]);
      }
    },
    [selectedCards],
  );

  return (
    <div className="inset-0 flex w-full items-center justify-center px-5 py-5">
      <div
        ref={ref}
        className="relative max-h-90vh w-full max-w-7xl overflow-auto rounded-2xl bg-white py-5 shadow-lg md:max-h-screen-minus-40 md:py-15"
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
          {MODAL_CARDS.map((item) => (
            <Fragment key={item.id}>
              <Card
                label={item.label}
                image={item.img}
                isActive={selectedCards.includes(item.id)}
                onClick={handleSelect(item.id)}
                classNameContainer="max-w-42 md:min-w-67"
                classNameWrapper="h-42"
              />
            </Fragment>
          ))}
        </div>
        <div className="mt-15 flex w-full items-center justify-center px-5">
          <Button type="fill" className="w-full rounded-full text-base leading-tight md:w-77" onClick={onSave}>
            Save & Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
