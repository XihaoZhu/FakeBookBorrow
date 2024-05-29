"use client"
import { randomInt } from "crypto"
import React from "react"

export default function Typing(props:{string1:string,string2:string}={string1:'string1',string2:'string2'}){
  
  const {string1,string2} = props
  const [text,setText] = React.useState('')
  const [currentType,setCurrentType] = React.useState(string1)
  const delay = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

  const type = async () => {
    for (let i = 0; i < currentType.length; i++) {
      await delay(Math.random()*500+100); 
      setText(currentType.slice(0, i + 1));
    }
    await delay(300)
    for (let i = currentType.length; i > 0; i--) {
      await delay(Math.random()*500+100);
      setText(currentType.slice(0, i - 1));
    }
    setCurrentType(currentType === string1 ? string2 : string1);
  };

  React.useEffect(()=>{
    type()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentType])

  return (<>
    <div>{text}<span className="text-black my_spark">|</span></div>
  </>)
}