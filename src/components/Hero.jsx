import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { animateWithGsap } from '../utils/animations';
import Button from './Button';

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const productImages = [
        { src: "/img-one.png", alt: "Packaged cannabis flower" },
        { src: "/img-two.JPG", alt: "Cannabis flower closeup in packaging" },
        { src: "/img-three.JPG", alt: "Cannabis flower texture" },
    ];

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

                <div className="mx-auto grid max-w-6xl items-center gap-10 border-y border-white/20 py-10 lg:grid-cols-[1fr_18rem]">
                    <div>
                        <p className="m-0 mb-8 text-center text-2xl font-semibold lg:text-left">With EasyUana, your team can use an iPhone to:</p>
                        <ul className="grid gap-x-12 gap-y-5 text-lg sm:grid-cols-2">
                            <li className="border-l border-green-500/70 pl-4">Scan METRC tags in seconds</li>
                            <li className="border-l border-green-500/70 pl-4">Export directly to CSV</li>
                            <li className="border-l border-green-500/70 pl-4">Organize scans by harvest or batch</li>
                            <li className="border-l border-green-500/70 pl-4">Reduce manual data entry</li>
                            <li className="border-l border-green-500/70 pl-4 sm:col-span-2">Eliminate the need for dedicated scanning hardware</li>
                        </ul>
                    </div>
                    <img
                        src="/app-use.png"
                        alt="EasyUana app in use"
                        className="mx-auto h-auto max-h-[34rem] w-full max-w-[18rem] object-contain"
                    />
                </div>

                <div className="pt-10">
                    <Button title="Download" href="https://apps.apple.com/us/app/easyuana/id6742842577" />
                </div>

                <div className="flex flex-nowrap items-stretch gap-5 overflow-x-auto pb-3">
                    {productImages.map((image) => (
                        <div key={image.src} className="min-w-[16rem] flex-1 overflow-hidden border-y border-white/10 sm:min-w-0">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="h-72 w-full object-cover object-center sm:h-80"
                            />
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Hero
