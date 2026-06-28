import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = [
    { name: "About", path: "/about" },
    { name: "Download", path: "/download" },
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "METRC Notice", path: "/NotAffiliatedWithMetrc" },
];

const Footer = () => {
    return (
        <section id="footer" className="flex flex-col items-center justify-center mt-30 pb-10">
            <div className="bg-stone-300 my-1 h-[3px] w-3/4 hover:bg-green-600 transition-colors duration-300"></div>
            <nav className="mt-8 grid w-full max-w-6xl grid-cols-1 gap-3 px-6 text-center sm:grid-cols-5">
                {footerLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="border-y border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-stone-200 transition-colors duration-300 hover:border-green-500 hover:text-green-400"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
            <div>
                <p className="text-sm text-center">
                    Copyright @ 2026 Yvelines Technologies Inc. All rights reserved.
                </p>
            </div>
        </section>
    )
}

export default Footer
