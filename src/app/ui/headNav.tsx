"use client"

import './globals.css'
import clsx from 'clsx'
import { usePathname } from 'next/navigation';

export default function HeadNav(){
  
  const pathname = usePathname();

  return (<>
    <div className='mx-auto flex justify-around p-4 flex-wrap align-middle bg-color1 my_blur'>
      {/* logo when in small and middle screen, take a single row */}
      <div className='lg:hidden w-32 mb-4 h-16 bg-[url("@/../../public/pics/logo.png")] bg-contain'></div>
      {/* navi buttons for small and middle screen */}
      <ol className='lg:hidden flex w-11/12 justify-between lg:w-4/6 flex-wrap lg:flex-nowrap font-bold'>
        {/* <li className=
          'bg-color2 text-color3 w-full lg:w-1/6 mb-2 lg:mb-0 flex items-center justify-center'
        >
          <span className="material-symbols-outlined mr-2">home</span> home page
        </li> */}

        <li className='bg-color2 text-color3 w-full lg:w-1/6 mb-2 lg:mb-0 flex items-center justify-center rounded-md'>
          <span className="material-symbols-outlined mr-2">person</span>about me
        </li>

        <li className='bg-color2 text-color3 w-full lg:w-1/6 mb-2 lg:mb-0 flex items-center justify-center rounded-md'>
          <span className="material-symbols-outlined mr-2">laptop_windows</span>skills
        </li>

        <li className='bg-color2 text-color3 w-full lg:w-1/6 flex items-center justify-center rounded-md'>
          <span className="material-symbols-outlined mr-2">mail</span>contanct me
        </li>
      </ol>


      {/* logo in big screen */}
      <div className='w-40 hidden lg:flex h-20 bg-[url("@/../../public/pics/logo.png")] bg-contain'></div>
      {/* navi buttons for large screens */}
      <ol className='hidden lg:flex w-11/12 justify-between lg:w-4/6 flex-wrap lg:flex-nowrap font-bold'>
        <li className={clsx(
          'text-color3 w-1/6 flex items-center justify-center hover:bg-color3 hover:text-color4 rounded-lg',
          {
            'text-yellow-500':pathname === '/profile/homePage'
          }
        )}>
          <span className="material-symbols-outlined mr-4">home</span>
          home page
        </li>
        <li className={clsx(
          'text-color3 w-1/6 flex items-center justify-center hover:bg-color3 hover:text-color4 rounded-lg',
          {
            'text-yellow-500':pathname === '/profile/aboutMe'
          }
        )}>
          <span className="material-symbols-outlined mr-4">person</span>about me
        </li>
        <li className={clsx(
          'text-color3 w-1/6 flex items-center justify-center hover:bg-color3 hover:text-color4 rounded-lg',
          {
            'text-yellow-500':pathname === '/profile/skills'
          }
        )}>
          <span className="material-symbols-outlined mr-4">laptop_windows</span>skills
        </li>
        <li className={clsx(
          'text-color3 w-1/6 flex items-center justify-center hover:bg-color3 hover:text-color4 rounded-lg',
          {
            'text-yellow-500':pathname === '/profile/contactMe'
          }
        )}>
          <span className="material-symbols-outlined mr-4">mail</span>contanct me
        </li>
      </ol>
    </div>
  </>)
}