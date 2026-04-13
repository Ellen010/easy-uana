import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../utils/animations.js'

gsap.registerPlugin(useGSAP);

const PrivacyPolicy = () => {

    useGSAP(() => {

        animateWithGsap('#privacy-policy', {
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
        <section id="privacy-policy" className="my-30">
                <img src="/logo.png" alt="logo" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] opacity-30 pointer-events-none" />

                <h1 className="animate-fade-in animate-grow text-center text-xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl dark:text-mist-50 light:text-emerald-950 mb-30">
                    Privacy Policy for Easy-Uana
                </h1>

                <p className="animate-fade-in animate-grow">
                    Last Updated: 05.22.2025
                </p>

                <p className="animate-fade-in animate-grow">
                    This Privacy Policy describes how Easy-uana (the "App", "we", "us", or "our") collects, uses, and discloses your personal information when you use our mobile application and services (collectively, the "Services"). By accessing or using our Services, you agree to the terms of this Privacy Policy.
                </p>

                <p className="animate-fade-in animate-grow">
                    1. Information We Collect
                    a. Information You Provide to Us
                    Contact Information: Name, email address, phone number.
                    Account Credentials: If registration is required, we collect username, password, and security questions.
                    Support Communications: Any data you send when contacting our support.
                </p>

                <p className="animate-fade-in animate-grow">
                    b. Automatically Collected Information
                    Device Data: Type, OS version, unique identifiers.
                    Usage Data: Interactions with the App, timestamps, navigation paths.
                    Location Data: Approximated via IP or precise if permission is granted.
                </p>

                <p className="animate-fade-in animate-grow">
                    c. RFID & Compliance Data
                    We collect data from RFID scans to ensure compliance with METRC tracking standards.
                </p>

                <p className="animate-fade-in animate-grow">
                    d. Information from Third Parties
                    We may receive information from service providers like analytics platforms, advertising partners, or cloud hosting services.
                </p>

                <p className="animate-fade-in animate-grow">
                    2. How We Use Your Information
                    We use your information to:
                    Provide and improve the App’s features and functionality.
                    Ensure compliance with cannabis regulatory tracking systems (e.g., METRC).
                    Authenticate users and protect accounts.
                    Communicate with you about updates, changes, or issues.
                    Personalize your experience.
                    Comply with legal obligations.
                </p>

                <p className="animate-fade-in animate-grow">
                    3. Sharing Your Information
                    We may share your information:
                    With third-party vendors for hosting, analytics, or payment processing.
                    With regulatory bodies (e.g., METRC) as required.
                    In case of business transfers such as mergers or acquisitions.
                    When legally required, such as in response to law enforcement.
                    With your consent or at your direction.
                </p>

                <p className="animate-fade-in animate-grow">
                    4. Cookies and Tracking Technologies
                    We and our service providers use technologies like cookies and SDKs for analytics and improvement of user experience. These may collect data like session length, screen views, and crash reports.
                </p>

                <p className="animate-fade-in animate-grow">
                    5. Data Retention
                    We retain personal information for as long as necessary to provide the Services, comply with legal obligations, resolve disputes, and enforce agreements.
                </p>

                <p className="animate-fade-in animate-grow">
                    6. Your Rights
                    Depending on your location, you may have rights to:
                    Access, update, or delete your personal data.
                    Object to or restrict data processing.
                    Withdraw consent (where applicable).
                    Lodge a complaint with a supervisory authority.
                    To exercise your rights, contact us at: help.easyuana@gmail.com
                </p>

                <p className="animate-fade-in animate-grow">
                    7. Children’s Privacy
                    Our App is not intended for individuals under the age of 18. We do not knowingly collect data from children.
                </p>

                <p className="animate-fade-in animate-grow">
                    8. Security
                    We take reasonable technical and organizational measures to protect your data. However, no system is completely secure.
                </p>

                <p className="animate-fade-in animate-grow">
                    9. International Transfers
                    Your information may be transferred to, and maintained on, servers outside of your jurisdiction. We use standard contractual clauses where required by law.
                </p>

                <p className="animate-fade-in animate-grow">
                    10. Changes to This Privacy Policy
                    We may update this policy from time to time. Revisions will be posted in the App or on our website with an updated “Last Updated” date.
                </p>

                <p className="animate-fade-in animate-grow">
                    11. Contact Us
                    If you have any questions about this Privacy Policy or your data, please contact us at: help.easyuana@gmail.com
                </p>

        </section>
    )
}

export default PrivacyPolicy
