
import Image from "next/image"
import { describe, mock } from "node:test"

export default function BookInfo(){

  const mockInfo={book:"A love Story",cata:"love story",author:"nick",donation:"nick",time:"2000-12-26",status:"avaliable",describe:'a boring love story'}


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
        <li>Book Name : {mockInfo.book}</li>
        <li>Author : {mockInfo.author}</li>
        <li>Donamtion time : {mockInfo.time}</li>
        <li>Donation from : {mockInfo.donation}</li>
        <li className="max-h-36 overflow-auto">Description : {mockInfo.describe}</li>
      </ul>
      {mockInfo.status !== 'avaliable' && (
        <button className="absolute bottom-10 left-10 bg-gray-100 py-2 px-4 rounded-lg border-solid border-2 border-white shadow-md shadow-orange-800 hover:scale-110">
          Unavailable: borrowed by {mockInfo.status}
        </button>
      )}
      {mockInfo.status === 'avaliable' && (
        <button className="absolute bottom-10 right-10 bg-yellow-200 py-2 px-4 rounded-lg border-solid border-2 border-white shadow-md shadow-orange-600 hover:scale-110">
          BORROW !
        </button>
      )}
    </div>
  </div>
</>)}