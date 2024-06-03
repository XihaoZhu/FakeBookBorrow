import { Metadata } from "next";
import HeadNav from "@/app/ui/headNav";
import clsx from "clsx";

export const metadata: Metadata = {
  title: 'homePage',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh">
      <HeadNav/>
      <div className="w-screen h-[calc(100%-12.5rem)] lg:h-[calc(100%-7rem)] py-10">{children}</div>
    </div>
  );
}