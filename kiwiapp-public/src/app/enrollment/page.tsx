"use client";
import { useSteps } from "@/hooks/use-steps";
import { useCallback } from "react";
import StepLine from "@/components/common/StepLine";
import ExtrasStep from "@/components/steps/Step5";
import MyDrugsStep from "@/components/steps/Step3";
import PlanTypeStep from "@/components/steps/Step1";
import AboutYouStep from "@/components/steps/Step2";
import MyDoctorsStep from "@/components/steps/Step4";
import UsageFrequencyStep from "@/components/steps/Step6";
import { Container } from "@/components/common/Container";

const EnrollmentPage = () => {
  const { activeStep, onPrevStep, onNextStep } = useSteps(1, 6);

  const renderCurrentStepContent = useCallback(() => {
    if (activeStep)
      switch (activeStep) {
        case 1:
          return <PlanTypeStep onNextStep={onNextStep} onPrevStep={onPrevStep} />;
        case 2:
          return <AboutYouStep onNextStep={onNextStep} onPrevStep={onPrevStep} />;
        case 3:
          return <MyDrugsStep onNextStep={onNextStep} onPrevStep={onPrevStep} />;
        case 4:
          return <MyDoctorsStep onNextStep={onNextStep} onPrevStep={onPrevStep} />;
        case 5:
          return <ExtrasStep onNextStep={onNextStep} onPrevStep={onPrevStep} />;
        case 6:
          return <UsageFrequencyStep onNextStep={onNextStep} onPrevStep={onPrevStep} />;
        default:
          break;
      }
  }, [activeStep, onNextStep, onPrevStep]);

  return (
    <Container>
      <div>
        <div>
          <StepLine activeStep={activeStep} />
        </div>
        <div className="mb-15 mt-15 flex justify-center">{renderCurrentStepContent()}</div>
      </div>
    </Container>
  );
};

export default EnrollmentPage;
