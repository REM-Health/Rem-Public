import { Suspense } from "react";
import { DefaultLayout } from "@/components/common/Layout";
import Spinner from "@/components/common/Spinner";
import "@/styles/globals.css";

export const metadata = {
  title: "Rem",
  description: "AI-powered insurance solutions.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DefaultLayout>
      <Suspense fallback={<Spinner />}>
        <div>{children}</div>
      </Suspense>
    </DefaultLayout>
  );
}
