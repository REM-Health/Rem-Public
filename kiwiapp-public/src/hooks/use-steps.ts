import { useCallback, useState } from "react";

export const useSteps = (initialStep: number, maxStep: number) => {
  const [activeStep, setActiveStep] = useState<number>(initialStep);

  const onNextStep = useCallback(() => {
    if (activeStep < maxStep) setActiveStep(activeStep + 1);
  }, [activeStep, maxStep]);

  const onPrevStep = useCallback(() => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  }, [activeStep]);

  return { activeStep, onNextStep, onPrevStep };
};
