import React from 'react'
import gsap from 'gsap'
import {useGSAP} from "@gsap/react";
import {animateWithGsap} from "../utils/animations.js";

gsap.registerPlugin(useGSAP);

const NotAffiliatedWithMetrc = () => {
    useGSAP(() => {

        animateWithGsap('#terms', {
            y: 0,
            opacity: 1,
            duration: 1
        });

        animateWithGsap(
            '.animate-grow',
            {
                scale: 1,
                opacity: 1,
                ease: 'back.in',
                duration: 1.5
            }
        );

        animateWithGsap(
            '.animate-fade-in',
            {
                y: 0,
                opacity: 1,
                ease: 'power2.inOut',
                duration: 2
            }
        );

    }, []);

    return (
        <section id="terms" className="my-30 relative">
            <img src="/logo.png" alt="logo" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] opacity-30 pointer-events-none"/>

            <h1 className="animate-fade-in animate-grow text-center text-xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl dark:text-mist-50 light:text-emerald-950 mb-30">
                Not Affiliated with METRC
            </h1>
            <p className="animate-fade-in animate-grow">
                Effective Date: 13.04.2026
            </p>
            <p className="animate-fade-in animate-grow">
                Easy-uana is an independent software tool designed to assist cannabis cultivators with RFID tag data capture and formatting. Easy-uana is not affiliated with, endorsed by, or sponsored by METRC or any of its parent companies, partners, or governing regulatory bodies. METRC® is a registered trademark of Franwell, and all references to METRC are used solely for descriptive and informational purposes.</p>
            <p className="animate-fade-in animate-grow">
                Purpose of Easy-uana </p>

            <p className="animate-fade-in animate-grow">
                Easy-uana is designed to help users capture RFID tag numbers quickly and efficiently, format that data into structures that may be compatible with METRC systems, and simplify internal workflows for licensed cannabis operators. The platform focuses on reducing manual effort and improving data organization. However, Easy-uana does not provide direct integration with METRC unless explicitly stated, and all users remain solely responsible for ensuring that any data they submit complies with applicable laws and regulatory requirements.
            </p>

            <p className="animate-fade-in animate-grow">
                User Responsibility </p>

            <p className="animate-fade-in animate-grow">
                By using Easy-uana, you acknowledge that you are fully responsible for verifying the accuracy and completeness of all data before submitting it to METRC or any other regulatory system. You also agree that compliance with all local, state, and federal cannabis regulations is your responsibility. Easy-uana does not guarantee regulatory compliance, nor does it guarantee that any data generated or formatted by the platform will be accepted by METRC or any governing authority.
            </p>
            <p className="animate-fade-in animate-grow">
                No Government or Regulatory Endorsement
            </p>
            <p className="animate-fade-in animate-grow">
                Easy-uana is not a government service, and its use does not imply approval, certification, or endorsement by any regulatory authority.
            </p>
            <p className="animate-fade-in animate-grow">
                Disclaimer of Warranties
            </p>
            <p className="animate-fade-in animate-grow">
                Use of Easy-uana is at your own risk. The service is provided “as is” without warranties of any kind, express or implied.
            </p>

        </section>
    )
}

export default NotAffiliatedWithMetrc
