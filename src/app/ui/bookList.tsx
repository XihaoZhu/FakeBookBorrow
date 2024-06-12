"use client"

import clsx from "clsx"
import { useState } from "react"

export default function BookList(){

  const mockList=[
    {book:"book1",author:"author1",recommend:20,time:'2022-12-12',number:1},
    {book:"book2",author:"author2",recommend:40,time:'2022-12-02',number:2},
    {book:"book3",author:"author3",recommend:10,time:'2022-12-12',number:3},
    {book:"book4",author:"author4",recommend:20,time:'2022-12-22',number:4},
    {book:"book5",author:"author5",recommend:20,time:'2022-12-12',number:5},
    {book:"book6",author:"author6",recommend:20,time:'2022-12-12',number:6},
  ]

  const mockCata=["Love story","History","Time travel","War","Acient"]

  const [chooseCata,setChooseCata]=useState('all')
  const [chooseOrder,setChooseOrder]=useState('hot')
  const [bookName,setBookName]=useState('book1')

  function clickBook(book:string):void{
    setBookName(book)
  }


  return (<>
  {/* biggest container in this ui */}
  <div className=" w-full h-full flex">
    {/* navi bar */}
    <div className=" w-1/2 h-full py-10 px-2 space-y-10 flex flex-col justify-start">
      
      <b>Order by:</b>
      <ul className="pl-10 space-y-5 cursor-pointer">
        <li className={clsx("px-2 text-center py-1 rounded-full",{
          "border-dashed border-2 border-indigo-400":chooseOrder=='hot',
        })} onClick={()=>setChooseOrder('hot')}>hot</li>
        <li className={clsx("px-2 text-center py-1 rounded-full",{
          "border-dashed border-2 border-indigo-400":chooseOrder=='time',
        })} onClick={()=>setChooseOrder('time')}>time</li>
      </ul>


      <b>Catagory:</b>
      <ul className="pl-10 space-y-5 cursor-pointer">
        <li className={clsx("px-2 text-center py-1 rounded-full",{
          "border-dashed border-2 border-indigo-400":chooseCata=='all',
        })} onClick={()=>setChooseCata('all')}>all</li>
        {mockCata.map((item,index)=><li className={clsx("px-2 text-center py-1 rounded-full",{
          "border-dashed border-2 border-indigo-400":chooseCata==item,
        })} key={index} onClick={()=>setChooseCata(item)}>{item}</li>)}
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
          {mockList.map((item)=><li key={item.number} className={clsx("flex flex-col p-4 rounded-2xl break-all cursor-pointer",{
            "bg-yellow-200/50 text-orange-600":bookName==item.book,
            " bg-blue-200/50":bookName!=item.book,
          })} onClick={()=>clickBook(item.book)}>
            <div>{item.book}<span className="float-right"><span className="material-symbols-outlined translate-y-1">thumb_up</span>:{item.recommend}</span> </div>
            <div>author:{item.author}</div>
            <div>time:{item.time}</div>
          </li>)}
        </ul>
        <div className="bg-blue-200/50 w-full absolute bottom-0">
          pagination, I have to leave it here until I finished the back end part
        </div>
    </div>
  </div>
</>)}