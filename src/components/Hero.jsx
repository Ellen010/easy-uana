import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { animateWithGsap } from '../utils/animations';

gsap.registerPlugin(useGSAP);

const Hero = () => {

    useGSAP(() => {

        animateWithGsap('#hero', {
            y: 0,
            opacity: 1,
            duration: 1
        });

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
        <section id="hero" className="my-30 opacity-0 translate-y-10">

            <div className="animate-fade-in m-9 relative max-w-6xl mx-auto leading-relaxed space-y-4 text-2xl opacity-0 translate-y-10 scale-95">
                Tired of the tedious, time-consuming process of tracking your cannabis plants for METRC compliance? Say goodbye to manual data entry and hello to Easy-uana — the revolutionary iOS app designed exclusively for cannabis growers. With Easy-uana, you can effortlessly capture RFID tag numbers using just your iPhone, instantly format them into METRC-compliant templates, and download them straight to your computer. Simplifying compliance has never been this easy, affordable, or efficient.
            </div>

        </section>
    )
}

export default Hero