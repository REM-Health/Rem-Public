import { Fragment, useState, useCallback, type FC } from "react";
import Card from "@/components/common/Card";
import ActionButtons from "@/components/common/ActionButtons";
import { H2 } from "@/components/common/Headers";
import { ABOUT_YOU_CARDS } from "@/constants/cards.constants";
import type { IStep } from "@/types/steps.types";

const AboutYouStep: FC<IStep> = ({ onPrevStep, onNextStep }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = useCallback(
    (index: number) => () => {
      setSelectedOption(index);
    },
    [],
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
          {ABOUT_YOU_CARDS.map((item, index) => (
            <Fragment key={item.id}>
              <Card
                image={item.img}
                isActive={selectedOption === index}
                onClick={handleSelectOption(index)}
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

export default AboutYouStep;
