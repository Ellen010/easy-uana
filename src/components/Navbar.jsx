import { React, useState } from "react"
import logo from "/logo.png"
import { menuItems }  from "/src/constants/index.js"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full py-7 sm:px-10">
            <nav className="flex items-center justify-between w-full">
                    <Link to ="/">
                        <img src={logo} alt="logo" className="h-24 sm:h-30 md:h-36 w-auto" />
                    </Link>
                <h1 className="text-3xl sm:text-lg md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-mist-50 light:text-emerald-950"> Easy-uana </h1>

                {/*Desktop Menu*/}
                        <div className="hidden sm:flex items-start gap-2 md:gap-2.5">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="max-w-[4.75rem] text-center text-[10px] md:text-xs leading-tight cursor-pointer text-gray hover:scale-110 transition-transform duration-300"
                                >
                                    {item.name.split(" ").map((word) => (
                                        <span key={`${item.name}-${word}`} className="block">
                                            {word}
                                        </span>
                                    ))}
                                </Link>
                            ))}
                        </div>


                {/*Mobile Menu*/}
                    <button className="sm:hidden text-white" onClick= {() => setOpen(!open)}> ☰ </button>
                    {open && (
                        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center py-5 sm:hidden z-50">
                            {menuItems.map((item) => (
                                <Link key={item.name} to={item.path} className="py-2 text-white text-lg"> {item.name} </Link>
                            ))}
                        </div>
                    )}






            </nav>
        </header>
    )
}
export default Navbar
