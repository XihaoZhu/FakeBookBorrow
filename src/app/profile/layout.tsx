import { Metadata } from "next";
import HeadNav from "@/app/ui/headNav";
import clsx from "clsx";

export const metadata: Metadata = {
  title: 'homePage',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen">
      <HeadNav/>
      <div className="bg-color4/50 w-screen h-[calc(100%-12.5rem)] lg:h-[calc(100%-7rem)]">{children}</div>
    </div>
  );
}