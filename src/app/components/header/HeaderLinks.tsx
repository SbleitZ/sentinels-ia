"use client";
import Link from "next/link";
import { useId, useState } from "react";
import HeaderModal from "./HeaderModal";
import { HiMenu } from "react-icons/hi"
interface routesType {
  text: string;
  link: string;
}
const headerRoutes : routesType[] = [
  {
    text:"Características",
    link:"/caracteristicas"
  },
  {
    text: "Planes y precios",
    link: "/#planes"
  },
  {
    text: "Acerca de",
    link: "/about"
  },
  {
    text: "Contacto",
    link: "/#contacto"
  }
]
export default function HeaderLinks(){
  const listHeaderId = useId();
  const [infoBar, setInfoBar] = useState(false);
  return (
    <>
<div className={infoBar ? "md:block flex":"hidden md:block flex"}>
        <ul className="hidden md:flex md:flex-row gap-8 cursor-pointer text-primaryL dark:text-primaryD text-xl rounded-xl p-4">
              {
              headerRoutes.map((headerLink,i) => (
                headerLink.text == "Contacto" ? 
                <li key={`${listHeaderId} - ${i}`}>
                  <a href={`${headerLink.link}`} className="hover:text-importanteL dark:hover:text-importanteD">
                    {headerLink.text}
                  </a>
                </li>
                :<li key={`${listHeaderId} - ${i}`}>
                  <Link href={`${headerLink.link}`} className="hover:text-importanteL dark:hover:text-importanteD">
                    {headerLink.text}
                  </Link>
                </li>
                ))
            }
            </ul>
          {infoBar ? 
            <HeaderModal
             isOpen={infoBar}
             Rutas={headerRoutes} 
             onClose={setInfoBar}/>:<></>
          }
          
        </div>
        <button className="md:hidden" onClick={() => setInfoBar(!infoBar)}>
           <HiMenu size={40}/>
        </button>
    </>
  );
}