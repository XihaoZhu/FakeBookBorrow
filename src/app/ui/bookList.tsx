"use client"

import { format } from 'date-fns'
import { QueryResultRow } from "@vercel/postgres"
import clsx from "clsx"
import { useEffect, useState } from "react"

export default function BookList({bookList,setChooseCata,chooseCata,bookId,setBookId,chooseOrder,setChooseOrder,setPage,page,maxPage}:any){

  const Cata=["Love story","History","Time travel","War","Ancient"]


  function clickBook(bookId:number):void{
    setBookId(bookId)
  }

  function switchPage (num:number) {
    if ((page+ num <= maxPage)&&(page + num > 0)){
      setPage(page+num)
    }
  }


  return (<>
  {/* biggest container in this ui */}
  <div className=" w-full h-full flex">
    {/* navi bar */}
    <div className=" w-1/2 h-full py-10 px-2 space-y-10 flex flex-col justify-start">
      
      <b>Order by:</b>
      <ul className="pl-10 space-y-5 cursor-pointer">
        <li className={clsx("px-2 text-center py-1 rounded-full",{
          "border-dashed border-2 border-indigo-400":chooseOrder=='thumbs',
        })} onClick={()=>setChooseOrder('thumbs')}>hot</li>
        <li className={clsx("px-2 text-center py-1 rounded-full",{
          "border-dashed border-2 border-indigo-400":chooseOrder=='time',
        })} onClick={()=>setChooseOrder('time')}>time</li>
      </ul>


      <b>Catagory:</b>
      <ul className="pl-10 space-y-5 cursor-pointer">
        <li className={clsx("px-2 text-center py-1 rounded-full",{
          "border-dashed border-2 border-indigo-400":chooseCata=='all',
        })} onClick={()=>setChooseCata('all')}>all</li>
        {Cata.map((item,index)=><li className={clsx("px-2 text-center py-1 rounded-full",{
          "border-dashed border-2 border-indigo-400":chooseCata==item,
        })} key={index} onClick={()=>setChooseCata(item)}>{item}</li>)}
        <li className={clsx("px-2 text-center py-1 rounded-full",{
          "border-dashed border-2 border-indigo-400":chooseCata=='borrowed',
        })} onClick={()=>setChooseCata('borrowed')}>Borrowed by You</li>
      </ul>
    </div>
    {/* list */}
    <div className="w-1/2 h-full relative">
        <ul className="space-y-2">
          {/* <li className={clsx("flex flex-col p-4 rounded-2xl",{
            "bg-yellow-200/50 text-orange-600":bookName=="book1",
            " bg-blue-200/50":bookName!="book1",
          })}>
            <div>book name <span className="float-right"><span className="material-symbols-outlined translate-y-1">thumb_up</span>:12</span> </div>
            <div>author:nick</div>
            <div>time:2021-12-45</div>
          </li> */}
          {bookList.map((item:QueryResultRow)=><li key={item.id} className={clsx("flex flex-col p-4 rounded-2xl break-all cursor-pointer",{
            "bg-yellow-200/50 text-orange-600":bookId==item.id,
            " bg-blue-200/50":bookId!=item.id,
          })} onClick={()=>clickBook(item.id)}>
            <div>{item.name}<span className="float-right"><span className="material-symbols-outlined translate-y-1">thumb_up</span>:{item.thumbs}</span> </div>
            <div>author:{item.author}</div>
            <div>time:{format(item.time, 'yyyy-MM-dd')}</div>
          </li>)}
        </ul>
        <div className="bg-blue-200/50 w-full absolute bottom-0">
          <span className="material-symbols-outlined absolute bottom-5 left-5 cursor-pointer" onClick={()=>switchPage(-1)}>arrow_back</span>
          <span className="absolute bottom-5 left-[45%]">{page}/{maxPage}</span>
          <span className="material-symbols-outlined absolute bottom-5 right-5 cursor-pointer" onClick={()=>switchPage(1)}>arrow_forward</span>
        </div>
    </div>
  </div>
</>)}