import React from "react";
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
