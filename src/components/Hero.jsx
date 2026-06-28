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

        gsap.fromTo(
            '.hero-feature-item',
            {
                autoAlpha: 0,
                y: 24
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.75,
                ease: 'power2.out',
                stagger: 0.12,
                scrollTrigger: {
                    trigger: '.hero-feature-list',
                    start: 'top 82%',
                    toggleActions: 'restart reverse restart reverse'
                }
            }
        );

    }, []);

    return (
        <section id="hero" className="my-30">

            <div className="animate-fade-in mx-auto max-w-6xl px-6 sm:px-8 leading-relaxed space-y-8 text-2xl">
                <div className="space-y-5 text-center">
                    <p className="m-0 text-3xl font-semibold">Why Spend Hundreds on a Scanner?</p>
                    <p className="m-0 text-4xl font-bold text-white">Turn Your iPhone Into a METRC Tag Scanner.</p>
                    <p className="m-0">
                        EasyUana helps cannabis operators scan METRC tags, organize harvest data, and export to CSV using the device they already carry every day.
                    </p>
                    <p className="m-0 font-semibold text-green-400">Save Money. Save Time. Simplify Compliance.</p>
                    <p className="m-0">
                        Dedicated scanners can cost hundreds of dollars per device and still require employees to carry extra hardware.
                    </p>
                </div>

                <div className="mx-auto grid max-w-6xl items-center gap-10 border-y border-white/20 py-10 transition-colors duration-300 hover:border-green-500 lg:grid-cols-[30rem_1fr]">
                    <div className="relative mx-auto h-[34rem] w-full max-w-[30rem] overflow-hidden rounded-md border-y border-white/15 transition-colors duration-300 hover:border-green-500">
                        <img
                            src="/app-use.png"
                            alt="EasyUana app used to scan cannabis tags"
                            className="g_grow h-full w-full rounded-md object-cover object-center"
                        />
                    </div>
                    <div className="w-full">
                        <p className="m-0 mb-10 text-center text-2xl font-semibold leading-snug lg:text-left lg:text-3xl">With EasyUana, your team can use an iPhone to:</p>
                        <ul className="hero-feature-list grid gap-5 text-base leading-relaxed sm:text-lg md:grid-cols-2 lg:gap-6">
                            {features.map((feature, index) => (
                                <li
                                    key={feature}
                                    className={`hero-feature-item min-h-20 border-l border-green-500/70 px-5 py-4 transition-all duration-300 hover:border-green-400 hover:bg-white/[0.03] hover:pl-7 ${index === features.length - 1 ? 'md:col-span-2' : ''}`}
                                >
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-10">
                    <Button title="Download" href="https://apps.apple.com/us/app/easyuana/id6742842577" />
                </div>

            </div>

        </section>
    )
}

const features = [
    'Scan METRC tags in seconds',
    'Export directly to CSV',
    'Organize scans by harvest or batch',
    'Reduce manual data entry',
    'Eliminate the need for dedicated scanning hardware',
];

export default Hero
