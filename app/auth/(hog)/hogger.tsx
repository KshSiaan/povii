"use client";

import { usePathname } from "next/navigation";

export default function HoggerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageKey = usePathname();
  return (
    <div key={pageKey} className="animate-fade-in">
      {children}
    </div>
  );
}
