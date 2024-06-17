"use client"

import Image from "next/image"
import { Book } from "../lib/definitions"
import { use, useEffect, useState } from "react"
import { format } from 'date-fns'
import { borrowBook,returnBook } from "../lib/data"
import { books } from "../lib/placeholder-data"

export default function BookInfo({bookInfo, bookId, userName, setBooks, borrow,returnB}:any){

  const isBookInfoValid = bookInfo && bookInfo.name && bookInfo.author && bookInfo.time;

  if (!isBookInfoValid) {
    return <div>Loading...</div>;
  }

  return (<>
  {/* outest container */}
  <div className="w-full h-full flex">
    {/* fake cover */}
    <div className="bg-orange-100/75 w-1/2 h-full border-solid border-4 border-indigo-800/75 rounded-md flex flex-col justify-center relative">
    <Image src='/nick_draw_book.svg' alt="book outline" width={0} height={0} className="w-full h-full object-fill absolute top-0 left-0 opacity-10 hidden lg:block pointer-events-none"></Image>
      <div className="p-10">
        Can we pretend I have a cover for each book?
        As I already don&apos;t have different covers, I&apos;ll just leave this part static.
      </div>
    </div>
    {/* book info */}
    <div className="w-1/2 h-full p-2 relative">
      <ul className="bg-blue-200/50 w-full h-full rounded-xl flex flex-col space-y-5 px-5 py-10">
        <li>Book Name : {bookInfo.name}</li>
        <li>Author : {bookInfo.author}</li>
        <li>Published: {bookInfo?format(bookInfo.time, 'yyyy-MM-dd'):''}</li>
        <li className="max-h-36 overflow-auto">Description : {bookInfo.description}</li>
      </ul>
      {bookInfo.status !== 0 && bookInfo.borrowed !== userName && (
        <button className="absolute bottom-10 left-10 bg-gray-100 py-2 px-4 rounded-lg border-solid border-2 border-white shadow-md">
          Unavailable: borrowed by {bookInfo.borrowed}
        </button>
      )}
      {bookInfo.status !== 0 && bookInfo.borrowed == userName && (
        <button className="absolute bottom-10 left-10 bg-gray-100 py-2 px-4 rounded-lg border-solid border-2 border-white shadow-md shadow-orange-800 hover:scale-110" onClick={()=>returnB()}>
          Return book
        </button>
      )}
      {bookInfo.status === 0 && (
        <button className="absolute bottom-10 right-10 bg-yellow-200 py-2 px-4 rounded-lg border-solid border-2 border-white shadow-md shadow-orange-600 hover:scale-110" onClick={()=>borrow()}>
          BORROW !
        </button>
      )}
    </div>
  </div>
</>)}