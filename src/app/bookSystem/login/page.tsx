
import Image from "next/image"

export default function Login() {
  
  return (<>
    {/* screen size element */}
    <div className="w-screen h-screen flex justify-center">
    {/* I plan to make two parts for login page, one for a short description, one for a function */}
      <div className="w-full h-full my-auto relative flex lg:h-[45rem] lg:w-[80rem] flex-wrap">
        {/* the SVG book shape */}
        <Image src='/nick_draw_book.svg' alt="book outline" width={0} height={0} className="w-full h-full object-fill absolute top-0 left-0 opacity-10 hidden lg:block"></Image>
        {/* description part */}
        <div className="bg-gray-200/20 w-full lg:w-1/2 lg:h-full flex flex-col justify-center">
          {/* text part */}
          <div className="lg:text-xl p-12">
            The book borrow system part is to showcase skills for back end development. It&apos;s based on Nexj.Js, written in Javascript and with PostgreSQL.
            <br /><br />
            Before we start, there are some things you need to know: <br /><br />
            1. The idea is making believe you are renting book from Nick (but of course he has no book for you) <br /><br />
            2. To make it easier, he reduced the register part. If you&apos;re logging in with the name and password for the first time, the registraition is automatically done for you. (I&apos;ll let you know if the name is occupied.) <br /><br />
            3. You&apos;ll be able to do something with your account, so better remember your name and password, even it is still okay to view with new names every time. <br /><br />
          </div>
        </div>
        {/* function part */}
        <div className="bg-yellow-200 w-full lg:w-1/2">
          
        </div>
      </div>
    </div>
  </>)
}