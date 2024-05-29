import { Metadata } from "next";
import HeadNav from "@/app/ui/headNav";

export const metadata: Metadata = {
  title: 'homePage',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen bg-color4">
      <HeadNav/>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}