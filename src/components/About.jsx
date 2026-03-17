import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateWithGsap } from '/src/utils/animations.js';
import imgOne from '/public/img-one.png';
import imgTwo from '/public/img-two.JPG';
import imgThree from '/public/img-three.JPG';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
    }, []);

    return (
        <section ref={sectionRef} className="my-30">
            <div>
                <h2 className="text-center text-xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-30">
                    Easy-uana is a Game-Changer
                </h2>
                <p>
                    1. Capture RFID Tag Numbers in Seconds
                </p>
                <p>
                    Fast and Accurate: Simply point your iPhone’s camera at the RFID tag, and Easy-uana captures the tag number with precision.
                    No Expensive Gear Needed: Forget about clunky handheld RFID scanners—all you need is your phone.
                    Eliminates Errors: Say goodbye to manual input mistakes and the stress of compliance violations.
                </p>
                <p>
                    2. Instant METRC-Compliant Formatting
                </p>
                <p>
                    Plug-and-Play Templates: The app auto-formats your captured tag numbers into a ready-to-use METRC template.
                    Simplified Downloads: Save your template directly to your computer in seconds, keeping your workflow smooth and efficient.
                    One Template at a Time, Perfectly Tailored: Focus on what matters most—your plants—while Easy-uana handles the compliance details.
                </p>
                <p>
                    3. Built for Growers, Not Tech Gurus
                </p>
                <p>
                    User-Friendly Interface: Designed with growers in mind, Easy-uana is intuitive and easy to navigate.
                    Quick Setup: Get started in minutes with minimal learning curve.
                    Reminders for Deadlines: Never miss a compliance deadline again with built-in notifications.
                    Transform Your Operation with Easy-uana
                    Boost Efficiency
                    Speed Up Data Capture: Input RFID tag numbers in record time, freeing up hours for other tasks.
                    Streamline Compliance: Easy-uana takes the guesswork out of regulatory reporting.
                    Save Money
                    No Extra Hardware Costs: Use the tools you already have—your iPhone.
                    Avoid Costly Fines: Accurate data means staying compliant and penalty-free.
                    Stay in Control
                    Customizable Simplicity: Easy-uana focuses on one template at a time, ensuring your data is clean, precise, and ready for METRC.
                    Audit-Ready Records: Keep your operation running smoothly with accurate, organized files.
                    Perfect for Every Grower
                    Small Grow Operations
                    Keep your compliance process simple and stress-free with an affordable, straightforward solution.
                </p>
                <p>
                    4. Large Cultivators
                </p>
                <p>
                    Easily manage the complexities of compliance without adding unnecessary overhead or equipment.
                </p>
                <p>
                    5. Why Growers Love Easy-uana
                </p>
                <p>
                    Focused Simplicity: Does one thing perfectly — capturing and formatting RFID tag numbers.
                    Reliable Results: Beta testers report saving 50% of their compliance management time.
                    No Hidden Costs: Affordable, transparent pricing with no need for additional hardware.
                </p>
                <p>
                    6. Take Control of Compliance Today
                </p>
                <p>
                    Don’t let METRC compliance slow you down. With Easy-uana, you can simplify your workflow, save time, and focus on growing your business.
                </p>
            </div>

            <div className="flex flex-row my-25">
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

    )
}
export default About
