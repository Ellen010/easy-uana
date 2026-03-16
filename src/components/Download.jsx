import React from 'react';

const Download = () => {

    return (
        <section className="my-30">

            <h2 className="text-center text-xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl dark:text-mist-50 light:text-emerald-950">Download</h2>
            <p className="items-center justify-center text-2xl">
                Easy-uana is now available on the Apple App Store, giving licensed cannabis growers a faster and smarter way to manage METRC compliance. Instead of manually typing RFID tag numbers and formatting spreadsheets, Easy-uana lets you capture tag numbers directly with your iPhone, automatically format them into METRC-ready templates, and export the data instantly.
            </p>
            <p className="text-evenly text-2xl">
                The app is designed to save time, reduce human error, and simplify plant tracking for cannabis cultivation businesses operating in regulated states. Download Easy-uana today from the App Store and streamline your compliance workflow with a tool built specifically for growers.
            </p>
            <div className="flex flex-col items-center opacity-100 translate-y-10 mt-3 mb-3">
                <a href="https://apps.apple.com/us/app/easyuana/id6742842577" className="px-20 py-5 rounded-3xl bg-green-500 m-5 hover:bg-green-200 backdrop-blur flex-center text-white text-2xl" target="_blank" rel="noopener noreferrer"> Download </a>
            </div>

        </section>
    );
};

export default Download;