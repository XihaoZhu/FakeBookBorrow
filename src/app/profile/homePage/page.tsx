import Image from "next/image";
import Typing from "@/app/ui/typing";
import ResumeButton from "@/app/ui/resumeButton";

export default function HomePage() {
  return (<>

    {/* for large and above screen */}
    <div className="w-full h-full hidden lg:flex flex-row xl:px-[15vw] px-[10vw]">
      {/* the text part */}
      <div className="flex-1 flex flex-col justify-center text-left">
        {/* the title part */}
        <div>
          {/* fixed part */}
          <div className="text-5xl font-semibold">Hello, I&apos;m</div>
          {/* moving part */}
          <div className="text-7xl xxl:text-9xl xl:text-8xl my-5 my_colorFlow">
          <Typing string1="Nick" string2="Xihao Zhu"/>
          </div>
        </div>
        {/* description */}
        <div className="text-cyan-900 text-xl italic mb-5">I am working hard to become a front-end/fullstack engineer.</div>
        {/* link to download cv */}
        <div>
          <ResumeButton/>
        </div>
      </div>
      {/* my big head */}
      <Image src="/pics/nickPolkaDot.png" width={0} height={0} sizes="24rem" className="w-96 h-96 rounded-full flex-none my-auto" alt="my big head"/>
    </div>


    {/* for mobile screen */}
    <div className="w-full h-full flex-col lg:hidden text-center">
    <Image src="/pics/nickPolkaDot.png" width={0} height={0} sizes="12rem" className="w-48 h-48 rounded-full flex-none mx-auto" alt="my big head"/>
    <div className="text-4xl font-semibold text-center my-10">Hello, <br />I&apos;m Nick</div>
    <div className="mx-auto">
    <ResumeButton/>
    </div>
    </div>
    </>);
}
