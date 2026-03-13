import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { Auth0Provider } from "@auth0/auth0-react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Download from "./components/Download";
import TermsAndConditions  from "./components/TermsAndConditions";
import Footer from "./components/Footer";
import "./index.css";

function App() {
    useEffect(() => {
        const intro = document.getElementById("intro");

        const handleScroll = () => {
            if (!intro) return;

            intro.classList.add("open");

            setTimeout(() => {
                intro.style.display = "none";
            }, 1200);

            window.removeEventListener("scroll", handleScroll);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Router>
            <div className="bg-black min-h-screen text-white">
                {/* Navbar + Auth Buttons */}


                {/* Routes */}
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <div id="intro">
                                    <div className="uana left"></div>
                                    <div className="uana right"></div>
                                </div>
                                <Navbar />
                                <About />
                                <Download />
                                <TermsAndConditions />
                                {/* <Highlights />
                <ClientSpace />
                <Model />
                <Features />
                <HowItWorks />
                <Footer /> */}
                            </>
                        }
                    />
                    <Route path="/download" element={<Download />} />
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
