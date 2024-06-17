"use client"

import BookList from "@/app/ui/bookList"
import BookInfo from "@/app/ui/bookInfo"
import BookComments from "@/app/ui/bookComents"
import { fetchBooks,fetchComments, borrowBook,returnBook, makeComment, pageCount } from "@/app/lib/data"
import { use, useEffect,useState } from "react"
import { Book } from "@/app/lib/definitions"
import { QueryResultRow } from "@vercel/postgres"
import { useRouter } from "next/navigation"
import { format } from "date-fns"

export default function BookStore() {

  const [page,setPage] = useState(1)
  const [books,setBooks] = useState<QueryResultRow>([])
  const [chooseCata,setChooseCata]=useState('all')
  const [chooseOrder,setChooseOrder]=useState<'time'|'thumbs'>('thumbs')
  const [bookId,setBookId]=useState(1)
  const [bookInfo,setBookInfo]=useState({})
  const [comments,setComments]=useState({})
  const [userName,setUserName]=useState('')
  const [maxPage,setMaxPage]=useState(1)

  useEffect(()=> {
    const fetchDatabooks = async ()=>{
    const fetchedBooks = await fetchBooks(page,chooseOrder,chooseCata);
      setBooks(fetchedBooks);
    const fetchedMaxPage = await pageCount(chooseCata)
      setMaxPage(fetchedMaxPage)
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

  const router = useRouter()

  useEffect(()=>{
    const NickUser = sessionStorage.getItem('Nick_user')
    if (NickUser==null){
      router.push('/bookSystem/login')
    }
    else{
      setUserName(NickUser)
    }
  },[router])

  useEffect(()=>{
    setPage(1)
  },[chooseCata,chooseOrder])


  // for functions borrow and return 
  async function borrow () {
    await borrowBook(bookId,userName)
    const fetchDatabooks = async ()=>{
      const fetchedBooks = await fetchBooks(page,chooseOrder,chooseCata);
        setBooks(fetchedBooks);
      const fetchedMaxPage = await pageCount(chooseCata)
      setMaxPage(fetchedMaxPage)
      }
      fetchDatabooks()
      alert('Pretend you have the book now! Yes you own me a book now!')
  }

  async function returnB () {
    await returnBook(bookId)
    const fetchDatabooks = async ()=>{
      const fetchedBooks = await fetchBooks(page,chooseOrder,chooseCata);
        setBooks(fetchedBooks);
      const fetchedMaxPage = await pageCount(chooseCata)
        setMaxPage(fetchedMaxPage)
      }
      fetchDatabooks()
    const newComment = prompt("You've just return the book, you can leave a comment if you want")
    if (newComment){
      const now = new Date()
      await makeComment(bookId, newComment, userName, format(now,'yyyy-MM-dd'))
      const fetchDataComment = async()=>{
        if (bookId){
          const fetchedComment = await fetchComments(bookId)
          setComments(fetchedComment)
        }
      }
      fetchDataComment()
    }

  }

  return (<>
    {/* screen size container */}
    <div className="w-screen h-screen  flex flex-col justify-center">


      {/* below is for large screen */}
      {/* the main rectangular part */}
      <div className=" hidden justify-center space-x-5 lg:flex">
        
        {/* list part */}
        <div className="lg:w-[20rem] xl:w-[30rem] h-[45rem]">
          <BookList bookList={books}  setChooseCata={setChooseCata} chooseCata={chooseCata} setBookId={setBookId} bookId={bookId} setChooseOrder={setChooseOrder} chooseOrder={chooseOrder} setPage={setPage} page={page} maxPage={maxPage}></BookList>
        </div>
        
        {/* book part */}
        <div className="lg:w-[40rem] xl:w-[60rem] h-[45rem] space-y-5">

          {/* book information */}
          <div className="w-full h-3/5">
            <BookInfo bookInfo={bookInfo} bookId={bookId} userName={userName} borrow={borrow} returnB={returnB}></BookInfo>
          </div>
          {/* book comments */}
          <div className="w-full h-[calc(40%-1.25rem)]">
            <BookComments comments={comments} bookId={bookId}></BookComments>
          </div>

        </div>

      </div>
    </div>
  </>)
}