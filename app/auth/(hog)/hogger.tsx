"use client";
export default function HoggerProvider({
  children,
  pageKey,
}: {
  children: React.ReactNode;
  pageKey: string | number;
}) {
  return (
    <div key={pageKey} className="animate-fade-in">
      {children}
    </div>
  );
}
