import React from 'react'
import logo from "/logo.png"

const Navbar = () => {
    return (
        <section className="flex items-center justify-between pb-4">
            <div>
                <img src={logo} alt="logo" className="h-24 sm:h-30 md:h-36 w-auto" />
            </div>
            <div className="text-6xl dark:text-mist-50 light:text-emerald-950">Easy-uana</div>
        </section>
    )
}
export default Navbar
