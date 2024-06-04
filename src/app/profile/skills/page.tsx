'use client'

import Image from "next/image";
import {IconArray} from "@/app/ui/icons"
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Skills() {
  const shows=[['Git','Html','Nodejs','TS','CSS','Tailwind','PostgreSQL'],
  ['JS','Blender','Git','Html','Vue','CSS'],
  ['JS','React','Git','Html','PS','CSS']]
  const [show,setShow]=useState(shows[0])
  const [project,setProject]=useState(0)


  function left(){
    if (project!=0){
      setProject(project-1)
      setShow(shows[project-1])
    }
  }

  function right(){
    if (project!=2){
      setProject(project+1)
      setShow(shows[project+1])
    }
  }


  return (<>
    <div className="w-screen-80  mx-auto h-full flex justify-center flex-wrap flex-col relative">
      <div className="h-fit">
        <IconArray show={show}/>
      </div>

      {/* the two arrows */}
      <span className="material-symbols-outlined absolute top-[55%] left-0 -translate-x-[100%] text-4xl md:text-5xl cursor-pointer z-10 text-orange-500" onClick={left}>arrow_circle_left</span>
      <span className="material-symbols-outlined absolute top-[55%] right-0 translate-x-[100%] text-4xl md:text-5xl cursor-pointer z-10 text-orange-500" onClick={right}>arrow_circle_right</span>

      {/* the largest container, where the overflow hidden will be assigned */}
      <div className="flex-1 w-full overflow-hidden overflow-y-visible">

        {/* the moving part, which is 300% width of its father element */}
        <div  className={clsx("w-[300%] h-full flex transition-all duration-500",{
          "-translate-x-1/3":project==1,
          "-translate-x-2/3":project==2
        })}>
          {/* three repeating parts */}
            {/* first project */}
            <div className="w-1/3 h-full flex cursor-pointer">
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-5">
                <Image src={"/pics/react_project.png"} alt="project pic" sizes="auto" width={0} height={0} className="w-full rounded-lg"/>
                {/* concise description for small screen */}
                <div className="block lg:hidden">
                  Current project: a Full stack projects. Click to access to the build in book borrow system.
                </div>
              </div>
              {/* long description for large screen */}
              <div className="w-0 lg:w-1/2 hidden p-10 text-left lg:flex lg:flex-col lg:justify-center leading-loose font-semibold italic">
                <div>
                  The project you&apos;re viewing now is Nick&apos;s third project and also the first full stack project. <br />
                  It&apos;s the first time he uses typescript instead of Javascript in a project, although he learnt TS before he built his second project. 
                  <br /><br />
                  The whole project is built in structure Next.Js and deployed on Vercel. All basic CSS is implemented with Tailwind. Nick also made this project mobile adapted, feel free to visit this website on your mobile devices. <br /><br />
                  A book borrow system based on PostgreSQL is integred as a token for back-end skill, click to get accesee. <br />
                  <br />
                  (All three Nick&apos;s projects are designed and made on his own, no any templates were used.
                  He also made something during learning as practice. But he thinks projects made following instructions are not sincere to show the skills, even   they for sure can look better.)
                </div>              
              </div>
            </div>
            {/* second project*/}
            <div className="w-1/3 h-full flex  cursor-pointer">
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-5">
                <Image src={"/pics/vue_project.png"} alt="project pic" sizes="auto" width={0} height={0} className="w-full rounded-lg"/>
                {/* concise description for small screen */}
                <div className="block lg:hidden">
                  Previous project: Nick in sea (click to view)
                </div>
              </div>
              {/* long description for large screen */}
              <div className="w-0 lg:w-1/2 hidden p-10 text-left lg:flex lg:flex-col lg:justify-center leading-loose font-semibold italic">
                <div>
                Nick&apos;s second personal project, a simple webpage for self-introduction and showcasing skills. <br /><br />
                This project was built with Vue3.Js <br /><br />
                Nick used blender to made the endless animation. 
                </div>              
              </div>
            </div>
            {/* third project*/}
            <div className="w-1/3 h-full flex  cursor-pointer">
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-5">
                <Image src={"/pics/react_project.png"} alt="project pic" sizes="auto" width={0} height={0} className="w-full rounded-lg"/>
                {/* concise description for small screen */}
                <div className="block lg:hidden">
                  Previous project: Introduce to Nick (click to view)
                </div>
              </div>
              {/* long description for large screen */}
              <div className="w-0 lg:w-1/2 hidden p-10 text-left lg:flex lg:flex-col lg:justify-center leading-loose font-semibold italic">
                <div>
                Nick&apos;s first personal project, quite simple and the design may not so good. <br /><br />
                He likes it, feeling it&apos;s a milestone. <br /><br />
                This project was made with react.Js. <br /><br />
                (BTW Nick has learnt a lot more things after this project was finished, while the notes page in this project is not updated.)
                </div>              
              </div>
            </div>

        </div>

      </div>

    </div>
    </>);
}
