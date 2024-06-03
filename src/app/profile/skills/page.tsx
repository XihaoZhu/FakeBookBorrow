'use client'

import Image from "next/image";
import {IconArray} from "@/app/ui/icons"
import { useEffect, useState } from "react";

export default function Skills() {
  const [show,setShow]=useState(['JS','React','Blender','Git','Html','Nodejs','PS','PHP','TS','Vue','WP','MySQL','Python'])

  return (<>
    <div className="w-screen-80  mx-auto h-full">
      <div>
        <IconArray show={show}/>
      </div>

    </div>
    </>);
}
