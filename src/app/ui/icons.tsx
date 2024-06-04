import Image from "next/image"
import jslogo from "@/../../public/icons/icons8-javascript.svg"
import reactlogo from "@/../../public/icons/icons8-react.svg"
import blenderlogo from "@/../../public/icons/icons8-blender.svg"
import gitlogo from "@/../../public/icons/icons8-git.svg"
import htmllogo from "@/../../public/icons/icons8-html.svg"
import nodejslogo from "@/../../public/icons/icons8-nodejs.svg"
import pslogo from "@/../../public/icons/icons8-photoshop.svg"
import phplogo from "@/../../public/icons/icons8-php.svg"
import tslogo from "@/../../public/icons/icons8-typescript.svg"
import vuelogo from "@/../../public/icons/icons8-vue-js.svg"
import wplogo from "@/../../public/icons/icons8-wordpress.svg"
import mysqllogo from "@/../../public/icons/mysql-ar21.svg"
import pythonlogo from "@/../../public/icons/icons8-python.svg"
import csslogo from "@/../../public/icons/icons8-css.svg"
import tailwindlogo from "@/../../public/icons/tailwind-svgrepo-com.svg"
import postgresqllogo from "@/../../public/icons/postgresql-icon.svg"
import clsx from "clsx"

const publickProp = "w-10 md:w-12 lg:w-16 xl:w-20 transition-all"


export function IconArray ({show}:{show:string[]}) {

  return (<div  className="flex space-x-1 justify-center transition-all ease-in-out flex-wrap flex-initial mb-5">
    <Image src={jslogo} alt="JS icon" className={clsx(publickProp,
      {"opacity-20":show.indexOf('JS')==-1,
        "scale-[120%]":show.indexOf('JS')!=-1
      }
    )}/>
    <Image src={reactlogo} alt="React icon" className={clsx(publickProp,
      {"opacity-20":show.indexOf('React')==-1,
        "scale-[120%]":show.indexOf('React')!=-1
      }
    )}/>
    <Image src={blenderlogo} alt="Blender icon" className={clsx(publickProp,
      {"opacity-20":show.indexOf('Blender')==-1,
        "scale-[120%]":show.indexOf('Blender')!=-1
      }
    )}/>
    <Image src={gitlogo} alt="Git icon" className={clsx(publickProp,
      {"opacity-20":show.indexOf('Git')==-1,
        "scale-[120%]":show.indexOf('Git')!=-1
      }
    )}/>
    <Image src={htmllogo} alt="Html icon" className={clsx(publickProp,
      {"opacity-20":show.indexOf('Html')==-1,
        "scale-[120%]":show.indexOf('Html')!=-1
      }
    )}/>
    <Image src={csslogo} alt="CSS icon" className={clsx(publickProp,
      {"opacity-20":show.indexOf('CSS')==-1,
        "scale-[120%]":show.indexOf('CSS')!=-1
      }
    )}/>
    <Image src={tailwindlogo} alt="Tailwind icon" className={clsx(publickProp,
      {"opacity-20":show.indexOf('Tailwind')==-1,
        "scale-[120%]":show.indexOf('Tailwind')!=-1
      }
    )}/>
    <Image src={nodejslogo} alt="NodeJs icon" className={clsx(publickProp,
      {"opacity-20":show.indexOf('Nodejs')==-1,
        "scale-[120%]":show.indexOf('Nodejs')!=-1
      }
    )}/>
    <Image src={pslogo} alt="PS icon" className={clsx(publickProp,
      {"opacity-20":show.indexOf('PS')==-1,
        "scale-[120%]":show.indexOf('PS')!=-1
      }
    )}/>
    <Image src={phplogo} alt="PHP icon" className={clsx(publickProp,
      {"opacity-20":show.indexOf('PHP')==-1,
        "scale-[120%]":show.indexOf('PHP')!=-1
      }
    )}/>
    <Image src={tslogo} alt="TS icon"className={clsx(publickProp,
      {"opacity-20":show.indexOf('TS')==-1,
        "scale-[120%]":show.indexOf('TS')!=-1
      }
    )}/>
    <Image src={wplogo} alt="WP icon" className={clsx(publickProp,
      {"opacity-20":show.indexOf('WP')==-1,
        "scale-[120%]":show.indexOf('WP')!=-1
      }
    )}/>
    <Image src={vuelogo} alt="Vue icon" className={clsx(publickProp,
      {"opacity-20":show.indexOf('Vue')==-1,
        "scale-[120%]":show.indexOf('Vue')!=-1
      }
    )}/>
    <Image src={mysqllogo} alt="MySQL icon" className={clsx(publickProp,
      {"opacity-20":show.indexOf('MySQL')==-1,
        "scale-[120%]":show.indexOf('MySQL')!=-1
      }
    )}/>
    <Image src={postgresqllogo} alt="PostgreSQL icon" className={clsx(publickProp,
      {"opacity-20":show.indexOf('PostgreSQL')==-1,
        "scale-[120%]":show.indexOf('PostgreSQL')!=-1
      }
    )}/>
    <Image src={pythonlogo} alt="Python icon" className={clsx(publickProp,
      {"opacity-20":show.indexOf('Python')==-1,
        "scale-[120%]":show.indexOf('Python')!=-1
      }
    )}/>
    icons from icons8.com
    </div>)
}
