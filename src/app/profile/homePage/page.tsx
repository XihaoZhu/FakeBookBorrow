import Image from "next/image";

export default function HomePage() {
  return (<>

    {/* for large and above screen */}
    <div className="w-full h-full hidden lg:flex flex-row px-[10vw]">
      {/* the text part */}
      <div className="flex-1">
        <div>Hello I&apos;m Nick</div>
        <div>Here will be a short description</div>
        <div>here will be a botton to download my cv</div>
      </div>
      {/* my big head */}
      <Image src="/pics/nickPolkaDot.png" width={0} height={0} sizes="25vw" className="w-96 h-96 rounded-full flex-none my-auto" alt="my big head"/>
    </div>
    </>);
}
