"use client"

import { useState } from "react";
import React from "react";

export default function ContactMe() {

  const [formValue,setFormValue] = useState({name:'',email:'',message:''})

  async function handleSubmit(e:React.ChangeEvent<HTMLFormElement>) {
    
    e.preventDefault()

    const formData = new FormData(e.target)
    
    setFormValue({name:'',email:'',message:''})

    await fetch('/api/mail',{
      method:'POST',
      body:formData,
    })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>){
    setFormValue({...formValue,[e.target.id]:e.target.value})
  }

  return (<>
    {/* biggest container in this page */}
    <div className="w-full h-full py-20 lg:ox-40 px-5 xl:px-60 grid-cols-2 grid-rows-2 gap-5 grid">
      {/* left upper side, dismiss when small screen*/}
      <div className="col-span-1 justify-around flex-col hidden xl:flex">
          <div className="text-3xl">
            <span className="material-symbols-outlined">alternate_email</span>
            &nbsp; Email : xihao.zhu@outlook.com
          </div>
          <div className="text-3xl">
            <span className="material-symbols-outlined">call</span>
            &nbsp; TEL : 07536245732
          </div>
      </div>


      {/* right side form*/}
      <div className="bg-gradient-to-r from-[#97b6d3] via-70% via-color4 to-color4 col-span-2 xl:col-span-1 row-span-2 rounded-3xl border-l-4 border-l-[#9baec7]">
        <form onSubmit={handleSubmit} method="post" className="flex flex-col justify-center h-full w-full pl-2 lg:pl-10 py-10">
          <input type="text" name="name" id="name" required placeholder="Name" autoComplete="off" value={formValue.name} onChange={(e)=>handleChange(e)}
          className="w-4/5 lg:w-2/3 px-2 rounded-full m-2 bg-color4"/>
          <input type="email" name="email" id="email" required placeholder="Email" autoComplete="off" value={formValue.email} onChange={handleChange}
          className="w-4/5 lg:w-2/3 px-2 rounded-full m-2 bg-color4"/>
          <textarea className="w-4/5 lg:w-2/3 h-2/3 p-2 rounded-2xl m-2 bg-color4" value={formValue.message} onChange={handleChange} id="message" name="message"
          autoComplete="off" placeholder="Fell free to leave me a message!" required></textarea>
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 w-[30vw] lg:w-64 cursor-pointer p-2 flex justify-center m-2 rounded-full">
            <span className="material-symbols-outlined text-[6vw] lg:text-3xl">send</span>
            <button type="submit" className="text-[4vw] lg:text-3xl">SEND !</button>
          </div>
        </form>
      </div>

      {/* left down side, dismiss when small screen*/}
      <div className="col-span-1 flex-col justify-center text-left leading-[2vw] hidden xl:flex">
          <div>
            Of course the right part is functional.<br/>
            But how it works? It actually sends me an email with my own account.<br/>
            So even I have asked for your email address there, after you leave me a message.<br/>
            please still send me something with the email adress you left after.<br/>
            (For security reason, it is still possible it&apos;s not working as I use my normal Gmail account.)
          </div>
      </div>
    </div>
  </>);
}
