import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateWithGsap } from '/src/utils/animations.js';
import imgOne from '/public/img-one.JPG';
import imgTwo from '/public/img-two.JPG';
import imgThree from '/public/img-three.JPG';

gsap.registerPlugin(ScrollTrigger);

const Download = () => {
    const sectionRef = useRef();

    useEffect(() => {
        // Animate title
        animateWithGsap('#features_title', { y: 0, opacity: 1 });

        // Animate image grow
        animateWithGsap('.g_grow', {
                    keyframes: [
                    { scale: 1, opacity: 1, duration: 0.5 },   // start fully visible
                    { scale: 1.5, opacity: 0.3, duration: 0.9 }, // fade down
                    { scale: 1, opacity: 1, duration: 0.5 }    // back to full
                ],
                ease: 'power1.inOut'
            },
            { scrub: 40 }
        );

        // Animate text
        animateWithGsap('.g_text', { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 });

        // ScrollTrigger animation for #chip
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom',
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut',
        });
    }, []);

    return (
        <section ref={sectionRef} className="my-30">
            <h2
                id="features_title"
                className="text-center text-xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl dark:text-mist-50 light:text-emerald-950"
            >
                Download
            </h2>
            <p className="items-center justify-center text-2xl">
                Easy-uana is now available on the Apple App Store, giving licensed cannabis growers a faster and smarter way to manage METRC compliance. Instead of manually typing RFID tag numbers and formatting spreadsheets, Easy-uana lets you capture tag numbers directly with your iPhone, automatically format them into METRC-ready templates, and export the data instantly.
            </p>
            <p className="text-evenly text-2xl">
                The app is designed to save time, reduce human error, and simplify plant tracking for cannabis cultivation businesses operating in regulated states. Download Easy-uana today from the App Store and streamline your compliance workflow with a tool built specifically for growers.
            </p>
            <div className="flex flex-row">
                <div className="overflow-hidden flex-1 h-[50vh]">
                    <img src={imgOne} alt="titanium 2" className="product g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh] mx-5">
                    <img src={imgTwo} alt="titanium 2" className="product g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                    <img src={imgThree} alt="titanium 2" className="product g_grow" />
                </div>
            </div>
        </section>
    );
};

export default Download;