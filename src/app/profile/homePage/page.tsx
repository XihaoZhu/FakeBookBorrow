import Image from "next/image";
import Typing from "@/app/ui/typing";

export default function HomePage() {
  return (<>

    {/* for large and above screen */}
    <div className="w-full h-full hidden lg:flex flex-row px-[10vw]">
      {/* the text part */}
      <div className="flex-1 flex flex-col justify-center text-center">
        {/* the title part */}
        <div>
          {/* fixed part */}
          <div className="text-7xl">Hello, I&apos;m</div>
          {/* moving part */}
          <div className="text-7xl">
          {/* <Typing string1="Nick" string2="Xihao Zhu"/> */}
          <div>Xihao Zhu|</div>
          </div>
        </div>
        {/* description */}
        <div>Here will be a short description</div>
        {/* link to download cv */}
        <div>here will be a botton to download my cv</div>
      </div>
      {/* my big head */}
      <Image src="/pics/nickPolkaDot.png" width={0} height={0} sizes="25vw" className="w-96 h-96 rounded-full flex-none my-auto" alt="my big head"/>
    </div>
    </>);
}
