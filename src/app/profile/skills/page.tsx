'use client'

import Image from "next/image";
import {IconArray} from "@/app/ui/icons"
import { useEffect, useState } from "react";

export default function Skills() {
  const [show,setShow]=useState(['JS','React','Blender','Git','Html','Nodejs','PS','PHP','TS','Vue','WP','MySQL','Python'])
  function test () {
    setShow([])
  }
  return (<>
    <div onClick={test}>
      Skills in front end development
    </div>
    <div className="w-screen-80 h-screen-80 bg-pink-400 mx-auto">
    <IconArray show={show}/>
    </div>
    </>);
}
