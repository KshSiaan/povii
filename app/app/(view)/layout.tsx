import AppHeader from "@/components/core/app-header";
import { Suspense } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense>
        <AppHeader />
      </Suspense>
      {children}
    </>
  );
}
