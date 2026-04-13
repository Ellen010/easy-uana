import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Download from "./components/Download";
import TermsAndConditions  from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotAffiliatedWithMetrc from "./components/NotAffiliatedWithMETRC";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

const AGE_VERIFICATION_KEY = "easy-uana-age-verification";

function AppContent() {
    const location = useLocation();
    const [ageVerification, setAgeVerification] = useState(() => {
        if (typeof window === "undefined") {
            return null;
        }

        return window.localStorage.getItem(AGE_VERIFICATION_KEY);
    });

    useEffect(() => {
        if (ageVerification !== "yes") {
            return;
        }

        if (location.pathname !== "/") {
            return;
        }

        const grid = document.getElementById("pixel-grid");
        const intro = document.getElementById("intro");
        if (!grid || !intro) return;

        grid.innerHTML = "";
        const cols = 40;
        const rows = 25;
        let hasAnimated = false;

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const pixel = document.createElement("div");
                pixel.classList.add("pixel");

                pixel.style.left = `${(x * 100) / cols}%`;
                pixel.style.top = `${(y * 100) / rows}%`;

                pixel.style.backgroundPosition =
                    `${(x * 100) / (cols - 1)}% ${(y * 100) / (rows - 1)}%`;

                grid.appendChild(pixel);
            }
        }

        const triggerIntroAnimation = () => {
            if (hasAnimated) return;
            hasAnimated = true;

            gsap.to(".pixel", {
                opacity: 0,
                scale: 0,
                duration: 0.1,
                stagger: {
                    amount: 0.95,
                    from: "random"
                },
                onComplete: () => {
                    if (intro) intro.style.display = "none";
                }
            });

            removeListeners();
        };

        const removeListeners = () => {
            window.removeEventListener("scroll", triggerIntroAnimation);
            window.removeEventListener("mousemove", triggerIntroAnimation);
            window.removeEventListener("click", triggerIntroAnimation);
            window.removeEventListener("keydown", triggerIntroAnimation);
        };

        window.addEventListener("scroll", triggerIntroAnimation);
        window.addEventListener("mousemove", triggerIntroAnimation);
        window.addEventListener("click", triggerIntroAnimation);
        window.addEventListener("keydown", triggerIntroAnimation);
        const autoDismissTimer = window.setTimeout(triggerIntroAnimation, 1200);

        return () => {
            window.clearTimeout(autoDismissTimer);
            removeListeners();
            grid.innerHTML = "";
        };

    }, [ageVerification, location.pathname]);

    useEffect(() => {
        if (typeof window === "undefined" || !ageVerification) {
            return;
        }

        window.localStorage.setItem(AGE_VERIFICATION_KEY, ageVerification);
    }, [ageVerification]);

    if (ageVerification === "no") {
        return (
            <div className="age-screen">
                <div className="age-screen__content">
                    <h2 className="age-screen__title">Access restricted</h2>
                    <p className="age-screen__notice">
                        This website contains information about cannabis cultivation and compliance tools.
                        You must be 21 years of age or older to enter.
                    </p>
                </div>
            </div>
        );
    }

    if (ageVerification !== "yes") {
        return (
            <div className="age-gate" role="dialog" aria-modal="true" aria-labelledby="age-gate-title">
                <div className="age-gate__panel">
                    <span className="age-gate__eyebrow">Age verification</span>
                    <h2 id="age-gate-title" className="age-gate__title">Are you 21+ years old?</h2>
                    <p className="age-gate__text">
                        Please confirm your age before entering the website.
                    </p>
                    <div className="age-gate__actions">
                        <button
                            type="button"
                            className="age-gate__button age-gate__button--primary"
                            onClick={() => setAgeVerification("yes")}
                        >
                            Yes
                        </button>
                        <button
                            type="button"
                            className="age-gate__button age-gate__button--secondary"
                            onClick={() => setAgeVerification("no")}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />

            <Routes>
                <Route
                path="/"
                element={
                    <>
                        <Hero />
                        <About />
                        <Download />
                            <Contact />
                        </>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/download" element={<Download />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/NotAffiliatedWithMetrc" element={<NotAffiliatedWithMetrc  />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/termsAndConditions" element={<Navigate to="/terms-and-conditions" replace />} />
            </Routes>

            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
