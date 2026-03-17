import React from 'react'

const Footer = () => {
    return (
        <section id="footer" className="flex flex-col items-center justify-center mt-30">
            <div className="bg-stone-300 my-1 h-[3px] w-3/4 hover:bg-green-600 transition-colors duration-300"></div>
            <div>
                <p className="text-sm text-center">
                    Copyright @ 2026 3Degrees Inc. All rights reserved.
                </p>
            </div>
        </section>
    )
}

export default Footer