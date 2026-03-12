import { React, useState } from "react"
import logo from "/logo.png"
import { menuItems }  from "/src/constants/index.js"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full py-5 sm:px-10">
            <nav className="flex items-center justify-between w-full">
                    <Link to ="/">
                        <img src={logo} alt="logo" className="h-24 sm:h-30 md:h-36 w-auto" />
                    </Link>
                    <h1 className="font-frijole text-6xl dark:text-mist-50 light:text-emerald-950">Easy-uana</h1>

                {/*Desktop Menu*/}
                        <div className="hidden sm:flex space-x-1">
                            {menuItems.map((item) => (
                                <Link key={item.name} to={item.path}  className="px-2 text-sm cursor-pointer text-gray hover:scale-120 transition-transform duration-300"> {item.name} </Link>
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
