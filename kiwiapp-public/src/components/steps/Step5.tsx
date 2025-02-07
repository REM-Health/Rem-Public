import React, { useState, Fragment, useCallback, type FC, } from "react";
// componets
import Card from "@/components/common/Card";
import Modal from "@/components/common/ModalWindow";
import ActionButtons from "@/components/common/ActionButtons";
import { H2 } from "@/components/common/Headers";
import { IStep } from "@/types/stepType";
// hooks
import { useBoolean } from "@/hooks/use-boolean";
// assets
import DirectionImage1 from "public/assets/images/step5/direction1.png";
import DirectionImage2 from "public/assets/images/step5/direction2.png";
import DirectionImage3 from "public/assets/images/step5/direction3.png";
import DirectionImage4 from "public/assets/images/step5/direction4.png";
import DirectionImage5 from "public/assets/images/step5/direction5.png";
import DirectionImage6 from "public/assets/images/step5/direction6.png";
import DirectionImage7 from "public/assets/images/step5/direction7.png";
import DirectionImage8 from "public/assets/images/step5/direction8.png";

const optionsArr = [
  {
    id: 1,
    img: DirectionImage1,
    alt: "DirectionImage1",
    title: "Vision",
  },
  {
    id: 2,
    img: DirectionImage2,
    alt: "DirectionImage2",
    title: "Dental",
  },

  {
    id: 3,
    img: DirectionImage3,
    alt: "DirectionImage3",
    title: "Hearing Aids",
  },
  {
    id: 4,
    img: DirectionImage4,
    alt: "DirectionImage4",
    title: "Groceries",
  },
  {
    id: 5,
    img: DirectionImage5,
    alt: "DirectionImage5",
    title: "Over-the-counter Medications",
  },
  {
    id: 6,
    img: DirectionImage6,
    alt: "DirectionImage6",
    title: "Gym Membership",
  },

  {
    id: 7,
    img: DirectionImage7,
    alt: "DirectionImage7",
    title: "Transportation",
  },
  {
    id: 8,
    img: DirectionImage8,
    alt: "DirectionImage8",
    title: "Other",
  },
];

const ExtrasStep: FC<IStep> = ({ onNextStep, onPrevStep }) => {
  const [isOpenModal, { on, off }] = useBoolean(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = useCallback(
    (index: number) => () => {
      setSelectedOption(index);
    },
    []
  );

  return (
    <div className="mt-[29px] sm:mt-[74px] px-[20px] sm:px-[0px]">
      <div className="w-full flex flex-col items-center justify-center relative">
        {isOpenModal && (
          <div className="flex justify-center items-center w-[100vw] h-[100vh] top-[0px] left-[0px] fixed z-1000 bg-[rgba(23,42,37,0.7)]">
            <Modal onClose={off} onSave={onNextStep} />
          </div>
        )}
        <div className="flex flex-col  justify-center items-center w-full">
          <H2 className="sm:max-w-[600px] text-[30px] !leading-[36px] sm:!leading-[60px] sm:text-[50px] font-[400] text-center">
            Select The Benefits That Matter Most To You
          </H2>
        </div>
        <div
          className={`w-[full] flex flex-wrap justify-center gap-y-[35px] gap-x-[10px] sm:gap-y-10 sm:gap-x-4 mt-[45px] sm:mt-[75px] ${
            isOpenModal && "!-z-10"
          } `}
        >
          {optionsArr.map((item, index) => (
            <Fragment key={item.id}>
              <Card
                image={item.img}
                label={item.title}
                isActive={selectedOption === index}
                onClick={handleSelectOption(index)}
              />
            </Fragment>
          ))}
        </div>
        <ActionButtons
          onClickPrimaryButton={on}
          onClickSecondaryButton={onPrevStep}
        />
      </div>
    </div>
  );
};

export default ExtrasStep;
