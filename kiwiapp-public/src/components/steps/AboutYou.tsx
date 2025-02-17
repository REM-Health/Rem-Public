"use client";
import { Fragment, useState, useCallback, type FC } from "react";
import Card from "@/components/common/Card";
import ActionButtons from "@/components/common/ActionButtons";
import { H2 } from "@/components/common/Headers";
import { ABOUT_YOU_CARDS } from "@/constants/cards.constants";
import type { IStep } from "@/types/steps.types";

const AboutYou: FC<IStep> = ({ onNextStep, onPrevStep }) => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

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
    <div className="mt-10 px-5 md:mt-18">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center">
          <H2 className="max-w-87 text-center font-normal !leading-normal md:max-w-215 md:!leading-tight">
            Do You Know The Type Of Plan You Want To Sign Up For?
          </H2>
        </div>
        <div className="mt-11 flex w-full flex-wrap justify-center gap-x-2 gap-y-9 md:mt-19 md:gap-x-5 xl:flex-nowrap">
          {ABOUT_YOU_CARDS.map((item) => (
            <Fragment key={item.id}>
              <Card
                image={item.img}
                isActive={selectedCards.includes(item.id)}
                onClick={handleSelect(item.id)}
                label={item.label}
              />
            </Fragment>
          ))}
        </div>
        <ActionButtons onClickPrimaryButton={onNextStep} onClickSecondaryButton={onPrevStep} />
      </div>
    </div>
  );
};

export default AboutYou;
