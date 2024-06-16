'use client'

import { useEffect, useState } from "react"
import { format } from "date-fns"

export default function BookComments({comments}:any){

  const mockComment=[{book:'bookname',person:'Nickcommenter',content:'I like this book',time:"2012-04-45"},{book:'bookname',person:'Nickcommenter',content:'I like this book too',time:"2012-04-45"}]

  const [which,setWhich]=useState(0)


  function switchComment(param:number):void {
    if ((which + param < comments.length)&&(which + param >= 0)){
      setWhich(which+param)
    }
  }

  useEffect(()=>{
    setWhich(0)
  },[comments])

  const isCommentsValid = comments && comments.length

  if (!isCommentsValid) {
    return <div className="bg-[#bdf0ffb3] w-full h-full rounded-xl py-5 px-5 space-y-10 relative">No Comments have been left for this book yet</div>
  }

  return (<>
  {/* outest container */}
  <div className="bg-[#bdf0ffb3] w-full h-full rounded-xl py-5 px-5 space-y-10 relative">
    {/* who and when */}
    <div> <b>{comments[which].account}</b> commented on <b>{format(comments[which].time,'yyyy-MM-dd')}</b></div>
    <div className="max-h-2/3 overflow-auto">{comments[which].content}</div>
    <div>
    <span className="material-symbols-outlined absolute bottom-5 left-5 cursor-pointer" onClick={()=>switchComment(-1)}>arrow_back</span>
    <span className="absolute bottom-5 left-[45%]">{which+1}/{comments.length}</span>
    <span className="material-symbols-outlined absolute bottom-5 right-5 cursor-pointer" onClick={()=>switchComment(1)}>arrow_forward</span>
    </div>
  </div>
</>)}