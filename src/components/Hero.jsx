import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { animateWithGsap } from '../utils/animations';
import Button from './Button';

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
        <section id="hero" className="my-30">

            <div className="animate-fade-in mx-auto max-w-6xl px-6 sm:px-8 leading-relaxed space-y-8 text-2xl">
                Tired of the tedious, time-consuming process of tracking your cannabis plants for METRC compliance? Say goodbye to manual data entry and hello to Easy-uana — the revolutionary iOS app designed exclusively for cannabis growers. With Easy-uana, you can effortlessly capture RFID tag numbers using just your iPhone, instantly format them into METRC-compliant templates, and download them straight to your computer. Simplifying compliance has never been this easy, affordable, or efficient.
                <div className="pt-10">
                    <Button title="Download" href="https://apps.apple.com/us/app/easyuana/id6742842577" />
                </div>
            </div>

        </section>
    )
}

export default Hero
