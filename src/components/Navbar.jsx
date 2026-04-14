import { React, useEffect, useState } from "react"
import logo from "/logo.png"
import { menuItems }  from "/src/constants/index.js"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    return (
        <header className="relative z-50 w-full py-7 sm:px-10">
            <nav className="relative flex items-center justify-between w-full">
                    <Link to ="/">
                        <img src={logo} alt="logo" className="h-24 sm:h-30 md:h-36 w-auto" />
                    </Link>
                <h1 className={`text-3xl sm:text-lg md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-mist-50 light:text-emerald-950 ${open ? "invisible lg:visible" : ""}`}> Easy-uana </h1>

                {/*Desktop Menu*/}
                        <div className="hidden lg:flex items-start gap-6 md:gap-5.5">
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
                    {!open && (
                        <button
                            type="button"
                            className="lg:hidden text-white text-3xl leading-none"
                            aria-expanded={open}
                            aria-label="Open navigation menu"
                            onClick={() => setOpen(true)}
                        >
                            ☰
                        </button>
                    )}
                    {open && (
                        <div className="absolute inset-x-0 top-0 flex flex-col rounded-2xl border border-white/15 bg-black/95 px-6 py-5 shadow-2xl lg:hidden">
                            <div className="mb-4 flex items-center justify-between gap-4">
                                <h1 className="text-3xl dark:text-mist-50 light:text-emerald-950">Easy-uana</h1>
                                <button
                                    type="button"
                                    className="text-white text-3xl leading-none"
                                    aria-label="Close navigation menu"
                                    onClick={() => setOpen(false)}
                                >
                                    ×
                                </button>
                            </div>
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="py-2 text-center text-lg text-white"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    )}
            </nav>
        </header>
    )
}
export default Navbar
