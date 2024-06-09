"use client"
import { useState } from "react";
import clsx from "clsx";

export default function AboutMe() {

  const [launch,setLaunch] = useState(0)
  function launchFun() {
    setLaunch(1)
  }

  return (
    // just the outest container, I want to play safe
    <div className="w-full h-full">
      {/* the outer container for the context, where overflow- hidden is applied */}
      <div className="hidden lg:block w-[64rem] h-[36rem] mx-auto my-auto relative flex-col overflow-hidden">
        {/* because the spaceship doesn't move so I put it here */}
        <div className="bg-purple-200 hidden lg:flex flex-col w-[8rem] h-[8rem] absolute top-5 left-[7rem] rounded-full justify-center z-10 cursor-pointer" onClick={launchFun}>
          <div className="text-center">
            launch
          </div>
        </div>
        <div className="bg-purple-200 hidden lg:block w-[15rem] h-[20rem] absolute bottom-14 left-14 z-10">

        </div>
        {/* where  double the height will be and where the tansform happens*/}
        <div className={clsx(" hidden lg:block w-full h-[72rem] absolute bottom-0 transition-all duration-[3000ms]",{
          "translate-y-[50%]":launch==1,
        })}>
          {/* because I want a movement of this element and I needs children relative to father, So an extra element is needed */}
          <div className=" bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hidden lg:block w-full h-[72rem] relative bottom-0">
            {/* words for my motivation learn front end */}
            <div className="bg-purple-200 hidden lg:block w-[32rem] h-[24rem] absolute top-24 right-14 z-10">

            </div>
            {/* words for my experience in aerospace */}
            <div className="bg-purple-200 hidden lg:block w-[32rem] h-[24rem] absolute bottom-24 right-14 z-10">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
