import React, { useState, Fragment, useCallback, type FC } from "react";
import Card from "@/components/common/Card";
import Modal from "@/components/common/ModalWindow";
import ActionButtons from "@/components/common/ActionButtons";
import { H2 } from "@/components/common/Headers";
import { useBoolean } from "@/hooks/use-boolean";
import { BENEFITS_CARDS } from "@/constants/cards.constants";
import type { IStep } from "@/types/steps.types";

const ExtrasStep: FC<IStep> = ({ onNextStep, onPrevStep }) => {
  const [isOpenModal, { on, off }] = useBoolean(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = useCallback(
    (index: number) => () => {
      setSelectedOption(index);
    },
    [],
  );

  return (
    <div className="mt-7 px-5 md:mt-18 md:px-0">
      <div className="relative flex w-full flex-col items-center justify-center">
        {isOpenModal && (
          <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-evergreen-800 bg-opacity-70">
            <Modal onClose={off} onSave={onNextStep} />
          </div>
        )}
        <div className="flex w-full flex-col items-center justify-center">
          <H2 className="text-center font-normal leading-normal md:max-w-150 md:!leading-tight">
            Select The Benefits That Matter Most To You
          </H2>
        </div>
        <div className={"mt-11 flex w-full flex-wrap justify-center gap-x-2 gap-y-9 md:mt-19 md:gap-x-4 md:gap-y-10"}>
          {BENEFITS_CARDS.map((item, index) => (
            <Fragment key={item.id}>
              <Card
                image={item.img}
                label={item.label}
                isActive={selectedOption === index}
                onClick={handleSelectOption(index)}
              />
            </Fragment>
          ))}
        </div>
        <ActionButtons onClickPrimaryButton={on} onClickSecondaryButton={onPrevStep} />
      </div>
    </div>
  );
};

export default ExtrasStep;
