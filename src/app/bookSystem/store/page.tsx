
import BookList from "@/app/ui/bookList"
import BookInfo from "@/app/ui/bookInfo"
import BookComments from "@/app/ui/bookComents"

export default function BookStore() {
  return (<>
    {/* screen size container */}
    <div className="w-screen h-screen  flex flex-col justify-center">


      {/* below is for large screen */}
      {/* the main rectangular part */}
      <div className=" hidden justify-center space-x-5 lg:flex">
        
        {/* list part */}
        <div className="lg:w-[20rem] xl:w-[30rem] h-[50rem]">
          <BookList></BookList>
        </div>
        
        {/* book part */}
        <div className="lg:w-[40rem] xl:w-[60rem] h-[50rem] space-y-5">

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