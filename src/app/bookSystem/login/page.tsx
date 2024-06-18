"use client"
import Image from "next/image"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { fetchUsers,fetchLogin, fetchRegister } from "@/app/lib/data"
import { QueryResult, QueryResultRow } from "@vercel/postgres"
import { useRouter } from 'next/navigation'

export default function Login() {

  const [visible,setVisible]=useState(false)
  const [userName,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const [userList,setUserList]=useState<QueryResultRow>([])

useEffect(()=>{
  const getUserList = async () =>{
    const fetchedUserList = await fetchUsers()
    setUserList(fetchedUserList)
  }  
  getUserList()
},[])

useEffect(()=>{
    console.log(userList)
},[userList])


const router = useRouter()

  async function logOrRegister(name:string,password:string){
    
    if (userList.filter((item:any)=>item.name==name).length!=0){
      const result = await fetchLogin(name,password)
      if (result!==name){
        alert(result)
      }else{
        sessionStorage.setItem('Nick_user',result)
        router.push('/bookSystem/store')
      }
    }else{
      const result = await fetchRegister(name,password)
      sessionStorage.setItem('Nick_user',result)
      router.push('/bookSystem/store')
    }
  }

  return (<>
    {/* screen size element */}
    <div className="w-screen h-screen flex justify-center">
    {/* I plan to make two parts for login page, one for a short description, one for a function */}
      <div className="w-full h-full my-auto relative flex lg:h-[45rem] lg:w-[80rem] flex-wrap">
        {/* the SVG book shape */}
        <Image src='/nick_draw_book.svg' alt="book outline" width={0} height={0} className="w-full h-full object-fill absolute top-0 left-0 opacity-10 hidden lg:block pointer-events-none"></Image>
        {/* description part */}
        <div className="bg-gray-200/20 w-full lg:w-1/2 lg:h-full flex flex-col justify-center">
          {/* text part */}
          <div className="lg:text-xl p-12">
            The book borrow system part is to showcase skills for back end development. It&apos;s based on Nexj.Js, written in TypeScript and with PostgreSQL.
            <br /><br />
            Before we start, there are some things you need to know: <br /><br />
            1. The idea is making believe you are renting book from Nick (but of course he has no book for you) <br /><br />
            <b>2. To make it easier, he reduced the register part. If you&apos;re logging in with the name and password for the first time, the registraition is automatically done for you. (I&apos;ll let you know if the name is occupied.) </b><br /><br />
            3. You&apos;ll be able to do something with your account, so better remember your name and password, even it is still okay to view with new names every time. <br /><br />
            <span className="text-red-600">Do not use password you normally use!</span>
          </div>
        </div>
        {/* function part */}
        <div className="bg-yellow-200/80 w-full lg:w-1/2 lg:h-full flex flex-col justify-center">
          {/* the countainer for login form */}
          <div className="lg:text-xl p-12">
            {/* form itself */}
            <form className="flex flex-col space-y-20">
              {/* name */}
              <div className="space-y-2">
                <label>Enter your name: </label>
                <div>
                  <input type="text" name="name" id="name" autoComplete="off" required className="px-2 w-3/4" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                </div>
              </div>
              {/* password */}
              <div className="space-y-2">
                <label>Enter your password: </label>
                <div>
                  <input type={clsx({
                    "password":visible==false,
                    "text":visible==true,
                  })} name="password" id="password" autoComplete="off" required  className="px-2 w-3/4" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <span className="material-symbols-outlined -translate-x-[100%] translate-y-[20%] float-end cursor-pointer" onClick={()=>setVisible(!visible)}>{clsx({
                    'visibility':visible==true,
                    'visibility_off':visible==false,
                  })}</span>
                </div>
              </div>
              <div className="flex justify-center">
                <input type="button"  onClick={()=>logOrRegister(userName,password)} value=" Log in/Register " className="border-double border-4 border-gray-600 p-2 rounded-full cursor-pointer hover:bg-gray-600  hover:text-yellow-200"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>)
}