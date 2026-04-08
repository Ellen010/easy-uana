import React from 'react'
import gsap from 'gsap'
import {useGSAP} from "@gsap/react";
import {animateWithGsap} from "../utils/animations.js";

gsap.registerPlugin(useGSAP);

const TermsAndConditions = () => {

    useGSAP(() => {

        animateWithGsap('#terms', {
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
        <section id="terms" className="my-30 relative">
            <div className="m-9 relative max-w-6xl mx-auto leading-relaxed space-y-6 text-center text-lg sm:text-xl">
                <img src="/logo.png" alt="logo" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] opacity-30 pointer-events-none"/>

                <h1 className="animate-fade-in animate-grow text-center text-xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl dark:text-mist-50 light:text-emerald-950 mb-30">
                    TERMS AND CONDITIONS for Easy-Uana
                </h1>
                <p className="animate-fade-in animate-grow">
                        Last Updated: 05.22.2025
                    </p>
                <p className="animate-fade-in animate-grow">
                        Welcome to Easy Uana ("App"), a software application designed to assist licensed cannabis businesses in managing plant tags, harvesting, and compliance reporting for METRC in legal states. Please read these Terms and Conditions ("Terms") carefully before using the App.
                    </p>
                    <p className="animate-fade-in animate-grow">
                        By accessing or using Easy Uana, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use the App.
                    </p>

                <p className="animate-fade-in animate-grow">
                        1. Eligibility
                        You must be at least 21 years old and hold a valid cannabis license in a state where cannabis is legally regulated to use this App. By using Easy Uana, you confirm that you meet these requirements.

                    </p>
                <p className="animate-fade-in animate-grow">
                        2. Compliance with Laws
                        You are solely responsible for ensuring compliance with all applicable federal, state, and local cannabis regulations, including but not limited to METRC requirements. The App is a tool for facilitating compliance but does not guaranteecompliance with any legal or regulatory obligations.

                    </p>
                <p className="animate-fade-in animate-grow">
                        3. Account Registration
                        To use the App, you must create an account with accurate and complete information.

                        You are responsible for maintaining the security of your account and password.

                        Any activity occurring under your account is your responsibility.
                    </p>
                    <p className="animate-fade-in animate-grow">
                        4. Use of the App
                        The App is intended for use by licensed cannabis businesses for tracking plant tags, harvesting, and compliance reporting with METRC.

                        You agree not to use the App for any unlawful or unauthorized purpose.

                        You may not modify, reverse-engineer, or exploit any part of the App.
                    </p>
                    <p className="animate-fade-in animate-grow">
                        5. Data Collection and Privacy
                        The App may collect and store data related to cannabis cultivation, plant tags, and harvesting.

                        We do not sell or distribute your data to third parties without your consent, except as required by law or for METRC integration.

                        For more information, please refer to our Privacy Policy.
                    </p>
                    <p className="animate-fade-in animate-grow">
                        6. Integration with METRC
                        The App is designed to facilitate reporting to METRC, but is not an official METRC product.

                        You acknowledge that METRC may have its own data requirements, and it is your responsibility to verify that all submitted information is accurate and complete.

                    </p>
                    <p className="animate-fade-in animate-grow">
                        7. Fees and Payments
                        Certain features of the App may require payment of fees.

                        All payments are non-refundable unless otherwise specified.

                        Failure to pay fees may result in suspension or termination of your account.
                    </p>
                    <p className="animate-fade-in animate-grow">
                        8. Intellectual Property
                        All content, features, and functionality of the App, including software, trademarks, and logos, are the property of Best Consulting USA.

                        You are granted a limited, non-exclusive, and non-transferable license to use the App solely for business purposes related to cannabis compliance.

                    </p>
                    <p className="animate-fade-in animate-grow">
                        9. Termination
                        We reserve the right to suspend or terminate your account at any time if you violate these Terms.

                        You may terminate your account at any time, but no refunds will be issued for any unused portion of a paid subscription.
                    </p>
                    <p className="animate-fade-in animate-grow">
                        10. Disclaimers and Limitation of Liability
                        The App is provided "as is" without warranties of any kind.

                        We are not liable for any damages, losses, or regulatory penalties resulting from the use or inability to use the App.

                        We do not provide legal advice. You should consult a qualified attorney for legal compliance guidance.

                    </p>
                    <p className="animate-fade-in animate-grow">
                        11. Indemnification
                        You agree to indemnify and hold harmless Best Consulting USA  from any claims, liabilities, damages, or expenses arising from your use of the App or violation of these Terms.

                    </p>
                    <p className="animate-fade-in animate-grow">
                        12. Changes to These Terms
                        We may update these Terms from time to time. Continued use of the App after any modifications constitutes your acceptance of the updated Terms.

                    </p>
                    <p className="animate-fade-in animate-grow">
                        13. Governing Law
                        These Terms are governed by the laws of USA, without regard to its conflict of law principles.
                    </p>
                    <p className="animate-fade-in animate-grow">

                        14. Apple Standard End User License Agreement (EULA)
                        If you download or use Easy-Uana via the Apple App Store, your use of the App is also subject to Apple’s Standard End User License Agreement (EULA), which can be found here:
                        https://www.apple.com/legal/internet-services/itunes/dev/stdeula/

                        In the event of any conflict between these Terms and the Apple EULA, the Apple EULA will apply to the extent required by Apple.

                    </p>
                    <p className="animate-fade-in animate-grow">

                        15. Contact Information
                        For any questions regarding these Terms, please contact us at help.easyuana@gmail.com
                    </p>

            </div>
        </section>
    )
}
export default TermsAndConditions
