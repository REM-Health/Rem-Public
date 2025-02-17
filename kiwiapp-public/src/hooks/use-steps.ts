import { useCallback, useState, useEffect } from "react";
import { STEPS } from "@/constants/steps-line.constants";
import { useRouter, useSearchParams } from "next/navigation";
import type { Step } from "@/types/steps.types";

export const useSteps = (steps: Step[], queryKey: string) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tab = searchParams.get(queryKey);

  const [activeStep, setActiveStep] = useState<number>(1);

  useEffect(() => {
    if (tab) {
      const currentStepIndex = steps.findIndex((step) => step.query === tab);
      setActiveStep(currentStepIndex !== -1 ? currentStepIndex + 1 : 1);
    }
  }, [steps, tab]);

  const onNextStep = useCallback(() => {
    if (activeStep < STEPS.length) {
      router.push(`?${queryKey}=${STEPS[activeStep].query}`);
    }
  }, [activeStep, queryKey, router]);

  const onPrevStep = useCallback(() => {
    if (activeStep > 1) {
      router.push(`?${queryKey}=${STEPS[activeStep - 2].query}`);
    }
  }, [activeStep, queryKey, router]);

  return { activeStep, onNextStep, onPrevStep };
};
