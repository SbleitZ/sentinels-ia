import Link from "next/link";
import { GiArtificialHive } from "react-icons/gi";
import HeaderLinks from "./HeaderLinks";
export default function Header(){
  return (
    <header className={"fixed w-full top-0 backdrop-blur-sm z-50 shadow-lg"}>
      <nav className="flex md:items-center justify-between m-2 md:px-6">
        <Link href="/" className="hover:text-slate-700 bg-transparent backdrop-blur-sm p-4 rounded-xl">
          <div className="flex flex-row items-center gap-4 text-primaryL dark:text-primaryD hover:text-importanteL dark:hover:text-importanteD">
            <GiArtificialHive size={30}/>
            <h1 className="font-bold text-shadow-lg text-2xl">
              SentinelsIA
            </h1>
          </div>
        </Link>
        <HeaderLinks/>
      </nav>
    </header>
  );
}