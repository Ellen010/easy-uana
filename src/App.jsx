import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { Auth0Provider } from "@auth0/auth0-react";
import gsap from "gsap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Download from "./components/Download";
import TermsAndConditions  from "./components/TermsAndConditions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {

    useEffect(() => {

        const grid = document.getElementById("pixel-grid");
        const cols = 40;
        const rows = 25;

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

            gsap.to(".pixel", {
                opacity: 0,
                scale: 0,
                duration: 0.1,
                stagger: {
                    amount: 0.95,
                    from: "random"
                },
                onComplete: () => {
                    const intro = document.getElementById("intro");
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

        return () => removeListeners();

    }, []);

    return (
        <Router>
            <div className="bg-black min-h-screen text-white">
                {/* Navbar + Auth Buttons */}
                <Navbar />

                {/* Routes */}
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <div id="intro">
                                    <div id="pixel-grid"></div>
                                </div>
                                <Hero />
                                <About />
                                <Download />
                                <TermsAndConditions />
                                <Contact />
                            </>
                        }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/download" element={<Download />} />
                    <Route path="/termsAndConditions" element={<TermsAndConditions />} />
                </Routes>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Auth0Provider
            domain="YOUR_AUTH0_DOMAIN"
            clientId="YOUR_AUTH0_CLIENT_ID"
            authorizationParams={{ redirect_uri: window.location.origin }}
        >
            {Sentry.withProfiler(<App />)}
        </Auth0Provider>
    </React.StrictMode>
);

export default App;
