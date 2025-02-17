import Link from "next/link";
import Button from "@/components/common/Button";
import { ROUTES } from "@/constants/routes.constants";
import { StepQueries } from "@/constants/steps-line.constants";

const HomePage = () => (
  <div className="flex flex-col gap-10">
    <span>Home</span>
    <Button type="fill" className="w-fit">
      <Link href={`${ROUTES.enrollment}?tab=${StepQueries.PlanType}`}>Enrollment</Link>
    </Button>
  </div>
);

export default HomePage;
