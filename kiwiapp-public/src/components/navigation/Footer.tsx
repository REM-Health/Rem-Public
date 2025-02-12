// import Image from "next/image";
// import Link from "next/link";
// import RemLogoWhite from "public/assets/images/rem-logo-white.png";
// import FacebookWhiteIcon from "public/assets/icons/facebook-white.svg";
// import LinkedInWhiteIcon from "public/assets/icons/linkedin-white.svg";
// import { Container } from "@/components/common/Container";

// export const Footer = () => {
//   const year = new Date().getFullYear();

//   return (
//     <footer
//       className="bg-evergreen-800 max-md:bg-gradient-to-b from-[rgba(14,232,152,0.3)] via-evergreen-800 to-evergreen-800 md:bg-footer-bg
//         bg-cover"
//     >
//       <Container>
//         <div
//           className="flex lg:flex-row flex-col pb-8 pt-16 lg:py-14 w-full justify-between border-b-[1px] border-white border-opacity-20
//             items-center"
//         >
//           <div className="flex justify-between items-center w-full">
//             <Link href="/">
//               <Image
//                 src={RemLogoWhite}
//                 alt="RemLogoWhite"
//                 className="w-auto h-[30px] md:h-[50px] cursor-pointer hover:opacity-70 transition-opacity"
//               />
//             </Link>
//             <div className="lg:flex gap-x-8 h-full hidden items-center">
//               <Link
//                 href="/"
//                 className="text-base leading-[1.25] font-medium text-white cursor-pointer hover:opacity-70"
//               >
//                 Resources
//               </Link>
//               <Link
//                 href="/"
//                 className="text-base leading-[1.25] font-medium text-white cursor-pointer hover:opacity-70"
//               >
//                 About REM
//               </Link>
//               <Link
//                 href="/"
//                 className="text-base leading-[1.25] font-medium text-white cursor-pointer hover:opacity-70"
//               >
//                 Español
//               </Link>
//             </div>
//             <div className="flex gap-x-5">
//               <Link
//                 href="/"
//                 className="flex items-center rounded-full cursor-pointer bg-white bg-opacity-10 w-16 h-16 justify-center hover:opacity-70"
//               >
//                 <Image src={FacebookWhiteIcon} alt="FacebookIcon" />
//               </Link>
//               <Link
//                 href="/"
//                 className="flex items-center rounded-full cursor-pointer bg-white bg-opacity-10 w-16 h-16 justify-center hover:opacity-70"
//               >
//                 <Image src={LinkedInWhiteIcon} alt="LinkedInIcon" />
//               </Link>
//             </div>
//           </div>
//           <div className="gap-x-8 pt-8 h-full w-full flex lg:hidden justify-center items-center">
//             <Link href="/" className="text-base leading-[1.25] font-medium text-white cursor-pointer hover:opacity-70">
//               Resources
//             </Link>
//             <Link href="/" className="text-base leading-[1.25] font-medium text-white cursor-pointer hover:opacity-70">
//               About REM
//             </Link>
//             <Link href="/" className="text-base leading-[1.25] font-medium text-white cursor-pointer hover:opacity-70">
//               Español
//             </Link>
//           </div>
//         </div>
//         <div className="flex flex-col gap-y-8 py-8 lg:py-12 border-b-[1px] border-white border-opacity-20">
//           <p className="font-medium text-white">
//             Benefits, Premiums, And Coverage Vary Based On Medicare Eligibility, Location, And Individual Circumstances.
//             REM Health, Inc. Is A Licensed Health Insurance Agency, And The Purpose Of This Website Is To Provide
//             Information About Medicare And To Facilitate The Solicitation Of Insurance.
//           </p>
//           <p className="font-medium text-white">
//             REM Health, Inc. Offers Medicare Advantage (HMO, PPO, And PFFS), Prescription Drug Plans (PDPs), And
//             Medicare Supplement (Medigap) Plans Through Contracts With Medicare-Approved Insurance Carriers.
//             Availability Of Plans And Benefits Depends On Your Location And The Carrier’s Medicare Contract Renewal.
//           </p>
//           <p className="font-medium text-white">
//             Please Note: REM Health, Inc. Does Not Offer Every Plan Available In Your Area. The Information Provided Is
//             Limited To The Plans We Offer In Your Area. For A Complete List Of All Available Plans In Your Area, Contact
//             Medicare At 1-800-MEDICARE (TTY Users: 1-877-486-2048) Or Visit Medicare.Gov. You Can Also Contact Your
//             Local State Health Insurance Assistance Program (SHIP) For Unbiased Assistance.
//           </p>
//           <p className="font-medium text-white">
//             This Website And Its Content Are For Informational And Educational Purposes Only And Do Not Substitute
//             Official Resources Or Advice From Medicare Or SHIP. Medicare Supplement Insurance Plans Are Not Connected
//             With Or Endorsed By The U.S. Government Or The Federal Medicare Program.
//           </p>
//           <p className="font-medium text-white">
//             Contact Disclaimer: By Contacting REM Health, Inc., You Agree That A Licensed Insurance Agent May Contact
//             You Via Phone, Email, Or Other Methods.
//           </p>
//           <p className="font-medium text-white">
//             Complaints Or Grievances: If You Have A Complaint About An Agent Or Broker, You Can File A Grievance
//             Directly With Medicare By Calling 1-800-MEDICARE (TTY Users: 1-877-486-2048), Available 24 Hours A Day, 7
//             Days A Week.
//           </p>
//         </div>
//         <div className="flex w-full justify-center py-8">
//           <p className="font-medium leading-[20px] lg:leading-[30px] text-center text-white opacity-60">
//             All Contents ©Copyright Connie Health {year}. All Rights Reserved.
//           </p>
//         </div>
//       </Container>
//     </footer>
//   );
// };
