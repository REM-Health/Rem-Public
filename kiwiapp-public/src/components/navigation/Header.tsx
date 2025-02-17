import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import RemLogo from "public/assets/icons/rem-logo.png";
import PhoneIcon from "public/assets/icons/phone-icon.svg";
import { ROUTES } from "@/constants/routes.constants";

export const Header = () => (
  <nav className="relative w-full border-b border-neutral-100 pb-7 pt-15 md:border-none md:pt-7">
    <Container>
      <div className="flex items-center justify-between rounded-full bg-white px-5">
        <div>
          <Link href={ROUTES.home}>
            <Image src={RemLogo} alt="RemLogo" className="h-7 w-auto cursor-pointer md:h-12 md:w-37" />
          </Link>
        </div>
        <div className="flex">
          <div className="hidden gap-8 pl-4 text-xl font-medium lg:flex" />
        </div>
        <div className="flex items-center justify-center gap-x-2 md:gap-x-5">
          <Button
            type="outline"
            className="h-10 rounded-full border border-solid border-neutral-100 px-5 py-2 align-middle md:h-15 md:px-7 md:py-5"
          >
            <Image src={PhoneIcon} alt="Phone" className="mr-2" />
            <span className="font-sans text-base leading-tight">(623) 223-8884</span>
          </Button>
          <Button
            type="fill"
            className="max-10:text-sm h-10 rounded-full px-5 py-2 align-middle text-base md:h-15 md:px-7 md:py-5"
          >
            Sign In
          </Button>
        </div>
      </div>
    </Container>
  </nav>
);
