"use client"

import BookList from "@/app/ui/bookList"
import BookInfo from "@/app/ui/bookInfo"
import BookComments from "@/app/ui/bookComents"
import { fetchBooks,fetchComments } from "@/app/lib/data"
import { useEffect,useState } from "react"
import { Book } from "@/app/lib/definitions"

export default function BookStore() {

  const [page,setPge] = useState(0)
  const [order,setOrder] = useState<'thumbs'|'time'>('thumbs')
  const [books,setBooks] = useState<Book[]>([])

  useEffect(()=> {
    const fetchDatabooks = async ()=>{
      const fetchedBooks = await fetchBooks(page, order);
      setBooks(fetchedBooks);
    }
    fetchDatabooks()
  },[page,order])

  useEffect(() => {
  console.log(books);
}, [books]);

  return (<>
    {/* screen size container */}
    <div className="w-screen h-screen  flex flex-col justify-center">


      {/* below is for large screen */}
      {/* the main rectangular part */}
      <div className=" hidden justify-center space-x-5 lg:flex">
        
        {/* list part */}
        <div className="lg:w-[20rem] xl:w-[30rem] h-[45rem]">
          <BookList></BookList>
        </div>
        
        {/* book part */}
        <div className="lg:w-[40rem] xl:w-[60rem] h-[45rem] space-y-5">

          {/* book information */}
          <div className="w-full h-3/5">
            <BookInfo></BookInfo>
          </div>
          {/* book comments */}
          <div className="w-full h-[calc(40%-1.25rem)]">
            <BookComments></BookComments>
          </div>

        </div>

      </div>
    </div>
  </>)
}