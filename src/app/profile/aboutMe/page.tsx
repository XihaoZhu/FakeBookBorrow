"use client"


import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

export default function AboutMe() {

  const [launch,setLaunch] = useState(0)
  function launchFun() {
    setLaunch(1)
  }

  return (
    // just the outest container, I want to play safe
    <div className="w-full h-full">
      {/* the outer container for the context, where overflow- hidden is applied */}
      <div className="hidden lg:block w-[64rem] h-[36rem] mx-auto my-auto relative flex-col overflow-hidden rounded-3xl">
        {/* because the spaceship doesn't move so I put it here */}
        <div className={clsx("bg-green-400 hidden lg:flex flex-col w-[8rem] h-[2rem] absolute top-24 left-[7rem] rounded-full justify-center z-10 cursor-pointer hover:scale-125 transition-all duration-500",{
          "lg:hidden":launch==1,
        })} onClick={launchFun}>
          <div className="text-center text-green-100">
            launch
          </div>
        </div>
        <div className={clsx("hidden lg:block w-[15rem] absolute bottom-14 left-14 z-10 transition-all duration-1000",{
          "h-[15rem]":launch==0,
          "h-[20rem]":launch==1,
        })}>
        <Image src="/pics/aerospace.png" width={0} height={0} sizes="auto" className="w-full h-full object-cover object-top" alt="my spaceship"/>
        </div>
        {/* where  double the height will be and where the tansform happens*/}
        <div className={clsx(" hidden lg:block w-full h-[72rem] absolute bottom-0 transition-all duration-[3000ms] delay-1000",{
          "translate-y-[50%]":launch==1,
        })}>
          {/* because I want a movement of this element and I needs children relative to father, So an extra element is needed */}
          <div className=" bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hidden lg:block w-full h-[72rem] relative bottom-0">
            {/* words for my motivation learn front end */}
            <div className="hidden lg:block w-[40rem] h-[24rem] absolute top-24 right-14 z-10 text-indigo-100">
            I always like things to be visible. From what I&apos;ve learned in my free time, you can tell—I enjoy working with tools like Photoshop and Blender.<br/>
            Meanwhile, I&apos;m also interested in logic. I really like the idea of everything operating with clear rules. And I like figuring out how things work after studying and thinking. That&apos;s why I thought I would enjoy aerospace engineering.<br/>
            I still remember the moment when I created a simple animation in MATLAB (a tree with snow falling). It was an additional task in an undergraduate coursework. I felt satisfied and happy when achieving it, making something vividly visible with logical codes.<br/>
            Front-end development seems to be a job perfectly meets both of my fantasies.<br/>
            I&apos;ve been working hard learning front-end development on my own. Each time I learn something new or finish a practice project, I feel more certain that I really like it as a job.<br/>
            I know it can be hard to enter an industry without a relevant background. I&apos;ve always believed that as long as you work hard, there will be gains.<br/>
            Even though I haven&apos;t had the chance to enter this industry yet, I will keep studying and improving my skills. I believe I will become a front-end developer and continue to get better in this field over time. As my favorite Chinese idiom says, &quot;事在人为.&quot;<br/>


            </div>
            {/* words for my experience in aerospace */}
            <div className="hidden lg:block w-[40rem] h-[24rem] absolute bottom-24 right-14 z-10  text-emerald-100">
            Hi, this is Nick!<br/>
            I obtained my bachelor&apos;s and master&apos;s degrees in aerospace engineering. I completed my undergraduate studies at the University of Nottingham, Ningbo, and then pursued a master&apos;s degree at the University of Manchester.<br/>
            Honestly, the courses and exams were not easy for me. Subjects such as &quot;Computational Fluid Dynamics,&quot; &quot;Composites and Polymers,&quot; and &quot;Structural Integrity&quot; gave me a headache just from their names.<br/>
            When I was about to finish my undergraduate studies, I hesitated about continuing in this field. I realized I wasn&apos;t as interested in aerospace engineering as             I had expected before starting university. However, I didn&apos;t want to waste my effort and time, so I convinced myself to stick with it. This led me to pursue a             master&apos;s degree in aerospace engineering.<br/>
            But it turned out, I couldn&apos;t lie to myself. Despite the knowledge I gained, even if I could find a position in this industry, I wouldn&apos;t be happy.<br/>
            And as they say, the best time to plant a tree was 20 years ago. The second best time is now.<br/>
            I need to launch my own aerospace journey.
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden p-20">
        Nick has too much to say here. Please switch to your computer to endure his rambling :P
      </div>
    </div>
  );
}
