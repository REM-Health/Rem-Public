"use client";
import { useSteps } from "@/hooks/use-steps";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import StepLine from "@/components/common/StepLine";
import ExtrasStep from "@/components/steps/Extras";
import MyDrugsStep from "@/components/steps/MyDrugs";
import PlanTypeStep from "@/components/steps/PlanType";
import AboutYouStep from "@/components/steps/AboutYou";
import MyDoctorsStep from "@/components/steps/MyDoctors";
import UsageFrequencyStep from "@/components/steps/UsageFrequency";
import { Container } from "@/components/common/Container";
import { STEPS } from "@/constants/steps-line.constants";
import { ROUTES } from "@/constants/routes.constants";

const EnrollmentPage = () => {
  const { activeStep, onNextStep, onPrevStep } = useSteps(STEPS, "tab");
  const router = useRouter();

  const handleNavigateHome = useCallback(() => router.push(ROUTES.home), [router]);

  const renderCurrentStepContent = useCallback(() => {
    if (activeStep)
      switch (activeStep) {
        case 1:
          return <PlanTypeStep onNextStep={onNextStep} onPrevStep={handleNavigateHome} />;
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
  }, [activeStep, handleNavigateHome, onNextStep, onPrevStep]);

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
