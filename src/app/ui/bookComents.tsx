'use client'

import { useState } from "react"

export default function BookComments(){

  const mockComment=[{book:'bookname',person:'Nickcommenter',content:'I like this book',time:"2012-04-45"},{book:'bookname',person:'Nickcommenter',content:'I like this book too',time:"2012-04-45"}]

  const [which,setWhich]=useState(0)


  function switchComment(param:number):void {
    if ((which + param < mockComment.length)&&(which + param >= 0)){
      setWhich(which+param)
    }
  }

  return (<>
  {/* outest container */}
  <div className="bg-[#bdf0ffb3] w-full h-full rounded-xl py-5 px-5 space-y-10 relative">
    {/* who and when */}
    <div> <b>{mockComment[which].person}</b> commented on <b>{mockComment[0].time}</b></div>
    <div className="max-h-2/3 overflow-auto">{mockComment[which].content}</div>
    <div>
    <span className="material-symbols-outlined absolute bottom-5 left-5 cursor-pointer" onClick={()=>switchComment(-1)}>arrow_back</span>
    <span className="material-symbols-outlined absolute bottom-5 right-5 cursor-pointer" onClick={()=>switchComment(1)}>arrow_forward</span>
    </div>
  </div>
</>)}