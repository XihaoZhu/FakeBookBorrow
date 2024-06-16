"use client"

import BookList from "@/app/ui/bookList"
import BookInfo from "@/app/ui/bookInfo"
import BookComments from "@/app/ui/bookComents"
import { fetchBooks,fetchComments } from "@/app/lib/data"
import { use, useEffect,useState } from "react"
import { Book } from "@/app/lib/definitions"
import { QueryResultRow } from "@vercel/postgres"

export default function BookStore() {

  const [page,setPage] = useState(1)
  const [books,setBooks] = useState<QueryResultRow>([])
  const [chooseCata,setChooseCata]=useState('all')
  const [chooseOrder,setChooseOrder]=useState<'time'|'thumbs'>('thumbs')
  const [bookId,setBookId]=useState(1)
  const [bookInfo,setBookInfo]=useState({})
  const [comments,setComments]=useState({})

  useEffect(()=> {
    const fetchDatabooks = async ()=>{
      const fetchedBooks = await fetchBooks(page,chooseOrder,chooseCata);
      setBooks(fetchedBooks);
    }
    fetchDatabooks()
  },[page,chooseOrder,chooseCata])

  useEffect(()=>{
    setBookInfo(books.filter((item:any)=>item.id==bookId)[0])
  },[books,bookId])

  useEffect(()=>{
    if (books && books[0]){
      setBookId(books[0].id)
    }
  },[books])

  useEffect(()=>{
    const fetchDataComment = async()=>{
      if (bookId){
        const fetchedComment = await fetchComments(bookId)
        setComments(fetchedComment)
      }
    }
    fetchDataComment()
  },[bookId])


  return (<>
    {/* screen size container */}
    <div className="w-screen h-screen  flex flex-col justify-center">


      {/* below is for large screen */}
      {/* the main rectangular part */}
      <div className=" hidden justify-center space-x-5 lg:flex">
        
        {/* list part */}
        <div className="lg:w-[20rem] xl:w-[30rem] h-[45rem]">
          <BookList bookList={books}  setChooseCata={setChooseCata} chooseCata={chooseCata} setBookId={setBookId} bookId={bookId} setChooseOrder={setChooseOrder} chooseOrder={chooseOrder} setPge={setPage}></BookList>
        </div>
        
        {/* book part */}
        <div className="lg:w-[40rem] xl:w-[60rem] h-[45rem] space-y-5">

          {/* book information */}
          <div className="w-full h-3/5">
            <BookInfo bookInfo={bookInfo}></BookInfo>
          </div>
          {/* book comments */}
          <div className="w-full h-[calc(40%-1.25rem)]">
            <BookComments comments={comments}></BookComments>
          </div>

        </div>

      </div>
    </div>
  </>)
}