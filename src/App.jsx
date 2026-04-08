import React, { useEffect } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import gsap from "gsap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Download from "./components/Download";
import TermsAndConditions  from "./components/TermsAndConditions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function AppContent() {
    const location = useLocation();

    useEffect(() => {
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

        // create pixels
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

    }, [location.pathname]);

    return (
        <div className="bg-black min-h-screen text-white">
            {/* Navbar + Auth Buttons */}
            <Navbar />

            {/* Routes */}
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
                <Route path="/termsAndConditions" element={<Navigate to="/terms-and-conditions" replace />} />
            </Routes>

            {/* Footer */}
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
