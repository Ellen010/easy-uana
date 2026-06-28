import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateWithGsap } from '/src/utils/animations.js';
import { useLocation } from 'react-router-dom';
import Button from './Button';


gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef();
    const location = useLocation();
    const isAboutPage = location.pathname === "/about";


    useEffect(() => {

        animateWithGsap("#about", {
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
                duration: 0.1
            }
        );

        animateWithGsap('.g_grow', {
                keyframes: [
                    { scale: 1, opacity: 1, duration: 0.5 },
                    { scale: 1.5, opacity: 0.3, duration: 0.9 },
                    { scale: 1, opacity: 1, duration: 0.5 }
                ],
                ease: 'power1.inOut'
            },
            { scrub: 40 }
        );

    }, []);

    return (
        <section ref={sectionRef} id="about" className="my-30">
            {isAboutPage && (
                <div className="animate-fade-in mx-auto mb-24 max-w-5xl px-6 text-center">
                    <h2 className="mb-10 text-xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                        About
                    </h2>
                    <p className="m-0 text-2xl leading-relaxed">
                        Tired of the tedious, time-consuming process of tracking your cannabis plants for METRC compliance? Say goodbye to manual data entry and hello to Easy-uana — the revolutionary iOS app designed exclusively for cannabis growers. With Easy-uana, you can effortlessly capture RFID tag numbers using just your iPhone, instantly format them into METRC-compliant templates, and download them straight to your computer. Simplifying compliance has never been this easy, affordable, or efficient.
                    </p>
                </div>
            )}

            <div className="my-35 flex flex-nowrap gap-5 overflow-x-auto pb-3">
                <div className="min-w-[18rem] flex-1 overflow-hidden h-[44vh] border-y border-white/10 transition-colors duration-300 hover:border-green-500">
                    <img src={imgOne} alt="Packaged cannabis flower" className="product g_grow" />
                </div>
                <div className="min-w-[18rem] flex-1 overflow-hidden h-[44vh] border-y border-white/10 transition-colors duration-300 hover:border-green-500">
                    <img src={imgTwo} alt="Cannabis flower closeup in packaging" className="product g_grow" />
                </div>
                <div className="min-w-[18rem] flex-1 overflow-hidden h-[44vh] border-y border-white/10 transition-colors duration-300 hover:border-green-500">
                    <img src={imgThree} alt="Cannabis flower texture" className="product g_grow" />
                </div>
            </div>

            <div className="animate-fade-in mx-auto max-w-6xl px-6">
                <h2 className="mb-10 text-xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                    Built for Busy Cultivation Teams
                </h2>
                <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                    <div className="space-y-6 text-xl leading-relaxed sm:text-2xl">
                        <p className="m-0">Harvest days are busy enough.</p>
                        <p className="m-0">
                            Instead of juggling scanners, paperwork, and spreadsheets, EasyUana helps streamline tag collection and data organization so your team can focus on operations.
                        </p>
                    </div>
                    <div>
                        <p className="m-0 mb-6 text-center text-2xl font-semibold text-green-400 lg:text-left">The result?</p>
                        <ul className="grid gap-4 text-base sm:text-lg">
                            <li className="border-y border-white/15 px-6 py-4 transition-colors duration-300 hover:border-green-500">Less manual work</li>
                            <li className="border-y border-white/15 px-6 py-4 transition-colors duration-300 hover:border-green-500">Fewer data entry mistakes</li>
                            <li className="border-y border-white/15 px-6 py-4 transition-colors duration-300 hover:border-green-500">Faster inventory and harvest workflows</li>
                            <li className="border-y border-white/15 px-6 py-4 transition-colors duration-300 hover:border-green-500">Lower equipment costs</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mx-auto my-24 max-w-6xl px-6 sm:px-8">
                <h2 className="mb-10 text-center text-xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                    How to
                </h2>
                <video
                    className="mx-auto block h-[76vh] max-h-[48rem] w-full max-w-5xl rounded-lg bg-black object-contain"
                    src="/videos/how-to.MOV"
                    autoPlay
                    controls
                    loop
                    muted
                    playsInline
                    preload="auto"
                />
            </div>

            <div className="animate-fade-in mx-auto max-w-6xl px-6 text-center">
                <h2 className="mb-10 text-xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                    What Users Are Saying
                </h2>
                <div className="grid gap-5 md:grid-cols-2">
                    <figure className="border-y border-white/15 px-6 py-8 transition-colors duration-300 hover:border-green-500">
                        <div className="mb-4 text-2xl text-green-400">★★★★★</div>
                        <blockquote className="text-xl">“Faster than my expensive scanner and cheaper.”</blockquote>
                    </figure>
                    <figure className="border-y border-white/15 px-6 py-8 transition-colors duration-300 hover:border-green-500">
                        <div className="mb-4 text-2xl text-green-400">★★★★★</div>
                        <blockquote className="text-xl">“Easy to use and it makes the whole process faster.”</blockquote>
                    </figure>
                </div>
                <div className="mt-10">
                    <Button
                        title="Reviews"
                        href="https://apps.apple.com/us/app/easyuana/id6742842577?see-all=reviews&platform=iphone"
                    />
                </div>

                <h2 className="mb-10 mt-24 text-xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                    Perfect For
                </h2>
                <ul className="grid gap-4 text-base sm:grid-cols-2 lg:grid-cols-3">
                    {perfectFor.map((item) => (
                        <li key={item} className="border-y border-white/15 px-6 py-4 uppercase tracking-[0.16em] transition-colors duration-300 hover:border-green-500">
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="mx-auto mt-24 max-w-5xl">
                    <h2 className="mb-10 text-xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight">
                        The Scanner You Already Own
                    </h2>
                    <div className="mx-auto max-w-4xl space-y-6 text-xl leading-relaxed sm:text-2xl">
                        <p className="m-0">
                            If your team is carrying smartphones, you may already have everything needed to collect METRC tag data efficiently.
                        </p>
                        <p className="m-0">
                            Download EasyUana and see why growers are replacing dedicated scanners with the device already in their pocket.
                        </p>
                    </div>
                </div>
            </div>

        </section>

    )
}

const perfectFor = [
    "Cultivators",
    "Compliance Managers",
    "Harvest Teams",
    "Inventory Specialists",
    "Multi-Facility Operators",
    "Cannabis Consultants",
];

const imgOne = '/img-one.png';
const imgTwo = '/img-two.JPG';
const imgThree = '/img-three.JPG';

export default About
