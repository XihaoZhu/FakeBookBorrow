"use client"

import './globals.css'
import clsx from 'clsx'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function HeadNav(){
  
  const pathname = usePathname();

  return (<>


    <div className={clsx('mx-auto flex justify-around p-4 flex-wrap align-middle bg-color1 lg:hidden shadow-md',{
      // 'hidden':pathname !== '/profile/homePage'
    })}>
      {/* logo when in small and middle screen, take a single row */}
      <Link href={'/profile/homePage'} className='w-32 mb-4 h-16 bg-[url("/pics/logo.png")] bg-contain'></Link>
      {/* navi buttons for small and middle screen */}
      <ol className='flex w-11/12 justify-between lg:w-4/6 flex-wrap font-bold'>
        {/* <li className=
          'bg-color2 text-color3 w-full lg:w-1/6 mb-2 lg:mb-0 flex items-center justify-center'
        >
          <span className="material-symbols-outlined mr-2">home</span> home page
        </li> */}

        <Link href={'/profile/aboutMe'} className='bg-color2 text-color3 w-full lg:w-1/6 mb-2 lg:mb-0 flex items-center justify-center rounded-md'>
          <span className="material-symbols-outlined mr-2">person</span>about me
        </Link>

        <Link href={'/profile/skills'} className='bg-color2 text-color3 w-full lg:w-1/6 mb-2 lg:mb-0 flex items-center justify-center rounded-md'>
          <span className="material-symbols-outlined mr-2">laptop_windows</span>skills
        </Link>

        <Link href={'/profile/contactMe'} className='bg-color2 text-color3 w-full lg:w-1/6 flex items-center justify-center rounded-md'>
          <span className="material-symbols-outlined mr-2">mail</span>contanct me
        </Link>
      </ol>
    </div>

    <div className='mx-auto justify-around p-4 flex-wrap align-middle bg-color1 hidden lg:flex'> 
      {/* logo in big screen */}
      <div className='w-40 hidden lg:flex h-20 bg-[url("/pics/logo.png")] bg-contain'></div>
      {/* navi buttons for large screens */}
      <ol className='hidden lg:flex w-11/12 justify-between lg:w-4/6 flex-wrap lg:flex-nowrap font-bold'>
        <Link href={'/profile/homePage'} className={clsx(
          'text-color3 p-5 flex items-center justify-center hover:bg-color3 hover:text-color4 rounded-lg',
          {
            'text-yellow-500':pathname === '/profile/homePage'
          }
        )}>
          <span className="material-symbols-outlined mr-4">home</span>
          home page
        </Link>
        <Link href={'/profile/aboutMe'} className={clsx(
          'text-color3 p-5 flex items-center justify-center hover:bg-color3 hover:text-color4 rounded-lg',
          {
            'text-yellow-500':pathname === '/profile/aboutMe'
          }
        )}>
          <span className="material-symbols-outlined mr-4">person</span>about me
        </Link>
        <Link href={'/profile/skills'} className={clsx(
          'text-color3 p-5 flex items-center justify-center hover:bg-color3 hover:text-color4 rounded-lg',
          {
            'text-yellow-500':pathname === '/profile/skills'
          }
        )}>
          <span className="material-symbols-outlined mr-4">laptop_windows</span>skills
        </Link>
        <Link href={'/profile/contactMe'} className={clsx(
          'text-color3 p-5 flex items-center justify-center hover:bg-color3 hover:text-color4 rounded-lg',
          {
            'text-yellow-500':pathname === '/profile/contactMe'
          }
        )}>
          <span className="material-symbols-outlined mr-4">mail</span>contanct me
        </Link>
      </ol>
    </div>
  </>)
}