'use client'

import Image from "next/image";
import {IconArray} from "@/app/ui/icons"
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

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
      <span className={clsx("material-symbols-outlined absolute top-[55%] left-0 -translate-x-[100%] text-4xl md:text-5xl cursor-pointer z-10 text-orange-500 transition-all duration-300",{
        "hidden":project==0,
      })} onClick={left}>arrow_circle_left</span>
      <span className={clsx("material-symbols-outlined absolute top-[55%] right-0 translate-x-[100%] text-4xl md:text-5xl cursor-pointer z-10 text-orange-500 transition-all duration-300",{
        "hidden":project==2,
      })} onClick={right}>arrow_circle_right</span>

      {/* the largest container, where the overflow hidden will be assigned */}
      <div className="flex-1 w-full overflow-hidden">

        {/* the moving part, which is 300% width of its father element */}
        <div  className={clsx("w-[300%] h-full flex transition-all duration-500",{
          "-translate-x-1/3":project==1,
          "-translate-x-2/3":project==2
        })}>
          {/* three repeating parts */}
            {/* first project */}
            <Link className="w-1/3 h-full flex cursor-pointer" href="/bookSystem" target="_blank">
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-5">
                <Image src={"/pics/bookSystem_project.png"} alt="project pic" sizes="auto" width={2} height={1} className="w-full rounded-lg"/>
                {/* concise description for small screen */}
                <div className="block lg:hidden">
                  Current project: a Full stack projects. Click to access to the build in book borrow system.
              </div>
              </div>
              {/* long description for large screen */}
              <div className="w-0 lg:w-1/2 hidden p-10 text-left lg:flex lg:flex-col leading-loose font-semibold italic overflow-y-visible overflow-auto">
                <div>
                The project you&apos;re viewing now is Nick&apos;s third project and his first full-stack project.<br/>
                It&apos;s the first time he&apos;s used TypeScript instead of JavaScript, although he learned TS before building his second project.<br/><br/>
                The entire project is built using Next.js and deployed on Vercel. All basic CSS is implemented with Tailwind.<br/><br/>
                A book borrowing system based on PostgreSQL is integrated as a demonstration of back-end skills----click to access it.<br/><br/>
                (All three of Nick&apos;s projects were designed and built entirely by himself without using any templates. He also created other projects as practice while learning. However, he believes projects made by following instructions aren&apos;t a sincere representation of his skill, even they might look better.)<br/>
                </div>              
              </div>
            </Link>
            {/* second project*/}
            <Link className="w-1/3 h-full flex  cursor-pointer" href="https://main--nick-in-sea.netlify.app/" target="_blank">
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-5">
                <Image src={"/pics/vue_project.png"} alt="project pic" sizes="auto" width={2} height={1} className="w-full rounded-lg"/>
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
            </Link>
            {/* third project*/}
            <Link className="w-1/3 h-full flex  cursor-pointer" href="https://know-nick.netlify.app/" target="_blank">
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-5">
                <Image src={"/pics/react_project.png"} alt="project pic" sizes="auto" width={2} height={1} className="w-full rounded-lg"/>
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
                (BTW Nick has learnt a lot more things after this project was finished, while the notes page in this project is no longer updated.)
                </div>              
              </div>
            </Link>

        </div>

      </div>

    </div>
    </>);
}
