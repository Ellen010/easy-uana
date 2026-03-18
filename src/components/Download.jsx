import React from 'react';
import Button from "../components/Button";

const Download = () => {

    return (
        <section className="my-30">

            <h2 className="text-center text-xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl dark:text-mist-50 light:text-emerald-950 mb-30">Download</h2>
            <p className="items-center justify-center text-2xl">
                Easy-uana is now available on the Apple App Store, giving licensed cannabis growers a faster and smarter way to manage METRC compliance. Instead of manually typing RFID tag numbers and formatting spreadsheets, Easy-uana lets you capture tag numbers directly with your iPhone, automatically format them into METRC-ready templates, and export the data instantly.
            </p>
            <p className="text-evenly text-2xl">
                The app is designed to save time, reduce human error, and simplify plant tracking for cannabis cultivation businesses operating in regulated states. Download Easy-uana today from the App Store and streamline your compliance workflow with a tool built specifically for growers.
            </p>
            <Button title="Download" href="https://apps.apple.com/us/app/easyuana/id6742842577"/>

        </section>
    );
};

export default Download;