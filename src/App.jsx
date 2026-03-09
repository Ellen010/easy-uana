import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { Auth0Provider } from "@auth0/auth0-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";

function App() {
    return (
        <Router>
            <div className="bg-black min-h-screen text-white">
                {/* Navbar + Auth Buttons */}
                <Navbar />
                <nav className="p-4 flex justify-end">
                    <AuthButtons />
                </nav>

                {/* Routes */}
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Navbar />
                                {/* <Highlights />
                <ClientSpace />
                <Model />
                <Features />
                <HowItWorks />
                <Footer /> */}
                            </>
                        }
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/designs" element={<Designs />} />
                    <Route path="/equipment" element={<Equipment />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/filament" element={<Filament />} />
                    <Route path="/highlights" element={<Highlights />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/model" element={<Model />} />
                    <Route path="/software" element={<Software />} />
                    <Route path="/client-space" element={<ClientSpace />} />
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
